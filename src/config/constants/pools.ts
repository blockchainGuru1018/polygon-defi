import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 0,
  //   tokenName: 'CAKE',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   contractAddress: {
  //     80001: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
  //     137: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://pancakeswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '10',
  //   sortOrder: 1,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
  {
    sousId: 0,
    tokenName: 'WMATIC',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    contractAddress: {
      80001: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      137: '0xEd49DD346AD12Ae2121d9fCfd5b589285b186507',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
