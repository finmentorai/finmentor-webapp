'use client'

import type { Auction, Bid, News, Term } from '@prisma/client'
import {
  useAllActiveAuctions,
  type ActiveAuction,
} from '@/hooks/useActiveAuctions'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { BidButton } from './bid-button'

interface ActiveAuctionsListProps {
  termId?: string
  newsId?: string
}

export function ActiveAuctionsList({}: ActiveAuctionsListProps) {
  const {
    data: response,
    isLoading,
    error,
    refetch: refetchBids,
  } = useAllActiveAuctions()

  if (isLoading)
    return (
      <div className="space-y-4">
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <Skeleton className="h-[200px] w-full rounded-xl" />
      </div>
    )

  if (error)
    return (
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertDescription>
          Failed to load active auctions. Please try again later.
        </AlertDescription>
      </Alert>
    )

  const auctions = response?.data as ActiveAuction[]

  if (!auctions?.length)
    return (
      <Alert>
        <AlertDescription>No active auctions found.</AlertDescription>
      </Alert>
    )

  return (
    <div className="space-y-4">
      {auctions.map((auction) => (
        <AuctionCard
          key={auction.id}
          auction={auction}
          refetchBids={refetchBids}
        />
      ))}
    </div>
  )
}

interface AuctionCardProps {
  auction: Auction & {
    bids: Bid[]
    term: Term
    news: News
  }
  refetchBids: () => void
}

function AuctionCard({ auction, refetchBids }: AuctionCardProps) {
  const currentBid =
    auction.bids.length > 0
      ? Math.max(...auction.bids.map((bid) => bid.amount))
      : auction.dailyBudget

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {auction.term ? auction.term.name : auction.news?.title}
          <div>
            <BidButton
              auctionId={auction.id}
              termId={auction.termId ?? ''}
              className="w-full" // optional
              refetchBids={refetchBids}
            />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Current Bid
            </p>
            <p className="text-2xl font-bold">${currentBid}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Daily Budget
            </p>
            <p className="text-2xl font-bold">${auction.dailyBudget}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Total Budget
            </p>
            <p className="text-2xl font-bold">${auction.totalBudget}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Spent</p>
            <p className="text-2xl font-bold">${auction.spentBudget}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
