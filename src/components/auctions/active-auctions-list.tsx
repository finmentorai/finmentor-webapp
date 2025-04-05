'use client'

import type { ActiveAuction } from '@/hooks/useActiveAuctions'
import { useActiveAuctions } from '@/hooks/useActiveAuctions'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

interface ActiveAuctionsListProps {
  termId?: string
  newsId?: string
}

export function ActiveAuctionsList({
  termId,
  newsId,
}: ActiveAuctionsListProps) {
  const {
    data: auctions,
    isLoading,
    error,
  } = useActiveAuctions({ termId, newsId })

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

  if (!auctions?.length)
    return (
      <Alert>
        <AlertDescription>No active auctions found.</AlertDescription>
      </Alert>
    )

  return (
    <div className="space-y-4">
      {auctions.map((auction) => (
        <AuctionCard key={auction.auctionId} auction={auction} />
      ))}
    </div>
  )
}

interface AuctionCardProps {
  auction: ActiveAuction
}

function AuctionCard({ auction }: AuctionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Auction {auction.auctionId}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Current Bid
            </p>
            <p className="text-2xl font-bold">${auction.bidAmount}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Score</p>
            <p className="text-2xl font-bold">{auction.score.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Views</p>
            <p className="text-2xl font-bold">{auction.impressionCount}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Clicks</p>
            <p className="text-2xl font-bold">{auction.clickCount}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
