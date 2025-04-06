import { Button } from '@/components/ui/button'
import { BidModal } from './bid-modal'

interface BidButtonProps {
  auctionId: string
  termId: string
  className?: string
  refetchBids: () => void
}

export function BidButton({
  auctionId,
  termId,
  className,
  refetchBids,
}: BidButtonProps) {
  return (
    <BidModal auctionId={auctionId} termId={termId} refetchBids={refetchBids}>
      <Button variant="outline" className={className}>
        Bid
      </Button>
    </BidModal>
  )
}
