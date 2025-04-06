import { NextResponse } from 'next/server'
import { AuctionService } from '@/server/services/auction'
import { validateBidPlacement } from '@/server/schema'
import { z } from 'zod'

const auctionService = new AuctionService()

export async function POST(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const body = await request.json()

    // Validate input with auction ID from params
    const validatedData = validateBidPlacement({
      ...body,
      auctionId: params.id,
    })

    // Place bid
    const bid = await auctionService.placeBid(validatedData)

    return NextResponse.json(
      {
        success: true,
        data: bid,
      },
      { status: 201 },
    )
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    console.error('API Error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to place bid',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
