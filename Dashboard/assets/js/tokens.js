const tokens = {
  56: {
    address: "0x6fabfe7946b23da23ad51dc45167cc2cfd0ce70e",
    symbol: "bscGAS",
    decimals: 18,
    image: "https://imgur.com/is3daqb.png",
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
  },
  137: {
    address: "0x840b5fc8c6dee2b1140174a3abdc215190426ccf",
    symbol: "polyGAS",
    decimals: 18,
    image: "https://imgur.com/is3daqb.png",
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
  },
};

const pools = {
  56: [
    {
      address: "0xD9D8209dC88CB96D0a300C2ab2479608A8D1463d",
      staked: "0x6fabfe7946b23da23ad51dc45167cc2cfd0ce70e",
      reward: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      depositFee: 0,
      startBlock: 11352000,
      endBlock: 11555000,
    },
    {
      address: "0x0124378207aF3E62D842f66B5af02dF5e4F9719C",
      staked: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      reward: "0x6fabfe7946b23da23ad51dc45167cc2cfd0ce70e",
      depositFee: 0.05,
      startBlock: 11352000,
      endBlock: 13555000,
    },
    {
      address: "0x8a96E5E22e2b057b9c7e7474B95D02bd9B2D0628",
      staked: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      reward: "0x6fabfe7946b23da23ad51dc45167cc2cfd0ce70e",
      depositFee: 5,
      startBlock: 11389000,
      endBlock: 11600000,
    },
  ],
  137: [
    {
      address: "0x2bc0bf8e98c7bbf08dd682b3ed0da50991aa66bd",
      staked: "0x840B5FC8C6deE2b1140174a3ABdC215190426CCf",
      reward: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      depositFee: 0,
      startBlock: 19665000,
      endBlock: 19933500,
    },
    {
      address: "0x20024f775ab6bc96077c73fb2e45c8862ac35552",
      staked: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      reward: "0x840B5FC8C6deE2b1140174a3ABdC215190426CCf",
      depositFee: 0.05,
      startBlock: 19665000,
      endBlock: 22333500,
    },
    {
      address: "0x543b1da3a789bd9e72142ce7b7b320dbd4ddea0a",
      staked: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      reward: "0x840B5FC8C6deE2b1140174a3ABdC215190426CCf",
      depositFee: 5,
      startBlock: 19710000,
      endBlock: 20000000,
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
    name: "bonusEndBlock",
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
    name: "totalStakeTokenBalance",
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
      {
        internalType: "uint256",
        name: "amountEth",
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
  gasAllowance: {
    timeout: null,
    refreshing: false,
  },
  usdcAllowance: {
    timeout: null,
    refreshing: false,
  },
  usdcAmount: {
    timeout: null,
    refreshing: false,
  },
  usdc2Allowance: {
    timeout: null,
    refreshing: false,
  },
  poolStaked: {
    0: {
      timeout: null,
      refreshing: false,
    },
    1: {
      timeout: null,
      refreshing: false,
    },
    2: {
      timeout: null,
      refreshing: false,
    },
  },
  poolRewards: {
    0: {
      timeout: null,
      refreshing: false,
    },
    1: {
      timeout: null,
      refreshing: false,
    },
    2: {
      timeout: null,
      refreshing: false,
    },
  },
  totalStaked: {
    0: {
      timeout: null,
      refreshing: false,
    },
    1: {
      timeout: null,
      refreshing: false,
    },
    2: {
      timeout: null,
      refreshing: false,
    },
  },
  rewardsPerBlock: {
    0: {
      timeout: null,
      refreshing: false,
    },
    1: {
      timeout: null,
      refreshing: false,
    },
    2: {
      timeout: null,
      refreshing: false,
    },
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
  gasAllowance: 0,
  usdcAllowance: 0,
  usdcAmount: 0,
  usdc2Allowance: 0,
  staked: { 0: 0, 1: 0, 2: 0 },
  poolRewards: { 0: 0, 1: 0, 2: 0 },
  totalStaked: { 0: 0, 1: 0, 2: 0 },
  rewardsPerBlock: { 0: 0, 1: 0, 2: 0 },
  internal: {
    staked: {},
    poolRewards: {},
    totalStaked: {},
    rewardsPerBlock: {},
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
        gasAllowance: 0,
        usdcAllowance: 0,
        usdcAmount: 0,
        usdc2Allowance: 0,
        staked: { 0: 0, 1: 0, 2: 0 },
        poolRewards: { 0: 0, 1: 0, 2: 0 },
        totalStaked: { 0: 0, 1: 0, 2: 0 },
        rewardsPerBlock: { 0: 0, 1: 0, 2: 0 },
        internal: {
          staked: {},
          poolRewards: {},
          totalStaked: {},
          rewardsPerBlock: {},
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

async function refreshGASAllowance() {
  if (refreshData.gasAllowance.refreshing) {
    return;
  }

  refreshData.gasAllowance.refreshing = true;
  clearTimeout(refreshData.gasAllowance.timeout);

  if (address) {
    try {
      const gasContract = new ethers.Contract(
        tokens[network].address,
        gasReflectAbi,
        tokens[network].provider
      );

      const allowance = await gasContract.allowance(
        address,
        pools[network][0].address
      );
      stats.internal.gasAllowance = allowance;
      stats.gasAllowance = ethers.utils.formatEther(allowance);
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.internal.gasAllowance = 0;
    stats.gasAllowance = 0;
  }

  const halfInterval = refreshInterval / 2;
  refreshData.gasAllowance.timeout = setTimeout(
    refreshGASAllowance,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.gasAllowance.refreshing = false;

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
        pools[network][1].address
      );
      stats.internal.usdcAllowance = allowance;
      stats.usdcAllowance = ethers.utils.formatEther(
        allowance.mul(
          ethers.BigNumber.from(10).pow(18 - tokens[network].stableDecimals)
        )
      );
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.internal.usdcAllowance = 0;
    stats.usdcAllowance = 0;
  }

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
      stats.usdcAmount = ethers.utils.formatEther(
        balance.mul(
          ethers.BigNumber.from(10).pow(18 - tokens[network].stableDecimals)
        )
      );
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.internal.usdcAmount = 0;
    stats.usdcAmount = 0;
  }

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

async function refreshUSDC2Allowance() {
  if (refreshData.usdc2Allowance.refreshing) {
    return;
  }

  refreshData.usdc2Allowance.refreshing = true;
  clearTimeout(refreshData.usdc2Allowance.timeout);

  if (address) {
    try {
      const usdcContract = new ethers.Contract(
        tokens[network].usdc,
        usdcAbi,
        tokens[network].provider
      );

      const allowance = await usdcContract.allowance(
        address,
        pools[network][2].address
      );
      stats.internal.usdc2Allowance = allowance;
      stats.usdc2Allowance = ethers.utils.formatEther(
        allowance.mul(
          ethers.BigNumber.from(10).pow(18 - tokens[network].stableDecimals)
        )
      );
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.internal.usdc2Allowance = 0;
    stats.usdc2Allowance = 0;
  }

  const halfInterval = refreshInterval / 2;
  refreshData.usdc2Allowance.timeout = setTimeout(
    refreshUSDC2Allowance,
    halfInterval + Math.random() * halfInterval
  );
  refreshData.usdc2Allowance.refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshStakedData(poolId) {
  if (refreshData.poolStaked[poolId].refreshing) {
    return;
  }

  refreshData.poolStaked[poolId].refreshing = true;
  clearTimeout(refreshData.poolStaked[poolId].timeout);

  if (address) {
    try {
      const poolContract = new ethers.Contract(
        pools[network][poolId].address,
        poolAbi,
        tokens[network].provider
      );

      const info = await poolContract.userInfo(address);
      stats.internal.staked[poolId] = info.amount;
      stats.staked[poolId] = ethers.utils.formatEther(
        info.amount.mul(
          ethers.BigNumber.from(10).pow(
            18 - (poolId == 0 ? 18 : tokens[network].stableDecimals)
          )
        )
      );
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.internal.staked[poolId] = 0;
    stats.staked[poolId] = 0;
  }

  const halfInterval = refreshInterval / 2;
  refreshData.poolStaked[poolId].timeout = setTimeout(
    () => refreshStakedData(poolId),
    halfInterval + Math.random() * halfInterval
  );
  refreshData.poolStaked[poolId].refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshPoolRewardsData(poolId) {
  if (refreshData.poolRewards[poolId].refreshing) {
    return;
  }

  refreshData.poolRewards[poolId].refreshing = true;
  clearTimeout(refreshData.poolRewards[poolId].timeout);

  if (address) {
    try {
      const poolContract = new ethers.Contract(
        pools[network][poolId].address,
        poolAbi,
        tokens[network].provider
      );

      const rewards = await poolContract.pendingReward(address);
      stats.internal.poolRewards[poolId] = rewards;
      stats.poolRewards[poolId] =
        rewards == 0
          ? 0
          : ethers.utils.formatEther(
              rewards.mul(
                ethers.BigNumber.from(10).pow(
                  18 - (poolId == 1 ? 18 : tokens[network].stableDecimals)
                )
              )
            );
    } catch (e) {
      console.error(e);
    }
  } else {
    stats.internal.poolRewards[poolId] = 0;
    stats.poolRewards[poolId] = 0;
  }

  const halfInterval = refreshInterval / 2;
  refreshData.poolRewards[poolId].timeout = setTimeout(
    () => refreshPoolRewardsData(poolId),
    halfInterval + Math.random() * halfInterval
  );
  refreshData.poolRewards[poolId].refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshTotalStakedData(poolId) {
  if (refreshData.totalStaked[poolId].refreshing) {
    return;
  }

  refreshData.totalStaked[poolId].refreshing = true;
  clearTimeout(refreshData.totalStaked[poolId].timeout);

  try {
    const poolContract = new ethers.Contract(
      pools[network][poolId].address,
      poolAbi,
      tokens[network].provider
    );

    const totalStaked = await poolContract.totalStaked();
    stats.internal.totalStaked[poolId] = totalStaked;
  } catch (e) {
    console.error(e);
  }

  const halfInterval = refreshInterval / 2;
  refreshData.totalStaked[poolId].timeout = setTimeout(
    () => refreshTotalStakedData(poolId),
    halfInterval + Math.random() * halfInterval
  );
  refreshData.totalStaked[poolId].refreshing = false;

  if (statsUpdated) {
    statsUpdated();
  }
}

async function refreshRewardsPerBlockData(poolId) {
  if (refreshData.rewardsPerBlock[poolId].refreshing) {
    return;
  }

  refreshData.rewardsPerBlock[poolId].refreshing = true;
  clearTimeout(refreshData.rewardsPerBlock[poolId].timeout);

  try {
    const poolContract = new ethers.Contract(
      pools[network][poolId].address,
      poolAbi,
      tokens[network].provider
    );

    const rewardsPerBlock = await poolContract.rewardPerBlock();
    stats.internal.rewardsPerBlock[poolId] = rewardsPerBlock;
  } catch (e) {
    console.error(e);
  }

  const halfInterval = refreshInterval / 2;
  refreshData.rewardsPerBlock[poolId].timeout = setTimeout(
    () => refreshRewardsPerBlockData(poolId),
    halfInterval + Math.random() * halfInterval
  );
  refreshData.rewardsPerBlock[poolId].refreshing = false;

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
    refreshGASAllowance();
    refreshUSDCAllowance();
    refreshUSDCAmount();
    refreshUSDC2Allowance();
    refreshStakedData(0);
    refreshStakedData(1);
    refreshStakedData(2);
    refreshPoolRewardsData(0);
    refreshPoolRewardsData(1);
    refreshPoolRewardsData(2);
    refreshTotalStakedData(0);
    refreshTotalStakedData(1);
    refreshTotalStakedData(2);
    refreshRewardsPerBlockData(0);
    refreshRewardsPerBlockData(1);
    refreshRewardsPerBlockData(2);

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
    gasAllowance: 0,
    usdcAllowance: 0,
    usdcAmount: 0,
    usdc2Allowance: 0,
    staked: { 0: 0, 1: 0, 2: 0 },
    poolRewards: { 0: 0, 1: 0, 2: 0 },
    totalStaked: { 0: 0, 1: 0, 2: 0 },
    rewardsPerBlock: { 0: 0, 1: 0, 2: 0 },
    internal: {
      staked: {},
      poolRewards: {},
      totalStaked: {},
      rewardsPerBlock: {},
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

async function approveGas() {
  if (connected && tokens[network] && address) {
    try {
      const gasContract = new ethers.Contract(
        tokens[network].address,
        gasReflectAbi,
        new ethers.providers.Web3Provider(provider).getSigner()
      );

      await gasContract.approve(
        pools[network][0].address,
        ethers.BigNumber.from(999999999).mul(
          ethers.BigNumber.from(10).pow(18 + 6)
        )
      );
    } catch (e) {
      console.error(e);
    }
  }
}

async function approveUSDC() {
  if (connected && tokens[network] && address) {
    try {
      const usdcContract = new ethers.Contract(
        tokens[network].usdc,
        usdcAbi,
        new ethers.providers.Web3Provider(provider).getSigner()
      );

      await usdcContract.approve(
        pools[network][1].address,
        ethers.BigNumber.from(999999999).mul(
          ethers.BigNumber.from(10).pow(tokens[network].stableDecimals + 6)
        )
      );
    } catch (e) {
      console.error(e);
    }
  }
}

async function approveUSDC2() {
  if (connected && tokens[network] && address) {
    try {
      const usdcContract = new ethers.Contract(
        tokens[network].usdc,
        usdcAbi,
        new ethers.providers.Web3Provider(provider).getSigner()
      );

      await usdcContract.approve(
        pools[network][2].address,
        ethers.BigNumber.from(999999999).mul(
          ethers.BigNumber.from(10).pow(tokens[network].stableDecimals + 6)
        )
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
