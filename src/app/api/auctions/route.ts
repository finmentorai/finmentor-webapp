import { NextRequest, NextResponse } from 'next/server'
import { AuctionService } from '@/server/services/auction'
import {
  prepareAuctionForRanking,
  AuctionRankingStrategy,
} from '@/server/services/auctionRanking'

const auctionService = new AuctionService()

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams
    const termId = searchParams.get('termId') || undefined
    const newsId = searchParams.get('newsId') || undefined

    // Get active auctions directly from service
    const auctions = await auctionService.getActiveAuctions({
      termId,
      newsId,
    })

    // Prepare and rank auctions
    const rankedAuctions = auctions.map((auction) =>
      prepareAuctionForRanking({
        ...auction,
        termId: auction.termId || undefined,
        newsId: auction.newsId || undefined,
      }),
    )

    const finalRankedAuctions =
      AuctionRankingStrategy.rankAuctions(rankedAuctions)

    return NextResponse.json({
      success: true,
      data: finalRankedAuctions,
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
