export const CHAIN_ID = 1;

export const RPC_URLS: { [chainId: number]: string } = {
  1: 'https://mainnet.infura.io/v3/3b3afd5f4a7f49b5a7711461ed9df1f2',
  4: 'https://rinkeby.infura.io/v3/3b3afd5f4a7f49b5a7711461ed9df1f2',
};
export const CONTRACT_ADDRESS: { [chainId: number]: string } = {
  1: '0x76e51bC8fA0BEEbCF3E45De408Fa43c9dC5FfB27',
  4: '0x4c9a9De3552c7d1F1Ffbaf22b7c1e0D8E728046A',
};
export const SCAN_BASE_URI: { [chainId: number]: string } = {
  1: 'https://etherscan.io',
  4: 'https://rinkeby.etherscan.io',
};

export const OPENSEA_URI: { [chainId: number]: string } = {
  1: 'https://opensea.io/account/primate-social-society-official?search[sortBy]=LAST_TRANSFER_DATE',
  4: 'https://testnets.opensea.io/account/pss?search[sortBy]=LAST_TRANSFER_DATE',
};

export const METAMASK_LAUNCHER: { [chainId: number]: string } = {
  1: 'https://metamask.app.link/dapp/www.primatesocialsociety.com/',
  4: 'https://metamask.app.link/dapp/naughty-boyd-ea3834.netlify.app/',
};
