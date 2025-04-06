import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { AuctionService } from '@/server/services/auction'
import {
  validateAuctionCreation,
  validateBidPlacement,
  handleValidationError,
} from '@/server/schema/index'
import {
  prepareAuctionForRanking,
  AuctionRankingStrategy,
} from '@/server/services/auctionRanking'

export class AuctionController {
  private auctionService: AuctionService

  constructor() {
    this.auctionService = new AuctionService()
  }

  /**
   * Create a new auction
   */
  async createAuction(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Validate input
      const validatedData = validateAuctionCreation(req.body)

      // Create auction
      const auction = await this.auctionService.createAuction(validatedData)

      res.status(201).json({
        success: true,
        data: auction,
      })
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json(handleValidationError(error))
      }

      // Handle other errors
      console.error('Auction creation error:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to create auction',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }

  /**
   * Place a bid on an existing auction
   */
  async placeBid(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Validate input
      const validatedData = validateBidPlacement(req.body)

      // Place bid
      const bid = await this.auctionService.placeBid(validatedData)

      res.status(201).json({
        success: true,
        data: bid,
      })
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json(handleValidationError(error))
      }

      // Handle other errors
      console.error('Bid placement error:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to place bid',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }

  /**
   * Get active auctions for a term or news item
   */
  async getActiveAuctions(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { termId, newsId } = req.query

      // Validate query parameters
      const parsedTermId = termId ? String(termId) : undefined
      const parsedNewsId = newsId ? String(newsId) : undefined

      // Fetch active auctions
      const auctions = await this.auctionService.getActiveAuctions({
        termId: parsedTermId,
        newsId: parsedNewsId,
      })

      // Prepare auctions for ranking
      const rankedAuctions = auctions.map((auction) =>
        prepareAuctionForRanking({
          ...auction,
          termId: auction.termId || undefined,
          newsId: auction.newsId || undefined,
        }),
      )

      // Rank auctions
      const finalRankedAuctions =
        AuctionRankingStrategy.rankAuctions(rankedAuctions)

      res.status(200).json({
        success: true,
        data: finalRankedAuctions,
      })
    } catch (error) {
      console.error('Fetch auctions error:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to fetch active auctions',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }

  async getAllActiveAuctions(req: NextApiRequest, res: NextApiResponse) {
    try {
      const auctions = await this.auctionService.getAllActiveAuctions()
      res.status(200).json({
        success: true,
        data: auctions,
      })
    } catch (error) {
      console.error('Fetch all active auctions error:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to fetch all active auctions',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }

  /**
   * Get top bids for a specific auction
   */
  async getTopBids(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { auctionId } = req.query
      const limit = req.query.limit ? Number(req.query.limit) : 5

      // Validate auction ID
      if (!auctionId || typeof auctionId !== 'string') {
        return res.status(400).json({
          success: false,
          message: 'Invalid auction ID',
        })
      }

      // Fetch top bids
      const topBids = await this.auctionService.getTopBids(auctionId, limit)

      res.status(200).json({
        success: true,
        data: topBids,
      })
    } catch (error) {
      console.error('Fetch top bids error:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to fetch top bids',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }

  /**
   * Update auction status
   */
  async updateAuctionStatus(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { auctionId } = req.body

      // Validate auction ID
      if (!auctionId || typeof auctionId !== 'string') {
        return res.status(400).json({
          success: false,
          message: 'Invalid auction ID',
        })
      }

      // Update auction status
      const updatedAuction =
        await this.auctionService.updateAuctionStatus(auctionId)

      res.status(200).json({
        success: true,
        data: updatedAuction,
      })
    } catch (error) {
      console.error('Update auction status error:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to update auction status',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }
}

// // Export route handler
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const controller = new AuctionController()

//   switch (req.method) {
//     case 'POST':
//       if (req.query.action === 'createAuction') {
//         return controller.createAuction(req, res)
//       } else if (req.query.action === 'placeBid') {
//         return controller.placeBid(req, res)
//       } else if (req.query.action === 'updateAuctionStatus') {
//         return controller.updateAuctionStatus(req, res)
//       }
//       break
//     case 'GET':
//       if (req.query.action === 'activeAuctions') {
//         return controller.getActiveAuctions(req, res)
//       } else if (req.query.action === 'topBids') {
//         return controller.getTopBids(req, res)
//       }
//       break
//     default:
//       res.setHeader('Allow', ['POST', 'GET'])
//       res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }
