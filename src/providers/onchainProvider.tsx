'use client'

import { type ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  DynamicContextProvider,
  DynamicEventsCallbacks,
} from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector'
import { createConfig, WagmiProvider } from 'wagmi'
import { Address, http } from 'viem'
import {
  celo,
  celoAlfajores,
  mainnet,
  polygon,
  polygonAmoy,
  worldchain,
  worldchainSepolia,
} from 'viem/chains'
import { useRouter } from 'next/navigation'
import { fetchUserAccount } from '@/services/user'
import { getDynamicCredentials } from '@/utils/dynamic'

const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? undefined

const config = createConfig({
  chains: [
    celo,
    celoAlfajores,
    mainnet,
    polygon,
    polygonAmoy,
    worldchain,
    worldchainSepolia,
  ],
  multiInjectedProviderDiscovery: false,
  transports: {
    [celo.id]: http(`https://celo-mainnet.g.alchemy.com/v2/${alchemyApiKey}`),
    [celoAlfajores.id]: http(
      `https://celo-alfajores.g.alchemy.com/v2/${alchemyApiKey}`,
    ),
    [mainnet.id]: http(`https://mainnet.g.alchemy.com/v2/${alchemyApiKey}`),
    [polygon.id]: http(
      `https://polygon-mainnet.g.alchemy.com/v2/${alchemyApiKey}`,
    ),
    [polygonAmoy.id]: http(
      `https://polygon-amoy.g.alchemy.com/v2/${alchemyApiKey}`,
    ),
    [worldchain.id]: http(
      `https://worldchain-mainnet.g.alchemy.com/v2/${alchemyApiKey}`,
    ),
    [worldchainSepolia.id]: http(
      `https://worldchain-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
    ),
  },
})

const queryClient = new QueryClient()

export default function OnchainProvider({ children }: { children: ReactNode }) {
  const router = useRouter()

  const events: DynamicEventsCallbacks = {
    onAuthSuccess: async ({ primaryWallet, user }) => {
      console.log('onAuthSuccess was called', primaryWallet, user)
      console.log('wallet', primaryWallet)
      console.log('user', user)
      if (!user || !user.userId) {
        console.error(
          'Missing args from onAuthSuccess event, please check Dynamic/onchainProvider',
        )
        return
      }
      try {
        const { id, email, appWallet, extWallet } = getDynamicCredentials(user)
        const fetchedUser = await fetchUserAccount(
          id,
          appWallet as Address,
          extWallet as Address,
          email,
        )
        console.log('Succesfully fetched user:', fetchedUser)
        router.push('/account')
      } catch (error) {
        console.error(error)
        console.error('Unable to read/create user, please check the server')
      }
    },
    onLogout: (args) => {
      console.log('onLogout was called', args)
      router.push('/')
    },
  }

  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID ?? 'ENV_ID',
        events,
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  )
}
