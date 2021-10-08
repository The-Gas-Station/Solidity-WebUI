const tokens = {
  56: {
    address: "0x6fabfe7946b23da23ad51dc45167cc2cfd0ce70e",
    symbol: "bscGAS",
    decimals: 18,
    image: "https://hub.gasstationcrypto.com/token.svg",
    rpcUrls: ["https://bsc-dataseed2.binance.org"],
    blockCreated: 9791290,
    provider: null,
    lpAddress: "0x340db2a8E77aD047e5E786c94dB0aE1593082264",
    gasAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    gasLpAddress: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    stableDecimals: 18,
    blockExplorerUrls: ["https://www.bscscan.com/"],
    countdownUrl: "https://bscscan.com/block/countdown/",
    usdc: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    blocksPerYear: (60 / 3) * 60 * 24 * 365,
  },
  137: {
    address: "0x840b5fc8c6dee2b1140174a3abdc215190426ccf",
    symbol: "polyGAS",
    decimals: 18,
    image: "https://hub.gasstationcrypto.com/token.svg",
    rpcUrls: ["https://polygon-rpc.com/"],
    blockCreated: 17732765,
    provider: null,
    lpAddress: "0x2637ce16e98fcc66f2ccdd36087defdcf955b68a",
    gasAddress: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    gasLpAddress: "0xcd353F79d9FADe311fC3119B841e1f456b54e858",
    stableDecimals: 6,
    blockExplorerUrls: ["https://polygonscan.com/"],
    countdownUrl: "https://polygonscan.com/block/countdown/",
    usdc: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    blocksPerYear: (60 / 2) * 60 * 24 * 365,
  },
};

const pools = {
  56: [
    {
      address: "0xD9D8209dC88CB96D0a300C2ab2479608A8D1463d",
      staked: "0x6fabfe7946b23da23ad51dc45167cc2cfd0ce70e",
      reward: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      depositFee: 0,
      depositBurnFee: 0,
      startBlock: 11352000,
      endBlock: 11555000,
    },
    {
      address: "0x0124378207aF3E62D842f66B5af02dF5e4F9719C",
      staked: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      reward: "0x6fabfe7946b23da23ad51dc45167cc2cfd0ce70e",
      depositFee: 0.05,
      depositBurnFee: 0,
      startBlock: 11352000,
      endBlock: 13555000,
    },
    {
      address: "0x8a96E5E22e2b057b9c7e7474B95D02bd9B2D0628",
      staked: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      reward: "0x6fabfe7946b23da23ad51dc45167cc2cfd0ce70e",
      depositFee: 5,
      depositBurnFee: 0,
      startBlock: 11389000,
      endBlock: 11600000,
    },
    {
      address: "0xB1B058236C20A808Bd2277DB4C0D092468e6b626",
      type: "dual",
      staked: "0xfB6f376B990ae3fc3Cfa2Ce1cB1A796c5895AcBa",
      rewards: [
        "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        "0x6fAbfe7946b23da23aD51Dc45167cc2CFd0ce70e",
      ],
      depositFee: 0,
      depositBurnFee: 1,
      startBlock: 11620000,
      endBlock: 13550000,
    },
  ],
  137: [
    {
      address: "0x2bc0bf8e98c7bbf08dd682b3ed0da50991aa66bd",
      staked: "0x840B5FC8C6deE2b1140174a3ABdC215190426CCf",
      reward: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      depositFee: 0,
      depositBurnFee: 0,
      startBlock: 19665000,
      endBlock: 19933500,
    },
    {
      address: "0x20024f775ab6bc96077c73fb2e45c8862ac35552",
      staked: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      reward: "0x840B5FC8C6deE2b1140174a3ABdC215190426CCf",
      depositFee: 0.05,
      depositBurnFee: 0,
      startBlock: 19665000,
      endBlock: 22333500,
    },
    {
      address: "0x543b1da3a789bd9e72142ce7b7b320dbd4ddea0a",
      staked: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      reward: "0x840B5FC8C6deE2b1140174a3ABdC215190426CCf",
      depositFee: 5,
      depositBurnFee: 0,
      startBlock: 19710000,
      endBlock: 20000000,
    },
    {
      address: "0x38816Ccf336E53783d2661Ca8F6115b435ae74B3",
      type: "dual",
      staked: "0x2637cE16E98fCc66F2CCdD36087DEFdCf955b68A",
      rewards: [
        "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        "0x840B5FC8C6deE2b1140174a3ABdC215190426CCf",
      ],
      depositFee: 0,
      depositBurnFee: 1,
      startBlock: 20000000,
      endBlock: 22300000,
    },
  ],
};

const poolAbi = [
  {
    inputs: [],
    name: "REWARD_TOKEN",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "STAKE_TOKEN",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endBlock",
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
    inputs: [],
    name: "startBlock",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositFee",
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
    inputs: [],
    name: "depositBurnFee",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
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
    inputs: [],
    name: "rewardBalance",
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
    inputs: [],
    name: "rewardPerBlock",
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
    inputs: [],
    name: "totalStaked",
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
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "compound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const poolDualRewardsAbi = [
  {
    inputs: [],
    name: "REWARD_TOKEN0",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARD_TOKEN1",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "STAKE_TOKEN",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endBlock",
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
    inputs: [],
    name: "startBlock",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositFee",
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
    inputs: [],
    name: "depositBurnFee",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    inputs: [],
    name: "rewardBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    inputs: [],
    name: "reward0PerBlock",
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
    inputs: [],
    name: "reward1PerBlock",
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
    inputs: [],
    name: "totalStaked",
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
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reward0Debt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reward1Debt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const erc20Abi = [
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
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

const lpAbi = [
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token0",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getReserves",
    outputs: [
      { internalType: "uint112", name: "_reserve0", type: "uint112" },
      { internalType: "uint112", name: "_reserve1", type: "uint112" },
      { internalType: "uint32", name: "_blockTimestampLast", type: "uint32" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const gasReflectAbi = [
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
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
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
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
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "getAccountDividendsInfo",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "int256", name: "", type: "int256" },
      { internalType: "int256", name: "", type: "int256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalDividendsDistributed",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfDividendTokenHolders",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

let refreshInterval = 600000;

let provider;
let network;
let connected;
let address;
let statsUpdated;

const defaultPoolRefreshData = {
  tokens: {
    timeout: null,
    refreshing: false,
  },
  staked: {
    timeout: null,
    refreshing: false,
  },
  rewards: {
    timeout: null,
    refreshing: false,
  },
  totalStaked: {
    timeout: null,
    refreshing: false,
  },
  rewardsPerBlock: {
    timeout: null,
    refreshing: false,
  },
};

const refreshData = {
  gasPrice: {
    timeout: null,
    refreshing: false,
  },
  gasValue: {
    timeout: null,
    refreshing: false,
  },
  lpData: {
    timeout: null,
    refreshing: false,
  },
  totalRewardsData: {
    timeout: null,
    refreshing: false,
  },
  holdersData: {
    timeout: null,
    refreshing: false,
  },
  balanceData: {
    timeout: null,
    refreshing: false,
  },
  rewardsData: {
    timeout: null,
    refreshing: false,
  },
  blockData: {
    timeout: null,
    refreshing: false,
  },
  poolData: {
    0: JSON.parse(JSON.stringify(defaultPoolRefreshData)),
    1: JSON.parse(JSON.stringify(defaultPoolRefreshData)),
    2: JSON.parse(JSON.stringify(defaultPoolRefreshData)),
    3: JSON.parse(JSON.stringify(defaultPoolRefreshData)),
    4: JSON.parse(JSON.stringify(defaultPoolRefreshData)),
    5: JSON.parse(JSON.stringify(defaultPoolRefreshData)),
    6: JSON.parse(JSON.stringify(defaultPoolRefreshData)),
    7: JSON.parse(JSON.stringify(defaultPoolRefreshData)),
    8: JSON.parse(JSON.stringify(defaultPoolRefreshData)),
  },
};

const defaultPoolDataStats = {
  stakeAllowance: 0,
  stakeAmount: 0,
  staked: 0,
  rewards: [0, 0],
  totalStaked: 0,
  rewardsPerBlock: [0, 0],
  internal: {
    rewardTokenDecimals: [],
    rewards: [],
    rewardsPerBlock: [],
  },
};

let stats = {
  totalRewards: "0",
  totalRewardsUSD: "0",
  balance: "0",
  balanceUSD: "0",
  rewards: "0",
  rewardsUSD: "0",
  marketCap: "0",
  tradingVolume: "0",
  lpValue: "0",
  holders: "0",
  gasPrice: "5",
  block: 0,
  poolData: {
    0: JSON.parse(JSON.stringify(defaultPoolDataStats)),
    1: JSON.parse(JSON.stringify(defaultPoolDataStats)),
    2: JSON.parse(JSON.stringify(defaultPoolDataStats)),
    3: JSON.parse(JSON.stringify(defaultPoolDataStats)),
    4: JSON.parse(JSON.stringify(defaultPoolDataStats)),
    5: JSON.parse(JSON.stringify(defaultPoolDataStats)),
    6: JSON.parse(JSON.stringify(defaultPoolDataStats)),
    7: JSON.parse(JSON.stringify(defaultPoolDataStats)),
    8: JSON.parse(JSON.stringify(defaultPoolDataStats)),
  },
  internal: {},
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
        totalRewards: "0",
        totalRewardsUSD: "0",
        balance: "0",
        balanceUSD: "0",
        rewards: "0",
        rewardsUSD: "0",
        marketCap: "0",
        tradingVolume: "0",
        lpValue: "0",
        holders: "0",
        gasPrice: "5",
        block: 0,
        poolData: {
          0: JSON.parse(JSON.stringify(defaultPoolDataStats)),
          1: JSON.parse(JSON.stringify(defaultPoolDataStats)),
          2: JSON.parse(JSON.stringify(defaultPoolDataStats)),
          3: JSON.parse(JSON.stringify(defaultPoolDataStats)),
          4: JSON.parse(JSON.stringify(defaultPoolDataStats)),
          5: JSON.parse(JSON.stringify(defaultPoolDataStats)),
          6: JSON.parse(JSON.stringify(defaultPoolDataStats)),
          7: JSON.parse(JSON.stringify(defaultPoolDataStats)),
          8: JSON.parse(JSON.stringify(defaultPoolDataStats)),
        },
        internal: {},
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

const decimals = ethers.BigNumber.from(10).pow(18);

async function getTokenValueFromLP(token, lp, provider) {
  const lpContract = new ethers.Contract(lp, lpAbi, provider);

  const lpToken0 = await lpContract.token0();
  const lpReserves = await lpContract.getReserves();
  let lpTotalSupply = await lpContract.totalSupply();

  let value = 1;
  let percentA = 1;
  let percentB = 1;

  if (lpToken0.toLowerCase() == token.toLowerCase()) {
    value = decimals.mul(lpReserves._reserve1).div(lpReserves._reserve0);
    percentA = decimals.mul(lpReserves._reserve1).div(lpTotalSupply);
    percentB = decimals.mul(lpReserves._reserve0).div(lpTotalSupply);
  } else {
    value = decimals.mul(lpReserves._reserve0).div(lpReserves._reserve1);
    percentA = decimals.mul(lpReserves._reserve0).div(lpTotalSupply);
    percentB = decimals.mul(lpReserves._reserve1).div(lpTotalSupply);
  }

  return [value, percentA, percentB, lpTotalSupply];
}

async function refreshGasPrice() {
  if (refreshData.gasPrice.refreshing) {
    return;
  }

  refreshData.gasPrice.refreshing = true;
  clearTimeout(refreshData.gasPrice.timeout);

  try {
    const response = await fetch("https://bscgas.info/gas");

    if (response.ok) {
      const result = await response.json();
      stats.gasPrice = result.standard;
    }
  } catch (e) {
    console.error(e);
  }

  const halfInterval = refreshInterval / 2;
  refreshData.gasPrice.timeout = setTimeout(
    refreshGasPrice,
    (halfInterval + Math.random() * halfInterval) * 5
  );
  refreshData.gasPrice.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

function updateMarketCap() {
  if (
    stats.internal.circulatingSupply &&
    stats.internal.gasValue &&
    stats.internal.gasReflectValue
  ) {
    stats.marketCap = ethers.utils.formatEther(
      stats.internal.circulatingSupply
        .mul(stats.internal.gasValue)
        .div(stats.internal.gasReflectValue)
    );
  }
}

function updateLpValue() {
  if (stats.internal.gasValue && stats.internal.percentA) {
    stats.lpValue = ethers.utils.formatEther(
      stats.internal.lpSupply
        .mul(stats.internal.percentA)
        .mul(stats.internal.gasValue)
        .div(decimals)
        .div(decimals)
    );
  }
}

function updateTotalRewardsUsd() {
  if (stats.internal.totalRewards && stats.internal.gasValue) {
    stats.totalRewardsUSD = ethers.utils.formatEther(
      stats.internal.totalRewards.mul(stats.internal.gasValue).div(decimals)
    );
  }
}

function updateBalanceUsd() {
  if (address) {
    if (
      stats.internal.balance &&
      stats.internal.gasValue &&
      stats.internal.gasReflectValue
    ) {
      stats.balanceUSD = ethers.utils.formatEther(
        stats.internal.balance
          .mul(stats.internal.gasReflectValue)
          .mul(stats.internal.gasValue)
          .div(decimals)
          .div(decimals)
      );
    }
  } else {
    stats.balanceUSD = "0";
  }
}

function updateRewardsUsd() {
  if (address) {
    if (stats.internal.rewards && stats.internal.gasValue) {
      stats.rewardsUSD = ethers.utils.formatEther(
        stats.internal.rewards.mul(stats.internal.gasValue).div(decimals)
      );
    }
  } else {
    stats.rewardsUSD = "0";
  }
}

async function refreshGasValue() {
  if (refreshData.gasValue.refreshing) {
    return;
  }

  refreshData.gasValue.refreshing = true;
  clearTimeout(refreshData.gasValue.timeout);

  try {
    let [gasValue] = await getTokenValueFromLP(
      tokens[network].gasAddress,
      tokens[network].gasLpAddress,
      tokens[network].provider
    );

    stats.internal.gasValue = gasValue.mul(
      ethers.BigNumber.from(10).pow(18 - tokens[network].stableDecimals)
    );
  } catch (e) {
    console.error(e);
  }

  updateMarketCap();
  updateLpValue();
  updateTotalRewardsUsd();
  updateBalanceUsd();
  updateRewardsUsd();

  const halfInterval = refreshInterval / 2;
  refreshData.gasValue.timeout = setTimeout(
    refreshGasValue,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.gasValue.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshLpData() {
  if (refreshData.lpData.refreshing) {
    return;
  }

  refreshData.lpData.refreshing = true;
  clearTimeout(refreshData.lpData.timeout);

  if (tokens[network].lpAddress) {
    try {
      let [gasReflectValue, percentA, percentB, lpSupply] =
        await getTokenValueFromLP(
          tokens[network].address,
          tokens[network].lpAddress,
          tokens[network].provider
        );

      stats.internal.gasReflectValue = gasReflectValue;
      stats.internal.percentA = percentA;
      stats.internal.percentB = percentB;
      stats.internal.lpSupply = lpSupply;
    } catch (e) {
      console.error(e);
    }

    updateMarketCap();
    updateLpValue();
  }

  const halfInterval = refreshInterval / 2;
  refreshData.lpData.timeout = setTimeout(
    refreshLpData,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.lpData.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshTotalRewardsData() {
  if (refreshData.totalRewardsData.refreshing) {
    return;
  }

  refreshData.totalRewardsData.refreshing = true;
  clearTimeout(refreshData.totalRewardsData.timeout);

  try {
    const gasReflectContract = new ethers.Contract(
      tokens[network].address,
      gasReflectAbi,
      tokens[network].provider
    );

    const totalRewards =
      await gasReflectContract.getTotalDividendsDistributed();
    stats.internal.totalRewards = totalRewards;
    stats.totalRewards = ethers.utils.formatEther(totalRewards);

    updateTotalRewardsUsd();
  } catch (e) {
    console.error(e);
  }

  const halfInterval = refreshInterval / 2;
  refreshData.totalRewardsData.timeout = setTimeout(
    refreshLpData,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.totalRewardsData.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshHoldersData() {
  if (refreshData.holdersData.refreshing) {
    return;
  }

  refreshData.holdersData.refreshing = true;
  clearTimeout(refreshData.holdersData.timeout);

  try {
    const gasReflectContract = new ethers.Contract(
      tokens[network].address,
      gasReflectAbi,
      tokens[network].provider
    );

    const holders = await gasReflectContract.getNumberOfDividendTokenHolders();
    stats.holders = holders.toString();
  } catch (e) {
    console.error(e);
  }

  const halfInterval = refreshInterval / 2;
  refreshData.holdersData.timeout = setTimeout(
    refreshLpData,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.holdersData.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshBalanceData() {
  if (refreshData.balanceData.refreshing) {
    return;
  }

  refreshData.balanceData.refreshing = true;
  clearTimeout(refreshData.balanceData.timeout);

  if (address) {
    try {
      const gasReflectContract = new ethers.Contract(
        tokens[network].address,
        gasReflectAbi,
        tokens[network].provider
      );

      const balance = await gasReflectContract.balanceOf(address);
      stats.internal.balance = balance;
      stats.balance = ethers.utils.formatEther(balance);
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.internal.balance = 0;
    stats.balance = "";
  }

  updateBalanceUsd();

  const halfInterval = refreshInterval / 2;
  refreshData.balanceData.timeout = setTimeout(
    refreshLpData,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.balanceData.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshRewardsData() {
  if (refreshData.rewardsData.refreshing) {
    return;
  }

  refreshData.rewardsData.refreshing = true;
  clearTimeout(refreshData.rewardsData.timeout);

  if (address) {
    try {
      const gasReflectContract = new ethers.Contract(
        tokens[network].address,
        gasReflectAbi,
        tokens[network].provider
      );

      const accountInfo = await gasReflectContract.getAccountDividendsInfo(
        address
      );
      stats.internal.rewards = accountInfo[4];
      stats.rewards = ethers.utils.formatEther(accountInfo[4]);
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.internal.rewards = 0;
    stats.rewards = "";
  }

  updateRewardsUsd();

  const halfInterval = refreshInterval / 2;
  refreshData.rewardsData.timeout = setTimeout(
    refreshLpData,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.rewardsData.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshBlockData() {
  if (refreshData.blockData.refreshing) {
    return;
  }

  refreshData.blockData.refreshing = true;
  clearTimeout(refreshData.blockData.timeout);

  stats.block = (await tokens[network].provider.getBlock()).number;

  const halfInterval = refreshInterval / 10;
  refreshData.blockData.timeout = setTimeout(
    refreshBlockData,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.blockData.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshPoolTokens(poolId) {
  if (refreshData.poolData[poolId].tokens.refreshing) {
    return;
  }

  refreshData.poolData[poolId].tokens.refreshing = true;
  clearTimeout(refreshData.poolData[poolId].tokens.timeout);

  if (address) {
    try {
      const stakeTokenContract = new ethers.Contract(
        pools[network][poolId].staked,
        erc20Abi,
        tokens[network].provider
      );

      const balance = await stakeTokenContract.balanceOf(address);
      const allowance = await stakeTokenContract.allowance(
        address,
        pools[network][poolId].address
      );
      const decimals = await stakeTokenContract.decimals();
      stats.poolData[poolId].internal.stakeAmount = balance;
      stats.poolData[poolId].internal.stakeAllowance = allowance;
      stats.poolData[poolId].internal.stakeDecimals = decimals;
      stats.poolData[poolId].stakeAmount = ethers.utils.formatUnits(
        balance,
        decimals
      );
      stats.poolData[poolId].stakeAllowance = ethers.utils.formatUnits(
        allowance,
        decimals
      );

      if (pools[network][poolId].reward) {
        const rewardTokenContract = new ethers.Contract(
          pools[network][poolId].reward,
          erc20Abi,
          tokens[network].provider
        );

        const rewardDecimals = await rewardTokenContract.decimals();
        stats.poolData[poolId].internal.rewardTokenDecimals[0] = rewardDecimals;
      } else {
        const rewardToken0Contract = new ethers.Contract(
          pools[network][poolId].rewards[0],
          erc20Abi,
          tokens[network].provider
        );
        const rewardToken1Contract = new ethers.Contract(
          pools[network][poolId].rewards[1],
          erc20Abi,
          tokens[network].provider
        );

        const rewardDecimals0 = await rewardToken0Contract.decimals();
        stats.poolData[poolId].internal.rewardTokenDecimals[0] =
          rewardDecimals0;

        const rewardDecimals1 = await rewardToken1Contract.decimals();
        stats.poolData[poolId].internal.rewardTokenDecimals[1] =
          rewardDecimals1;
      }
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.poolData[poolId].stakeAmount = 0;
    stats.poolData[poolId].stakeAllowance = 0;
    stats.poolData[poolId].internal.stakeAmount = 0;
    stats.poolData[poolId].internal.stakeAllowance = 0;
    stats.poolData[poolId].internal.stakeDecimals = 0;
    stats.poolData[poolId].internal.rewardTokenDecimals = [0, 0];
  }

  const halfInterval = refreshInterval / 2;
  refreshData.poolData[poolId].tokens.timeout = setTimeout(
    refreshPoolTokens,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.poolData[poolId].tokens.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshPoolStaked(poolId) {
  if (refreshData.poolData[poolId].staked.refreshing) {
    return;
  }

  refreshData.poolData[poolId].staked.refreshing = true;
  clearTimeout(refreshData.poolData[poolId].staked.timeout);

  if (address) {
    try {
      const poolContract = new ethers.Contract(
        pools[network][poolId].address,
        poolAbi,
        tokens[network].provider
      );

      const info = await poolContract.userInfo(address);
      stats.poolData[poolId].internal.staked = info.amount;
      stats.poolData[poolId].staked = ethers.utils.formatUnits(
        info.amount,
        stats.poolData[poolId].internal.stakeDecimals
      );
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.poolData[poolId].internal.staked = 0;
    stats.poolData[poolId].staked = 0;
  }

  const halfInterval = refreshInterval / 2;
  refreshData.poolData[poolId].staked.timeout = setTimeout(
    () => refreshPoolStaked(poolId),
    halfInterval + Math.random() * halfInterval
  );
  refreshData.poolData[poolId].staked.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshPoolRewards(poolId) {
  if (refreshData.poolData[poolId].rewards.refreshing) {
    return;
  }

  refreshData.poolData[poolId].rewards.refreshing = true;
  clearTimeout(refreshData.poolData[poolId].rewards.timeout);

  if (address) {
    try {
      if (pools[network][poolId].reward) {
        const poolContract = new ethers.Contract(
          pools[network][poolId].address,
          poolAbi,
          tokens[network].provider
        );

        const rewards = await poolContract.pendingReward(address);
        stats.poolData[poolId].internal.rewards[0] = rewards;
        stats.poolData[poolId].rewards[0] = ethers.utils.formatUnits(
          rewards,
          stats.poolData[poolId].internal.rewardTokenDecimals[0]
        );
      } else {
        const poolContract = new ethers.Contract(
          pools[network][poolId].address,
          poolDualRewardsAbi,
          tokens[network].provider
        );

        const rewards = await poolContract.pendingReward(address);
        stats.poolData[poolId].internal.rewards = rewards;
        stats.poolData[poolId].rewards[0] = ethers.utils.formatUnits(
          rewards[0],
          stats.poolData[poolId].internal.rewardTokenDecimals[0]
        );
        stats.poolData[poolId].rewards[1] = ethers.utils.formatUnits(
          rewards[1],
          stats.poolData[poolId].internal.rewardTokenDecimals[1]
        );
      }
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.poolData[poolId].rewards = [0, 0];
    stats.poolData[poolId].internal.rewards = [0, 0];
  }

  const halfInterval = refreshInterval / 2;
  refreshData.poolData[poolId].rewards.timeout = setTimeout(
    () => refreshPoolRewards(poolId),
    halfInterval + Math.random() * halfInterval
  );
  refreshData.poolData[poolId].rewards.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshPoolTotalStaked(poolId) {
  if (refreshData.poolData[poolId].totalStaked.refreshing) {
    return;
  }

  refreshData.poolData[poolId].totalStaked.refreshing = true;
  clearTimeout(refreshData.poolData[poolId].totalStaked.timeout);

  try {
    const poolContract = new ethers.Contract(
      pools[network][poolId].address,
      poolAbi,
      tokens[network].provider
    );

    const totalStaked = await poolContract.totalStaked();
    stats.poolData[poolId].internal.totalStaked = totalStaked;
    stats.poolData[poolId].totalStaked = ethers.utils.formatUnits(
      totalStaked,
      stats.poolData[poolId].internal.stakeDecimals
    );
  } catch (e) {
    console.error(e);
  }

  const halfInterval = refreshInterval / 2;
  refreshData.poolData[poolId].totalStaked.timeout = setTimeout(
    () => refreshPoolTotalStaked(poolId),
    halfInterval + Math.random() * halfInterval
  );
  refreshData.poolData[poolId].totalStaked.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshPoolRewardsPerBlock(poolId) {
  if (refreshData.poolData[poolId].rewardsPerBlock.refreshing) {
    return;
  }

  refreshData.poolData[poolId].rewardsPerBlock.refreshing = true;
  clearTimeout(refreshData.poolData[poolId].rewardsPerBlock.timeout);

  try {
    if (pools[network][poolId].reward) {
      const poolContract = new ethers.Contract(
        pools[network][poolId].address,
        poolAbi,
        tokens[network].provider
      );

      const rewardsPerBlock = await poolContract.rewardPerBlock();
      stats.poolData[poolId].internal.rewardsPerBlock[0] = rewardsPerBlock;
      stats.poolData[poolId].rewardsPerBlock[0] = ethers.utils.formatUnits(
        rewardsPerBlock,
        stats.poolData[poolId].internal.rewardTokenDecimals[0]
      );
    } else {
      const poolContract = new ethers.Contract(
        pools[network][poolId].address,
        poolDualRewardsAbi,
        tokens[network].provider
      );

      const rewards0PerBlock = await poolContract.reward0PerBlock();
      stats.poolData[poolId].internal.rewardsPerBlock[0] = rewards0PerBlock;
      stats.poolData[poolId].rewardsPerBlock[0] = ethers.utils.formatUnits(
        rewards0PerBlock,
        stats.poolData[poolId].internal.rewardTokenDecimals[0]
      );

      const rewards1PerBlock = await poolContract.reward1PerBlock();
      stats.poolData[poolId].internal.rewardsPerBlock[1] = rewards1PerBlock;
      stats.poolData[poolId].rewardsPerBlock[1] = ethers.utils.formatUnits(
        rewards1PerBlock,
        stats.poolData[poolId].internal.rewardTokenDecimals[1]
      );
    }
  } catch (e) {
    console.error(e);
  }

  const halfInterval = refreshInterval / 2;
  refreshData.poolData[poolId].rewardsPerBlock.timeout = setTimeout(
    () => refreshPoolRewardsPerBlock(poolId),
    halfInterval + Math.random() * halfInterval
  );
  refreshData.poolData[poolId].rewardsPerBlock.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function loadStats() {
  if (tokens[network]) {
    // refreshGasPrice();

    refreshGasValue();
    refreshLpData();

    const gasReflectContract = new ethers.Contract(
      tokens[network].address,
      gasReflectAbi,
      tokens[network].provider
    );

    if (!stats.internal.circulatingSupply) {
      const totalSupply = await gasReflectContract.totalSupply();
      const burnedSupply = await gasReflectContract.balanceOf(
        "0x000000000000000000000000000000000000dead"
      );
      stats.internal.circulatingSupply = totalSupply.sub(burnedSupply);

      updateMarketCap();
    }

    refreshTotalRewardsData();
    refreshHoldersData();
    refreshBalanceData();
    refreshRewardsData();

    refreshBlockData();

    for (const pId in pools[network]) {
      await refreshPoolTokens(pId);
      refreshPoolStaked(pId);
      refreshPoolRewards(pId);
      refreshPoolTotalStaked(pId);
      refreshPoolRewardsPerBlock(pId);
    }

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
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: `0x${parseInt(network, 10).toString(16)}`,
                  chainName:
                    network == "56" ? "Binance Smart Chain" : "Polygon Network",
                  nativeCurrency: {
                    name: network == "56" ? "BNB" : "Matic",
                    symbol: network == "56" ? "BNB" : "Matic",
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
    totalRewards: "0",
    totalRewardsUSD: "0",
    balance: "0",
    balanceUSD: "0",
    rewards: "0",
    rewardsUSD: "0",
    marketCap: "0",
    tradingVolume: "0",
    lpValue: "0",
    holders: "0",
    gasPrice: "5",
    block: 0,
    poolData: {
      0: JSON.parse(JSON.stringify(defaultPoolDataStats)),
      1: JSON.parse(JSON.stringify(defaultPoolDataStats)),
      2: JSON.parse(JSON.stringify(defaultPoolDataStats)),
      3: JSON.parse(JSON.stringify(defaultPoolDataStats)),
      4: JSON.parse(JSON.stringify(defaultPoolDataStats)),
      5: JSON.parse(JSON.stringify(defaultPoolDataStats)),
      6: JSON.parse(JSON.stringify(defaultPoolDataStats)),
      7: JSON.parse(JSON.stringify(defaultPoolDataStats)),
      8: JSON.parse(JSON.stringify(defaultPoolDataStats)),
    },
    internal: {},
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

async function approve(poolId) {
  if (connected && tokens[network] && address) {
    try {
      const tokenContract = new ethers.Contract(
        pools[network][poolId].staked,
        erc20Abi,
        new ethers.providers.Web3Provider(provider).getSigner()
      );

      await tokenContract.approve(
        pools[network][poolId].address,
        ethers.constants.MaxUint256
      );
    } catch (e) {
      console.error(e);
    }
  }
}

async function deposit(poolId, amount) {
  if (connected && tokens[network]) {
    try {
      const poolContract = new ethers.Contract(
        pools[network][poolId].address,
        poolAbi,
        new ethers.providers.Web3Provider(provider).getSigner()
      );

      await poolContract.deposit(amount);
    } catch (error) {
      console.log(error);
    }
  }
}

async function withdraw(poolId, amount) {
  if (connected && tokens[network]) {
    try {
      const poolContract = new ethers.Contract(
        pools[network][poolId].address,
        poolAbi,
        new ethers.providers.Web3Provider(provider).getSigner()
      );

      await poolContract.withdraw(amount);
    } catch (error) {
      console.log(error);
    }
  }
}
