'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { createAcrossClient } from "@across-protocol/app-sdk";
import { mainnet, sepolia, alephZero, arbitrumSepolia, arbitrum, base, baseSepolia, blast, blastSepolia, linea, lineaSepolia, ink, inkSepolia, lisk, liskSepolia, mode, modeTestnet, optimism, optimismSepolia, polygon, polygonAmoy, redstone, scroll, scrollSepolia, worldchain, worldchainSepolia, zksync, zksyncSepoliaTestnet, zora, zoraTestnet } from "viem/chains";
import { parseEther } from "viem";

const client = createAcrossClient({
  integratorId: "0xdead", // 2-byte hex string
  chains: [mainnet, sepolia, alephZero, arbitrumSepolia, arbitrum, base, baseSepolia, blast, blastSepolia, linea, lineaSepolia, ink, inkSepolia, lisk, liskSepolia, mode, modeTestnet, optimism, optimismSepolia, polygon, polygonAmoy, redstone, scroll, scrollSepolia, worldchain, worldchainSepolia, zksync, zksyncSepoliaTestnet, zora, zoraTestnet],
});



function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()


  async function getQuote() {
    const QuoteRes = await fetch('/api/get-quote')
    const QuoteData = await QuoteRes.json()
    console.log(QuoteData)
  }


  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.filter((x)=>x.id==='injected').map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
           Connect Wallet
          </button>
        ))}        
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>

      <div>
      <h2>Get Quote</h2>
      <button type="button" onClick={getQuote}>
        Get Quote
      </button>


      </div>
    </>
  )
}

export default App
