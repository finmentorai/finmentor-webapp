// Auction Ranking Strategy
export interface AuctionScore {
  auctionId: string
  termId?: string
  newsId?: string
  score: number
  bidAmount: number
  impressionCount: number
  clickCount: number
}

export class AuctionRankingStrategy {
  /**
   * Calculate auction score based on multiple factors
   * @param params Auction scoring parameters
   * @returns Calculated auction score
   */
  static calculateScore(params: {
    bidAmount: number
    impressionCount: number
    clickCount: number
    clickThroughRate?: number
  }): number {
    // Scoring weights - can be adjusted based on business logic
    const WEIGHTS = {
      BID_AMOUNT: 0.4,
      IMPRESSIONS: 0.2,
      CLICKS: 0.3,
      CLICK_THROUGH_RATE: 0.1,
    }

    // Normalize and calculate individual score components
    const bidScore = this.normalizeBidAmount(params.bidAmount)
    const impressionScore = this.normalizeImpressions(params.impressionCount)
    const clickScore = this.normalizeClicks(params.clickCount)
    const ctrScore = params.clickThroughRate
      ? this.normalizeClickThroughRate(params.clickThroughRate)
      : 0

    // Weighted calculation of final score
    return (
      bidScore * WEIGHTS.BID_AMOUNT +
      impressionScore * WEIGHTS.IMPRESSIONS +
      clickScore * WEIGHTS.CLICKS +
      ctrScore * WEIGHTS.CLICK_THROUGH_RATE
    )
  }

  /**
   * Normalize bid amount to a 0-1 scale
   */
  private static normalizeBidAmount(amount: number): number {
    // Use logarithmic scaling to handle wide range of bid amounts
    return Math.min(1, Math.log(amount + 1) / 10)
  }

  /**
   * Normalize impression count to a 0-1 scale
   */
  private static normalizeImpressions(count: number): number {
    return Math.min(1, Math.log(count + 1) / 10)
  }

  /**
   * Normalize click count to a 0-1 scale
   */
  private static normalizeClicks(count: number): number {
    return Math.min(1, Math.log(count + 1) / 10)
  }

  /**
   * Normalize click-through rate to a 0-1 scale
   */
  private static normalizeClickThroughRate(rate: number): number {
    // Clamp CTR between 0 and 1
    return Math.max(0, Math.min(1, rate))
  }

  /**
   * Rank auctions based on calculated scores
   * @param auctions Array of auction scores to rank
   * @returns Ranked auctions from highest to lowest score
   */
  static rankAuctions(auctions: AuctionScore[]): AuctionScore[] {
    return auctions
      .sort((a, b) => b.score - a.score)
      .map((auction, index) => ({
        ...auction,
        rank: index + 1,
      }))
  }

  /**
   * Calculate click-through rate
   */
  static calculateClickThroughRate(
    impressions: number,
    clicks: number,
  ): number {
    return impressions > 0 ? Math.min(1, clicks / impressions) : 0
  }
}

// Example usage and type extensions
export interface RankedAuction extends AuctionScore {
  rank?: number
}

// Utility function to prepare auction for ranking
export function prepareAuctionForRanking(auction: {
  id: string
  termId?: string
  newsId?: string
  bids: { amount: number }[]
  impressions: { id: string }[]
  clicks: { id: string }[]
}): AuctionScore {
  const bidAmount = auction.bids.reduce(
    (max, bid) => Math.max(max, bid.amount),
    0,
  )

  const impressionCount = auction.impressions.length
  const clickCount = auction.clicks.length

  const clickThroughRate = AuctionRankingStrategy.calculateClickThroughRate(
    impressionCount,
    clickCount,
  )

  return {
    auctionId: auction.id,
    termId: auction.termId,
    newsId: auction.newsId,
    bidAmount,
    impressionCount,
    clickCount,
    score: AuctionRankingStrategy.calculateScore({
      bidAmount,
      impressionCount,
      clickCount,
      clickThroughRate,
    }),
  }
}
