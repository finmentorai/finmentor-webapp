import { PrismaClient, AuctionStatus } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting auction seeding...')

  // Get all existing terms from the database
  const terms = await prisma.term.findMany()
  console.log(`📚 Found ${terms.length} terms in the database`)

  // Create auctions for each term
  for (const term of terms) {
    await prisma.auction.create({
      data: {
        status: AuctionStatus.ACTIVE,
        startDate: new Date('2024-04-05T00:00:00Z'),
        endDate: new Date('2024-04-11T23:59:59Z'),
        dailyBudget: term.startingBidPrice * 100,
        totalBudget: term.startingBidPrice * 700, // 7 days total budget
        spentBudget: 0,
        creatorId: term.creatorId,
        termId: term.id,
      },
    })
    console.log('🏷️ Created auction for term:', term.name)
  }

  console.log('✅ Auction seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Error during auction seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
