/**
 * A list of chains managed by the Hyperlane core team.
 * Hyperlane can be deployed permissionlessly to any chain but for
 * convenience the core team maintains some deployments.
 */
export enum CoreChain {
  alfajores = 'alfajores',
  ancient8 = 'ancient8',
  arbitrum = 'arbitrum',
  avalanche = 'avalanche',
  base = 'base',
  blast = 'blast',
  bob = 'bob',
  bsc = 'bsc',
  bsctestnet = 'bsctestnet',
  celo = 'celo',
  chiado = 'chiado',
  connextsepolia = 'connextsepolia',
  eclipsetestnet = 'eclipsetestnet',
  endurance = 'endurance',
  ethereum = 'ethereum',
  fraxtal = 'fraxtal',
  fuji = 'fuji',
  fusemainnet = 'fusemainnet',
  gnosis = 'gnosis',
  inevm = 'inevm',
  injective = 'injective',
  linea = 'linea',
  mantapacific = 'mantapacific',
  mantle = 'mantle',
  moonbeam = 'moonbeam',
  nautilus = 'nautilus',
  neutron = 'neutron',
  optimism = 'optimism',
  plumetestnet = 'plumetestnet',
  polygon = 'polygon',
  polygonzkevm = 'polygonzkevm',
  proteustestnet = 'proteustestnet',
  redstone = 'redstone',
  scroll = 'scroll',
  scrollsepolia = 'scrollsepolia',
  sei = 'sei',
  sepolia = 'sepolia',
  solana = 'solana',
  solanadevnet = 'solanadevnet',
  solanatestnet = 'solanatestnet',
  superpositiontestnet = 'superpositiontestnet',
  taiko = 'taiko',
  viction = 'viction',
  zetachain = 'zetachain',
  zoramainnet = 'zoramainnet',
}

export type CoreChainName = keyof typeof CoreChain;

export const CoreMainnets: Array<CoreChainName> = [
  CoreChain.ancient8,
  CoreChain.arbitrum,
  CoreChain.avalanche,
  CoreChain.base,
  CoreChain.blast,
  CoreChain.bob,
  CoreChain.bsc,
  CoreChain.celo,
  CoreChain.endurance,
  CoreChain.ethereum,
  CoreChain.fraxtal,
  CoreChain.fusemainnet,
  CoreChain.gnosis,
  CoreChain.inevm,
  CoreChain.injective,
  CoreChain.linea,
  CoreChain.mantapacific,
  CoreChain.mantle,
  CoreChain.moonbeam,
  CoreChain.neutron,
  CoreChain.optimism,
  CoreChain.polygon,
  CoreChain.polygonzkevm,
  CoreChain.redstone,
  CoreChain.scroll,
  CoreChain.sei,
  CoreChain.taiko,
  CoreChain.viction,
  CoreChain.zetachain,
  CoreChain.zoramainnet,
  // CoreChains.solana,
];

export const CoreTestnets: Array<CoreChainName> = [
  CoreChain.alfajores,
  CoreChain.bsctestnet,
  CoreChain.chiado,
  CoreChain.connextsepolia,
  CoreChain.eclipsetestnet,
  CoreChain.fuji,
  CoreChain.plumetestnet,
  CoreChain.proteustestnet,
  CoreChain.scrollsepolia,
  CoreChain.sepolia,
  CoreChain.solanadevnet,
  CoreChain.solanatestnet,
  CoreChain.superpositiontestnet,
];

export const CoreChains: Array<CoreChainName> = [...CoreMainnets, ...CoreTestnets];
