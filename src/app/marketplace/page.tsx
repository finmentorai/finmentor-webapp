import { ActiveAuctionsList } from '@/components/auctions/active-auctions-list'
import PageWithAppbar from '@/components/layout/pageWithAppbar'

export default function MarketplacePage() {
  return (
    <PageWithAppbar>
      <div className="page">
        <div className="container">
          <h1 className="text-3xl font-bold tracking-tight">Marketplace</h1>
          <p className="text-muted-foreground">
            Browse and bid on active auctions for terms and news items.
          </p>
        </div>

        <ActiveAuctionsList />
      </div>
    </PageWithAppbar>
  )
}
