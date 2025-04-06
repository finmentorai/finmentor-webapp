import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postBid } from '@/services/auctions'
import { toast } from 'sonner'

interface PostBidParams {
  auctionId: string
  amount: number
  maxBid?: number
  termId: string
  bidderId: string
}

export function usePostBid() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (params: PostBidParams) => postBid(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activeAuctions'] })
      toast.success('Bid placed successfully')
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : 'Failed to place bid',
      )
    },
  })
}
