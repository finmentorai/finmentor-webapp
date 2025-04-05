import { PrismaClient } from '@prisma/client'
import { SEED_TERMS } from './seed/index'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create a default admin user first
  const adminUser = await prisma.user.upsert({
    where: {
      appWallet: '0x1111111111111111111111111111111111111111',
    },
    update: {},
    create: {
      id: '11111111-1111-1111-1111-111111111100', // This matches the creatorId in SEED_TERMS
      appWallet: '0x1111111111111111111111111111111111111111',
      username: 'admin',
      displayName: 'Admin',
    },
  })

  console.log('👤 Created admin user:', adminUser.username)

  // Create all terms
  for (const term of SEED_TERMS) {
    const createdTerm = await prisma.term.upsert({
      where: {
        name: term.name,
      },
      update: {
        link: term.link,
        logoUrl: term.logoUrl,
        description: term.description,
        content: term.content,
        startingBidPrice: term.startingBidPrice,
      },
      create: {
        name: term.name,
        link: term.link,
        logoUrl: term.logoUrl,
        description: term.description,
        content: term.content,
        startingBidPrice: term.startingBidPrice,
        creatorId: term.creatorId,
      },
    })
    console.log('📚 Created term:', createdTerm.name)
  }

  console.log('✅ Database seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Error during database seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
