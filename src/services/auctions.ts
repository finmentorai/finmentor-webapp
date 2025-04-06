import type { Auction, Bid } from '@prisma/client'

interface GetActiveAuctionsResponse {
  success: boolean
  data: (Auction & { bids: Bid[] })[]
}

interface GetActiveAuctionsParams {
  termId?: string
  newsId?: string
}

export async function getActiveAuctions({
  termId,
  newsId,
}: GetActiveAuctionsParams = {}) {
  // Construct query string
  const params = new URLSearchParams()
  if (termId) params.append('termId', termId)
  if (newsId) params.append('newsId', newsId)
  try {
    const response = await fetch(`/api/auctions?${params.toString()}`)
    if (!response.ok) {
      throw new Error('Failed to fetch active auctions')
    }
    return response.json() as Promise<GetActiveAuctionsResponse>
  } catch (error) {
    console.error('Error fetching active auctions:', error)
    throw error
  }
}

export async function getAllActiveAuctions() {
  try {
    const response = await fetch('/api/auctions')
    if (!response.ok) {
      throw new Error('Failed to fetch all active auctions')
    }
    return response.json() as Promise<GetActiveAuctionsResponse>
  } catch (error) {
    console.error('Error fetching all active auctions:', error)
    throw error
  }
}

export async function postBid(params: {
  auctionId: string
  amount: number
  bidderId: string
  maxBid?: number
  termId: string
}) {
  try {
    const response = await fetch(`/api/auctions/${params.auctionId}/bid`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: params.amount,
        bidderId: params.bidderId,
        maxBid: params.maxBid,
        termId: params.termId,
      }),
    })
    if (!response.ok) {
      throw new Error('Failed to place bid')
    }
    return response.json() as Promise<Bid>
  } catch (error) {
    console.error('Error placing bid:', error)
    throw error
  }
}
