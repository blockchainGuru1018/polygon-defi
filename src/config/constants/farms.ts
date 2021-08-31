import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

  {
    pid: 21, 
    risk: 3,
    lpSymbol: 'YORK-USDC',
    lpAddresses: {
      80001: '',
      137: '0x9346BEa9A8Ecc94AA1df3612AbC868456506c523', 
    },
    tokenSymbol: 'YORK',
    tokenAddresses: {
      80001: contracts.cake[80001],
      137: contracts.cake[137],
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'YORK-USDT LP',
    lpAddresses: {
      80001: '',
      137: '0x5d2570Bc6b7CBFB41E7F98c6EA5d0E6b9c671AaA',
    },
    tokenSymbol: 'YORK',
    tokenAddresses: {
      80001: contracts.cake[80001],
      137: contracts.cake[137],
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
    exchange:"QuickSwap"

  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'YORK-MATIC LP',
    lpAddresses: {
      80001: '',
      137: '0x256A0865971eF39F333B792e9AA52834dc4E4AC6',
    },
    tokenSymbol: 'YORK',
    tokenAddresses: {
      80001: contracts.cake[80001],
      137: contracts.cake[137],
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    exchange:"QuickSwap"
  },
  
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'YORK-DMA LP',
    lpAddresses: {
      80001: '',
      137: '0xf2a0588cbb2cca1bec3eeee71defec4b7dc39a40', // YORK-weth
    },
    tokenSymbol: 'YORK',
    tokenAddresses: {
      80001: '',
      137: contracts.cake[137], // YORK
    },
    quoteTokenSymbol: QuoteToken.DMA,
    quoteTokenAdresses: contracts.dma,
    exchange:"QuickSwap"

  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'YORK-WETH LP',
    lpAddresses: {
      80001: '',
      137: '0xdb69d169d4c73364e2cabfd2994553c073860aaa',
    },
    tokenSymbol: 'YORK',
    tokenAddresses: {
      80001: contracts.cake[80001],
      137: contracts.cake[137],
    },
    quoteTokenSymbol: QuoteToken.WETH,
    quoteTokenAdresses: contracts.weth,
    exchange:"QuickSwap"

  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'YORK-AAVE LP',
    lpAddresses: {
      80001: '',
      137: "0xda79c564a00463d0af74bfd3aebc997f01771341", // tYORK-USDC LP
      // 137: '0xe923959d9e2555513786797c94fb4ba5a4d9c900', // tYORK-USDC LP
    },
    tokenSymbol: 'YORK',
    tokenAddresses: {
      80001: contracts.cake[80001],
      137: contracts.cake[137],
    },
    quoteTokenSymbol: QuoteToken.AAVE,
    quoteTokenAdresses: contracts.aave,
  },
  {
    pid: 5,
    risk: 3,
    lpSymbol: 'DMA-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x0dE9EEc2210787f18FA87984C90BAA54E37e7057', // USDC (use USDC for pool)
    },
    tokenSymbol: 'DMA',
    tokenAddresses: {
      80001: '',
      137: '0x54a71fc88302372bc22abe75b0d3522bf16f8173', // USDC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 6,
    risk: 3,
    lpSymbol: 'WMATIC-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827', // WMATIC-USDC LP
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      80001: '',
      137: contracts.wbnb[137],
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 3,
    lpSymbol: 'WETH-USDC',
    lpAddresses: {
      80001: '',
      137: '0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d', // USDT-WMATIC LP
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      80001: '',
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    exchange:"QuickSwap"
  },
  {
    pid: 8,
    risk: 3,
    lpSymbol: 'AAVE-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x7c76B6B3FE14831A39C0fec908DA5f17180df677',
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      80001: '',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    exchange:"QuickSwap"

  },
  {
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'YORK',
    lpAddresses: {
      80001: '',
      137: '0x5d2570Bc6b7CBFB41E7F98c6EA5d0E6b9c671AaA',
    },
    tokenSymbol: 'YORK',
    tokenAddresses: {
      80001: '',
      137: '0x21dE43d96CFddd203DA3352545E0054534776652',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DMA',
    lpAddresses: {
      80001: '',
      137: '0x0dE9EEc2210787f18FA87984C90BAA54E37e7057',
    },
    tokenSymbol: 'DMA',
    tokenAddresses: {
      80001: '',
      137: '0x54a71fc88302372bc22abe75b0d3522bf16f8173',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    exchange:"QuickSwap"

  },
    
  {
    pid: 11,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      80001: '',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827', // ETH-USDC LP
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      80001: '',
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 12,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'QUICK',
    lpAddresses: {
      80001: '',
      137: '0x1F1E4c845183EF6d50E9609F16f6f9cAE43BC9Cb',
    },
    tokenSymbol: 'QUICK',
    tokenAddresses: {
      80001: '',
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    exchange:"QuickSwap"
  },
 
  {
    pid: 22, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'LINK',
    lpAddresses: {
      80001: '',
      137: '0x70ceE55c98F6DA2685807611f115eA737d4a248E', 
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      80001: '',
      137: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },

  {
    pid: 24, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'CRYSTL',
    lpAddresses: {
      80001: '',
      137: '0xD4221FaCF3ce900964844a01d8C62acebB016BF5', 
    },
    tokenSymbol: 'CRYSTL',
    tokenAddresses: {
      80001: '',
      137: '0x76bf0c28e604cc3fe9967c83b3c3f31c213cfe64', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    pid: 25, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'ROLL',
    lpAddresses: {
      80001: '',
      137: '0x4c0E2d0c7d3487DA7bCb24dE41b373c41a2F2182', 
    },
    tokenSymbol: 'ROLL',
    tokenAddresses: {
      80001: '',
      137: '0xc68e83a305b0fad69e264a1769a0a070f190d2d6', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    pid: 13, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WETH',
    lpAddresses: {
      80001: '',
      137: '0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d', 
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      80001: '',
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', 
    },
    quoteTokenSymbol: QuoteToken.WETH,
    quoteTokenAdresses: contracts.weth,
  },

  {
    pid: 14, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    lpAddresses: {
      80001: '',
      137: '0xF6a637525402643B0654a54bEAd2Cb9A83C8B498', 
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      80001: '',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'AAVE',
    lpAddresses: {
      80001: '',
      137: '0x7c76B6B3FE14831A39C0fec908DA5f17180df677', 
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      80001: '',
      137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },

  {
    pid: 16, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'GHST',
    lpAddresses: {
      80001: '',
      137: '0x096C5CCb33cFc5732Bcd1f3195C13dBeFC4c82f4', 
    },
    tokenSymbol: 'GHST',
    tokenAddresses: {
      80001: '',
      137: '0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },

  {
    pid: 17, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      80001: '',
      137: '0xf04adBF75cDFc5eD26eeA4bbbb991DB002036Bdd', 
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      80001: '',
      137: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },

  {
    pid: 18, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'POLYDOGE',
    lpAddresses: {
      80001: '',
      137: '0x7b3E67E63906d8576466c2f48158A30be0a9e36c', 
    },
    tokenSymbol: 'POLYDOGE',
    tokenAddresses: {
      80001: '',
      137: '0x8a953cfe442c5e8855cc6c61b1293fa648bae472',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },

  {
    pid: 19, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      80001: '',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      80001: '',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
  {
    pid: 20, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      80001: '',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      80001: '',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt
  },
  {
    pid: 23, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'PUP',
    lpAddresses: {
      80001: '',
      137: '0x767f8BD67a5f133BdDF3b285c5E2FD3D157A2cdC', 
    },
    tokenSymbol: 'PUP',
    tokenAddresses: {
      80001: '',
      137: '0xcfe2cf35d2bdde84967e67d00ad74237e234ce59', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd
  },
]

export default farms
