import { ReactNode, useState } from 'react'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { usePostBid } from '@/hooks/usePostBid'

interface BidModalProps {
  auctionId: string
  termId: string
  children: ReactNode
  refetchBids: () => void
}

export function BidModal({
  auctionId,
  termId,
  children,
  refetchBids,
}: BidModalProps) {
  const [amount, setAmount] = useState('')
  const [maxBid, setMaxBid] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useDynamicContext()
  const { mutate: placeBid, isPending } = usePostBid()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!user?.userId) {
      toast.warning('Please connect your wallet first')
      return
    }

    const bidAmount = parseFloat(amount)
    const maxBidAmount = maxBid ? parseFloat(maxBid) : undefined

    if (isNaN(bidAmount) || bidAmount <= 0) {
      toast.error('Please enter a valid bid amount')
      return
    }

    if (maxBidAmount && maxBidAmount < bidAmount) {
      toast.error('Max bid must be greater than or equal to bid amount')
      return
    }

    placeBid(
      {
        auctionId,
        termId,
        bidderId: user.userId,
        amount: bidAmount,
        maxBid: maxBidAmount,
      },
      {
        onSuccess: () => {
          setIsOpen(false)
          setAmount('')
          setMaxBid('')
          refetchBids()
        },
      },
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Place a Bid</DialogTitle>
          <DialogDescription>
            Enter your bid amount and optional maximum bid
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Bid Amount</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              placeholder="Enter bid amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxBid">Max Bid (Optional)</Label>
            <Input
              id="maxBid"
              type="number"
              step="0.01"
              min="0"
              placeholder="Enter maximum bid"
              value={maxBid}
              onChange={(e) => setMaxBid(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Placing Bid...' : 'Place Bid'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
