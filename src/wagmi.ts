import { http, cookieStorage, createConfig, createStorage } from 'wagmi'
import { alephZero, arbitrum, arbitrumSepolia, base, baseSepolia, blast, blastSepolia, ink, inkSepolia, linea, lineaSepolia, lisk, liskSepolia, mainnet, mode, modeTestnet, optimism, optimismSepolia, polygon, polygonAmoy, redstone, scroll, scrollSepolia, sepolia, worldchain, worldchainSepolia, zksync, zksyncSepoliaTestnet, zora, zoraTestnet } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia, alephZero, arbitrumSepolia, arbitrum, base, baseSepolia, blast, blastSepolia, linea, lineaSepolia, ink, inkSepolia, lisk, liskSepolia, mode, modeTestnet, optimism, optimismSepolia, polygon, polygonAmoy, redstone, scroll, scrollSepolia, worldchain, worldchainSepolia, zksync, zksyncSepoliaTestnet, zora, zoraTestnet ],
    connectors: [
      injected(),
      coinbaseWallet(),      
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [alephZero.id]: http(),
      [arbitrumSepolia.id]: http(),
      [arbitrum.id]: http(),
      [base.id]: http(),
      [baseSepolia.id]: http(),
      [blast.id]: http(),
      [blastSepolia.id]: http(),
      [linea.id]: http(),
      [lineaSepolia.id]: http(),
      [ink.id]: http(),
      [inkSepolia.id]: http(),
      [lisk.id]: http(),
      [liskSepolia.id]: http(),
      [mode.id]: http(),
      [modeTestnet.id]: http(),
      [optimism.id]: http(),
      [optimismSepolia.id]: http(),
      [polygon.id]: http(),
      [polygonAmoy.id]: http(),
      [redstone.id]: http(),
      [scroll.id]: http(),
      [scrollSepolia.id]: http(),
      [worldchain.id]: http(),
      [worldchainSepolia.id]: http(),
      [zksync.id]: http(),
      [zksyncSepoliaTestnet.id]: http(),
      [zora.id]: http(),
      [zoraTestnet.id]: http(),
    },
  })
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>
  }
}
