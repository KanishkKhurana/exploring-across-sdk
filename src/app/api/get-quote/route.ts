import { createAcrossClient } from "@across-protocol/app-sdk";
import { mainnet, sepolia, alephZero, arbitrumSepolia, arbitrum, base, baseSepolia, blast, blastSepolia, linea, lineaSepolia, ink, inkSepolia, lisk, liskSepolia, mode, modeTestnet, optimism, optimismSepolia, polygon, polygonAmoy, redstone, scroll, scrollSepolia, worldchain, worldchainSepolia, zksync, zksyncSepoliaTestnet, zora, zoraTestnet } from "viem/chains";
import { parseEther } from "viem";
import { NextResponse } from 'next/server';
import { formatEther } from 'viem'


const client = createAcrossClient({
    integratorId: "0xdead", // 2-byte hex string
    chains: [mainnet, sepolia, alephZero, arbitrumSepolia, arbitrum, base, baseSepolia, blast, blastSepolia, linea, lineaSepolia, ink, inkSepolia, lisk, liskSepolia, mode, modeTestnet, optimism, optimismSepolia, polygon, polygonAmoy, redstone, scroll, scrollSepolia, worldchain, worldchainSepolia, zksync, zksyncSepoliaTestnet, zora, zoraTestnet],
  });

  const route = {
    originChainId: arbitrum.id,
    destinationChainId: optimism.id,
    inputToken: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", // WETH arb
    outputToken: "0x4200000000000000000000000000000000000006", // WETH opt
  };
  
  const replacer = (key:any, value:any) => {
    return typeof value === 'bigint' ? value.toString() : value;
  };


export async function GET() {


    const quote = await client.getQuote({
        route,
        inputAmount: parseEther("1"),
      });

      console.log(route)
      console.log(quote)
      const stringss = JSON.stringify(quote, replacer)

    return NextResponse.json( 
        JSON.parse(stringss),

        
     );

    }   

