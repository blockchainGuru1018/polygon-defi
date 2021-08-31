import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Layered Farming',
    icon: 'LayerIcon',
    items: [
      {
        label: 'Layer 1 - YORK',
        href: 'https://york.polyyork.finance/',
      },
      {
        label: 'Layer 2 - GOLDYORK',
        href: 'http://gold.polyyork.finance/',
      },
    ],
  },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x21dE43d96CFddd203DA3352545E0054534776652',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/ETH/0x21dE43d96CFddd203DA3352545E0054534776652',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Dividends',
  //   icon: 'BondsIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Chart',
        href: 'https://polygon.poocoin.app/tokens/0xbf583f12b9afa44d86a0cc61a858473371b0677d/',
      },
      {
        label: 'VFAT Tools',
        href: 'https://vfat.tools/polygon/polyyork/',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/polygon/defi/polyyork-finance/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/polyyork/',
      },
      {
        label: 'CoinCost',
        href: 'https://coincost.net/en/currency/polyyork/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.polyyork.farm/',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/PolyYork-Finance',
      },
      
      // {
      //   label: 'Blog',
      //   href: '#',
      // },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  {
    icon: 'AuditIcon',
    label: 'Audit by TechRate',
    href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/PolyYork.pdf',
  },
  // {
    //   label: 'Review by RugDoc',
    //   icon: 'AuditIcon',
    //   href: 'https://rugdoc.io/project/polyyork/ ',
    // },
    // {
      //   label: 'Audit by CertiK',
      //   icon: 'AuditIcon',
      //   href: 'https://certik.org/projects/goose-finance',
      // },
]

export default config
