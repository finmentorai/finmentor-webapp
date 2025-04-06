import { useQuery } from '@tanstack/react-query'
import type { Auction, Bid, News, Term } from '@prisma/client'
import { getActiveAuctions, getAllActiveAuctions } from '@/services/auctions'

interface UseActiveAuctionsParams {
  termId?: string
  newsId?: string
  enabled?: boolean
}

export function useActiveAuctions({
  termId,
  newsId,
  enabled = true,
}: UseActiveAuctionsParams = {}) {
  return useQuery({
    queryKey: ['activeAuctions', { termId, newsId }],
    queryFn: () => getActiveAuctions({ termId, newsId }),
    select: (response) => response.data,
    enabled,
  })
}

export function useAllActiveAuctions() {
  return useQuery({
    queryKey: ['allActiveAuctions'],
    queryFn: () => getAllActiveAuctions(),
  })
}

// Type helper for components
export type ActiveAuction = Auction & {
  bids: Bid[]
  term: Term
  news: News
}
