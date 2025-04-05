import { useQuery } from '@tanstack/react-query'
import { getActiveAuctions } from '@/services/auctions'
import type { AuctionScore } from '@/server/services/auctionRanking'

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

// Type helper for components
export type ActiveAuction = AuctionScore
