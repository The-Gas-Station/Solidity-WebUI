const tokens = {
  56: {
    nfp: "0x9a05c9a97ec5a2ce1fa435ef372d2767993a5e7b",
    usdc: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    address: "0x6fabfe7946b23da23ad51dc45167cc2cfd0ce70e",
    symbol: "bscGAS",
    decimals: 18,
    image: "https://hub.gasstationcrypto.com/token.svg",
    rpcUrls: ["https://bsc-dataseed2.binance.org"],
    provider: null,
    stableDecimals: 18,
    blockExplorerUrls: ["https://www.bscscan.com/"],
  },
  137: {
    nfp: "0x1a0b4e0facd171d5e5ce3d1cda30624ead73a06b",
    usdc: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    address: "0x840b5fc8c6dee2b1140174a3abdc215190426ccf",
    symbol: "polyGAS",
    decimals: 18,
    image: "https://hub.gasstationcrypto.com/token.svg",
    rpcUrls: ["https://polygon-rpc.com/"],
    provider: null,
    stableDecimals: 6,
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  250: {
    nfp: "0xDBD9BfcB77B6a0477411282022FEE2CF81f06cd6",
    usdc: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
    address: "0x6741db012578615Ee07e029C1062B46730093912",
    symbol: "ftmGAS",
    decimals: 18,
    image: "https://hub.gasstationcrypto.com/token.svg",
    rpcUrls: ["https://rpc.ftm.tools/"],
    provider: null,
    stableDecimals: 6,
    blockExplorerUrls: ["https://ftmscan.com/"],
  },
};

const usdcAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const nfpAbi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "amountMinted",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "amountTotal",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_rarity",
        type: "uint8",
      },
    ],
    name: "getPatronRarityPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_rarity",
        type: "uint8",
      },
    ],
    name: "buyPatron",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getNFPsOfOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

let refreshInterval = 60000;

let provider;
let network;
let connected;
let address;
let statsUpdated;

const refreshData = {
  usdcAllowance: {
    timeout: null,
    refreshing: false,
  },
  usdcAmount: {
    timeout: null,
    refreshing: false,
  },
  amountMinted: {
    1: {
      timeout: null,
      refreshing: false,
    },
    2: {
      timeout: null,
      refreshing: false,
    },
    3: {
      timeout: null,
      refreshing: false,
    },
  },
  amountTotal: {
    1: {
      timeout: null,
      refreshing: false,
    },
    2: {
      timeout: null,
      refreshing: false,
    },
    3: {
      timeout: null,
      refreshing: false,
    },
  },
  price: {
    1: {
      timeout: null,
      refreshing: false,
    },
    2: {
      timeout: null,
      refreshing: false,
    },
    3: {
      timeout: null,
      refreshing: false,
    },
  },
  ownedNFPs: {
    timeout: null,
    refreshing: false,
  },
};

let stats = {
  canPurchase: { 1: false, 2: false, 3: false },
  hasUSDC: { 1: false, 2: false, 3: false },
  needsApproval: { 1: false, 2: false, 3: false },
  amountMinted: { 1: "0", 2: "0", 3: "0" },
  amountTotal: { 1: "0", 2: "0", 3: "0" },
  price: { 1: "0", 2: "0", 3: "0" },
  nfps: {},
  internal: {
    amountMinted: {},
    amountTotal: {},
    price: {},
    nfps: {},
  },
};

function setAddress(addr) {
  address = addr;
}

function getAddress() {
  return address;
}

function getStats() {
  return stats;
}

function isConnected() {
  return connected;
}

async function configure(statsUpdatedCallback) {
  statsUpdated = statsUpdatedCallback;
  tokens["56"].provider = new ethers.providers.JsonRpcProvider(
    tokens["56"].rpcUrls[0]
  );
  tokens["137"].provider = new ethers.providers.JsonRpcProvider(
    tokens["137"].rpcUrls[0]
  );

  provider = await detectEthereumProvider();

  if (provider.selectedAddress) {
    address = provider.selectedAddress;
  }

  const refreshNetwork = () => {
    let newNetwork = provider ? `${provider.networkVersion}` : null;

    if (!newNetwork || !tokens[newNetwork]) {
      if (network && tokens[network]) {
        newNetwork = network;
      } else {
        newNetwork = Object.keys(tokens)[0];
      }
    }

    if (network != newNetwork) {
      stats = {
        canPurchase: { 1: false, 2: false, 3: false },
        hasUSDC: { 1: false, 2: false, 3: false },
        needsApproval: { 1: false, 2: false, 3: false },
        amountMinted: { 1: "0", 2: "0", 3: "0" },
        amountTotal: { 1: "0", 2: "0", 3: "0" },
        price: { 1: "0", 2: "0", 3: "0" },
        nfps: {},
        internal: {
          amountMinted: {},
          amountTotal: {},
          price: {},
          nfps: {},
        },
      };
    }

    network = newNetwork;

    loadStats();

    setTimeout(refreshNetwork, 5000);
  };

  refreshNetwork();

  connected = !!provider;

  if (statsUpdated) {
    statsUpdated();
  }

  loadStats();
}

function updateCanPurchase(rarity) {
  if (address) {
    if (stats.internal.price[rarity] && stats.internal.amountTotal[rarity]) {
      stats.canPurchase[rarity] =
        stats.internal.amountTotal[rarity] >
        stats.internal.amountMinted[rarity];
      stats.hasUSDC[rarity] =
        stats.internal.usdcAmount &&
        stats.internal.usdcAmount.gte(stats.internal.price[rarity]);
      stats.needsApproval[rarity] =
        !stats.internal.usdcAllowance ||
        stats.internal.usdcAllowance.lt(stats.internal.price[rarity]);
    }
  } else {
    stats.canPurchase[rarity] = false;
    stats.needsApproval[rarity] = false;
  }
}

async function getTokenMetadata(tokenId) {
  try {
    const nfpContract = new ethers.Contract(
      tokens[network].nfp,
      nfpAbi,
      tokens[network].provider
    );

    const tokenMetaDataURI = await nfpContract.tokenURI(tokenId);

    stats.internal.nfps[tokenId] = tokenMetaDataURI;

    $.getJSON(tokenMetaDataURI, function (metadata) {
      stats.nfps[tokenId] = metadata;
    });
  } catch (e) {
    console.error(e);
  }
}

async function refreshOwnedNFPs() {
  if (refreshData.ownedNFPs.refreshing) {
    return;
  }

  refreshData.ownedNFPs.refreshing = true;
  clearTimeout(refreshData.ownedNFPs.timeout);

  if (address) {
    try {
      const nfpContract = new ethers.Contract(
        tokens[network].nfp,
        nfpAbi,
        tokens[network].provider
      );

      const ownedNFPs = await nfpContract.getNFPsOfOwner(address);
      stats.internal.ownedNFPs = ownedNFPs;

      for (let tokenId of ownedNFPs) {
        if (!stats.nfps[tokenId]) {
          getTokenMetadata(tokenId);
        }
      }
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.internal.ownedNFPs = [];
  }

  const halfInterval = refreshInterval / 2;
  refreshData.ownedNFPs.timeout = setTimeout(
    refreshOwnedNFPs,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.ownedNFPs.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshPrice(rarity) {
  if (refreshData.price[rarity].refreshing) {
    return;
  }

  refreshData.price[rarity].refreshing = true;
  clearTimeout(refreshData.price[rarity].timeout);

  try {
    const nfpContract = new ethers.Contract(
      tokens[network].nfp,
      nfpAbi,
      tokens[network].provider
    );

    const price = await nfpContract.getPatronRarityPrice(rarity);
    stats.internal.price[rarity] = price;
    stats.price[rarity] = ethers.utils.formatUnits(
      price,
      tokens[network].stableDecimals
    );
  } catch (e) {
    console.error(e);
  }

  updateCanPurchase(rarity);

  const halfInterval = refreshInterval / 2;
  refreshData.price[rarity].timeout = setTimeout(
    () => refreshPrice(rarity),
    halfInterval + Math.random() * halfInterval
  );
  refreshData.price[rarity].refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshAmountTotal(rarity) {
  if (refreshData.amountTotal[rarity].refreshing) {
    return;
  }

  refreshData.amountTotal[rarity].refreshing = true;
  clearTimeout(refreshData.amountTotal[rarity].timeout);

  try {
    const nfpContract = new ethers.Contract(
      tokens[network].nfp,
      nfpAbi,
      tokens[network].provider
    );

    const amountTotal = await nfpContract.amountTotal(rarity);
    stats.internal.amountTotal[rarity] = amountTotal;
    stats.amountTotal[rarity] = amountTotal;
  } catch (e) {
    console.error(e);
  }

  updateCanPurchase(rarity);

  const halfInterval = refreshInterval / 2;
  refreshData.amountTotal[rarity].timeout = setTimeout(
    () => refreshAmountTotal(rarity),
    halfInterval + Math.random() * halfInterval
  );
  refreshData.amountTotal[rarity].refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshAmountMinted(rarity) {
  if (refreshData.amountMinted[rarity].refreshing) {
    return;
  }

  refreshData.amountMinted[rarity].refreshing = true;
  clearTimeout(refreshData.amountMinted[rarity].timeout);

  try {
    const nfpContract = new ethers.Contract(
      tokens[network].nfp,
      nfpAbi,
      tokens[network].provider
    );

    const amountMinted = await nfpContract.amountMinted(rarity);
    stats.internal.amountMinted[rarity] = amountMinted;
    stats.amountMinted[rarity] = amountMinted;
  } catch (e) {
    console.error(e);
  }

  updateCanPurchase(rarity);

  const halfInterval = refreshInterval / 2;
  refreshData.amountMinted[rarity].timeout = setTimeout(
    () => refreshAmountMinted(rarity),
    halfInterval + Math.random() * halfInterval
  );
  refreshData.amountMinted[rarity].refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshUSDCAllowance() {
  if (refreshData.usdcAllowance.refreshing) {
    return;
  }

  refreshData.usdcAllowance.refreshing = true;
  clearTimeout(refreshData.usdcAllowance.timeout);

  if (address) {
    try {
      const usdcContract = new ethers.Contract(
        tokens[network].usdc,
        usdcAbi,
        tokens[network].provider
      );

      const allowance = await usdcContract.allowance(
        address,
        tokens[network].nfp
      );
      stats.internal.usdcAllowance = allowance;
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.internal.usdcAllowance = 0;
  }

  updateCanPurchase(1);
  updateCanPurchase(2);
  updateCanPurchase(3);

  const halfInterval = refreshInterval / 2;
  refreshData.usdcAllowance.timeout = setTimeout(
    refreshUSDCAllowance,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.usdcAllowance.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshUSDCAmount() {
  if (refreshData.usdcAmount.refreshing) {
    return;
  }

  refreshData.usdcAmount.refreshing = true;
  clearTimeout(refreshData.usdcAmount.timeout);

  if (address) {
    try {
      const usdcContract = new ethers.Contract(
        tokens[network].usdc,
        usdcAbi,
        tokens[network].provider
      );

      const balance = await usdcContract.balanceOf(address);
      stats.internal.usdcAmount = balance;
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.internal.usdcAmount = 0;
  }

  updateCanPurchase(1);
  updateCanPurchase(2);
  updateCanPurchase(3);

  const halfInterval = refreshInterval / 2;
  refreshData.usdcAmount.timeout = setTimeout(
    refreshUSDCAllowance,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.usdcAmount.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function loadStats() {
  if (tokens[network]) {
    refreshAmountTotal(1);
    refreshAmountTotal(2);
    refreshAmountTotal(3);

    refreshAmountMinted(1);
    refreshAmountMinted(2);
    refreshAmountMinted(3);

    refreshPrice(1);
    refreshPrice(2);
    refreshPrice(3);

    refreshUSDCAllowance();
    refreshUSDCAmount();

    refreshOwnedNFPs();

    if (statsUpdated) {
      statsUpdated();
    }
  }
}

async function connect(callback) {
  if (connected) {
    try {
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      address = accounts[0];

      console.log(`Connected: ${address}`);

      loadStats();

      if (callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  }
}

async function switchNetwork(_network, callback) {
  const isNewNetwork = _network != network;
  network = _network;

  if (connected) {
    try {
      if (isNewNetwork) {
        try {
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `0x${parseInt(network, 10).toString(16)}` }],
          });
        } catch (e) {
          if (e.code == 4902) {
            let networkName = "";
            let networkTokenName = "";
            let networkTokenSymbol = "";

            if (network == "137") {
              networkName = "Polygon Network";
              networkTokenName = "Matic";
              networkTokenSymbol = "MATIC";
            } else if (network == "250") {
              networkName = "Fantom Opera Network";
              networkTokenName = "Fantom";
              networkTokenSymbol = "FTM";
            } else {
              networkName = "Binance Smart Chain";
              networkTokenName = "BNB";
              networkTokenSymbol = "BNB";
            }

            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: `0x${parseInt(network, 10).toString(16)}`,
                  chainName: networkName,
                  nativeCurrency: {
                    name: networkTokenName,
                    symbol: networkTokenSymbol,
                    decimals: 18,
                  },
                  rpcUrls: tokens[network].rpcUrls,
                  blockExplorerUrls: tokens[network].blockExplorerUrls,
                },
              ],
            });
          }
        }
      }

      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      address = accounts[0];

      console.log(`Connected: ${address}`);
    } catch (error) {
      console.log(error);
    }
  }

  stats = {
    canPurchase: { 1: false, 2: false, 3: false },
    hasUSDC: { 1: false, 2: false, 3: false },
    needsApproval: { 1: false, 2: false, 3: false },
    amountMinted: { 1: "0", 2: "0", 3: "0" },
    amountTotal: { 1: "0", 2: "0", 3: "0" },
    price: { 1: "0", 2: "0", 3: "0" },
    nfps: {},
    internal: {
      amountMinted: {},
      amountTotal: {},
      price: {},
      nfps: {},
    },
  };

  if (statsUpdated) {
    statsUpdated();
  }

  loadStats();

  if (callback) {
    callback();
  }
}

async function disconnect(callback) {
  address = null;

  if (callback) {
    callback();
  }
}

async function registerToken() {
  if (connected && tokens[network]) {
    try {
      const wasAdded = await provider.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokens[network].address,
            symbol: tokens[network].symbol,
            decimals: tokens[network].decimals,
            image: tokens[network].image,
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

async function approveUSDC(rarity) {
  if (connected && tokens[network] && address && stats.internal.price[rarity]) {
    try {
      const usdcContract = new ethers.Contract(
        tokens[network].usdc,
        usdcAbi,
        new ethers.providers.Web3Provider(provider).getSigner()
      );

      await usdcContract.approve(
        tokens[network].nfp,
        stats.internal.price[rarity]
      );
    } catch (e) {
      console.error(e);
    }
  }
}

async function buyPatron(rarity) {
  if (connected && tokens[network]) {
    try {
      const nfpContract = new ethers.Contract(
        tokens[network].nfp,
        nfpAbi,
        new ethers.providers.Web3Provider(provider).getSigner()
      );

      const amountMinted = await nfpContract.buyPatron(rarity);
    } catch (error) {
      console.log(error);
    }
  }
}
