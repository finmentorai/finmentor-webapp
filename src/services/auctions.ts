import { type AuctionScore } from '@/server/services/auctionRanking'

interface GetActiveAuctionsResponse {
  success: boolean
  data: AuctionScore[]
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

  const response = await fetch(`/api/auctions?${params.toString()}`)

  if (!response.ok) {
    throw new Error('Failed to fetch active auctions')
  }

  return response.json() as Promise<GetActiveAuctionsResponse>
}
