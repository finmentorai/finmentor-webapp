import prisma from '@/server/prismaClient'
import { User } from '@prisma/client'
import { Address } from 'viem'

export async function getOrCreateUser(
  dynamicUserId: string,
  appWallet: Address,
  extWallet?: Address,
): Promise<User | null> {
  let user: User | null
  try {
    user = await prisma.user.findFirst({
      where: {
        id: dynamicUserId,
      },
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          id: dynamicUserId,
          appWallet,
          extWallet,
        },
      })
    }
    return user
  } catch (error) {
    console.log(error)
    return null
  }
}
