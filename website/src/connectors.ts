import { providers } from 'ethers';
import { UnsupportedChainIdError } from '@web3-react/core';
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import { NetworkConnector } from '@web3-react/network-connector';
import {
  WalletConnectConnector,
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
} from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { RPC_URLS, CHAIN_ID } from './constants';
export const injected = new InjectedConnector({});

export const network = new NetworkConnector({
  urls: { [1]: RPC_URLS[1], [4]: RPC_URLS[4] },
  defaultChainId: CHAIN_ID,
});

export const walletconnect = new WalletConnectConnector({
  rpc: { [1]: RPC_URLS[1], [4]: RPC_URLS[4] },
  qrcode: true,
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[CHAIN_ID],
  appName: 'PSS',
  supportedChainIds: [CHAIN_ID],
});

export enum ConnectorNames {
  Injected = 'Injected',
  Network = 'Network',
  WalletConnect = 'WalletConnect',
  WalletLink = 'WalletLink',
}

export const Connections: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.Network]: network,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.WalletLink]: walletlink,
};

export function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return 'Please authorize this website to access your Ethereum account.';
  } else {
    console.error(error);
    return 'An unknown error occurred. Check the console for more details.';
  }
}

export function getLibrary(provider: any): providers.Web3Provider {
  const library = new providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}
