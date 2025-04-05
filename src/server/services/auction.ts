import {
  PrismaClient,
  Auction,
  Bid,
  AuctionStatus,
  BidStatus,
} from '@prisma/client'

export class AuctionService {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  /**
   * Create a new auction for a specific term or news item
   */
  async createAuction(params: {
    creatorId: string
    termId?: string
    newsId?: string
    dailyBudget: number
    totalBudget: number
    endDate?: Date
  }): Promise<Auction> {
    // Validate input
    if (!params.termId && !params.newsId) {
      throw new Error('Must specify either a termId or newsId')
    }

    return this.prisma.auction.create({
      data: {
        creator: { connect: { id: params.creatorId } },
        term: params.termId ? { connect: { id: params.termId } } : undefined,
        news: params.newsId ? { connect: { id: params.newsId } } : undefined,
        dailyBudget: params.dailyBudget,
        totalBudget: params.totalBudget,
        endDate: params.endDate,
        status: AuctionStatus.ACTIVE,
      },
    })
  }

  /**
   * Place a bid on an existing auction
   */
  async placeBid(params: {
    bidderId: string
    auctionId: string
    amount: number
    maxBid?: number
    termId?: string
    newsId?: string
  }): Promise<Bid> {
    // Validate auction is active
    const auction = await this.prisma.auction.findUnique({
      where: { id: params.auctionId, status: AuctionStatus.ACTIVE },
    })

    if (!auction) {
      throw new Error('Auction is not active or does not exist')
    }

    // Check budget constraints
    if (auction.spentBudget + params.amount > auction.totalBudget) {
      throw new Error('Bid exceeds remaining auction budget')
    }

    return this.prisma.bid.create({
      data: {
        bidder: { connect: { id: params.bidderId } },
        auction: { connect: { id: params.auctionId } },
        amount: params.amount,
        maxBid: params.maxBid || params.amount,
        term: params.termId ? { connect: { id: params.termId } } : undefined,
        news: params.newsId ? { connect: { id: params.newsId } } : undefined,
        status: BidStatus.ACTIVE,
      },
    })
  }

  /**
   * Get active auctions for a specific term or news item
   */
  async getActiveAuctions(params: { termId?: string; newsId?: string }) {
    return this.prisma.auction.findMany({
      where: {
        status: AuctionStatus.ACTIVE,
        OR: [{ termId: params.termId }, { newsId: params.newsId }],
      },
      select: {
        id: true,
        termId: true,
        newsId: true,
        bids: {
          select: { amount: true },
        },
        impressions: {
          select: { id: true },
        },
        clicks: {
          select: { id: true },
        },
      },
    })
  }

  /**
   * Calculate and update auction status based on budget and time
   */
  async updateAuctionStatus(auctionId: string): Promise<Auction> {
    const auction = await this.prisma.auction.findUnique({
      where: { id: auctionId },
    })

    if (!auction) {
      throw new Error('Auction not found')
    }

    // Check if auction should be completed based on budget or end date
    const shouldComplete =
      auction.spentBudget >= auction.totalBudget ||
      (auction.endDate && auction.endDate < new Date())

    if (shouldComplete) {
      return this.prisma.auction.update({
        where: { id: auctionId },
        data: {
          status: AuctionStatus.COMPLETED,
        },
      })
    }

    return auction
  }

  /**
   * Get top bids for a specific auction
   */
  async getTopBids(auctionId: string, limit: number = 5): Promise<Bid[]> {
    return this.prisma.bid.findMany({
      where: {
        auctionId: auctionId,
        status: BidStatus.ACTIVE,
      },
      orderBy: { amount: 'desc' },
      take: limit,
      include: {
        bidder: true,
      },
    })
  }
}

// Utility function for calculating bid ranking
export function calculateBidRanking(bids: Bid[]): Bid[] {
  return bids.sort((a, b) => b.amount - a.amount)
}
