import { useEffect } from 'react';

function SideNav() {
  useEffect(() => {
    const bscChartEl = $('#chart-line-bsc');
    new Chart(bscChartEl, {
      type: 'pie',
      data: {
        labels: ['Developer', 'Treasury', 'Angels', 'Burn', 'Liquidity'],
        datasets: [
          {
            data: [
              35500000000, 14500000000, 7100000000, 17900000000, 25000000000,
            ],
            backgroundColor: [
              'rgba(255, 0, 0, 0.5)',
              'rgba(100, 255, 0, 0.5)',
              'rgba(200, 50, 255, 0.5)',
              'rgba(0, 100, 255, 0.5)',
              'rgb(191, 127, 63)',
            ],
          },
        ],
      },
      options: {
        title: {
          display: false,
          text: 'data',
        },
      },
    });

    const polyChartEl = $('#chart-line-poly');
    new Chart(polyChartEl, {
      type: 'pie',
      data: {
        labels: ['Developer', 'Treasury', 'Airdrop', 'Presale', 'Liquidity'],
        datasets: [
          {
            data: [
              35500000000, 14500000000, 21000000000, 8000000000, 20000000000,
            ],
            backgroundColor: [
              'rgba(255, 0, 0, 0.5)',
              'rgba(100, 255, 0, 0.5)',
              'rgba(200, 50, 255, 0.5)',
              'rgba(0, 100, 255, 0.5)',
              'rgb(191, 127, 63)',
            ],
          },
        ],
      },
      options: {
        title: {
          display: false,
          text: 'data',
        },
      },
    });

    // Verify navbar blur on scroll
    navbarBlurOnScroll('navbarBlur');
  }, []);

  return (
    <>
      <div>
        <img
          src="./assets/img/gascanbanner.png"
          className="img-fluid"
          alt="Responsive image"
        />
      </div>
      <nav
        className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
        id="navbarBlur"
        navbar-scroll="true"
      >
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm">
                <a
                  className="opacity-5 text-dark"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Where am I?
                </a>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                Home
              </li>
            </ol>
            <h6 className="font-weight-bolder mb-0 network-name"></h6>
          </nav>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-xl-none ps-3 d-flex align-items-right">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="nav-link text-body p-0"
                id="iconNavbarSidenav"
              >
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <p className="text-center">
        <img
          src="./img/banner.png"
          className="img-fluid align-items-center"
          alt="Responsive image"
        />
      </p>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <img
                  src="./img/bscGAS.png"
                  className="img-fluid"
                  alt="Responsive image"
                />
                <h4 className="text-dark font-weight-bold text-center">
                  7% BNB Rewards!
                </h4>
                <h5 className="text-dark font-weight-bold text-center">
                  Total Supply: 100,000,000,000
                </h5>
                <canvas
                  id="chart-line-bsc"
                  width="299"
                  height="200"
                  className="chartjs-render-monitor"
                  style={{ display: 'block', width: 299, height: 200 }}
                ></canvas>
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x6fAbfe7946b23da23aD51Dc45167cc2CFd0ce70e"
                  className="btn bg-gradient-primary w-100 px-3 mb-2 active"
                >
                  Buy Now!
                </a>
                <p className="text-dark font-weight-bold text-center">
                  Set Slippage to 24%*
                </p>
                <a
                  href="https://poocoin.app/tokens/0x6fabfe7946b23da23ad51dc45167cc2cfd0ce70e"
                  className="btn bg-gradient-primary w-100 px-3 mb-2 active"
                >
                  <i className="fa fa-bar-chart"></i>Chart
                </a>
                <a
                  href="https://bscscan.com/address/0x6fAbfe7946b23da23aD51Dc45167cc2CFd0ce70e#code"
                  className="btn bg-gradient-primary w-100 px-3 mb-2 active"
                >
                  View The Contract
                </a>
                <a
                  href="https://mudra.website/?certificate=yes&lp=0x340db2a8e77ad047e5e786c94db0ae1593082264&type=0"
                  className="btn bg-gradient-primary w-100 px-3 mb-2 active"
                >
                  Liquidity Lock
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xl-6 mb-xl-0 mb-4 text-center">
            <div className="card">
              <div className="card-body p-3">
                <h3 className="text-dark font-weight-bold text-center">
                  Welcome To The Gas Station!
                </h3>
                <h4 className="text-dark font-weight-bolder text-center">
                  7% Rewards in BNB, MATIC!
                </h4>
                <h5 className="text-dark font-weight-bold text-center">
                  Ether Rewards Coming To Every EVM-Based Blockchain.
                </h5>
                <img src="./img/activepump.gif" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-body p-3">
                <img
                  src="./img/polyGAS.png"
                  className="img-fluid"
                  alt="Responsive image"
                />
                <h4 className="text-dark font-weight-bold text-center">
                  7% MATIC Rewards!
                </h4>
                <h5 className="text-dark font-weight-bold text-center">
                  Total Supply: 100,000,000,000
                </h5>
                <canvas
                  id="chart-line-poly"
                  width="299"
                  height="200"
                  className="chartjs-render-monitor"
                  style={{ display: 'block', width: 299, height: 200 }}
                ></canvas>
                <a
                  href="https://app.apeswap.finance/swap?inputCurrency=ETH&outputCurrency=0x840B5FC8C6deE2b1140174a3ABdC215190426CCf"
                  className="btn bg-gradient-primary w-100 px-3 mb-2 active"
                >
                  BUY NOW!
                </a>
                <p className="text-dark font-weight-bold text-center">
                  Set Slippage to 24%*
                </p>
                <a
                  href="https://dex.guru/token/0x840b5fc8c6dee2b1140174a3abdc215190426ccf-polygon"
                  className="btn bg-gradient-primary w-100 px-3 mb-2 active"
                >
                  <i className="fa fa-bar-chart"></i>Chart
                </a>
                <a
                  href="https://polygonscan.com/address/0x840b5fc8c6dee2b1140174a3abdc215190426ccf#code"
                  className="btn bg-gradient-primary w-100 px-3 mb-2 active"
                >
                  View The Contract
                </a>
                <a
                  href="#"
                  className="btn bg-gradient-primary w-100 px-3 mb-2 active"
                >
                  Liquidity Lock
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 align-items-center">
        <div>
          <img
            src="./assets/img/gascanbanner.png"
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-lg-7 mb-lg-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <img src="img/utility.png" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-sm-4 text-center">
          <div className="card">
            <div className="card-body p-3">
              <h3 className="text-dark font-weight-bolder text-center">
                The Ecosystem
              </h3>
              <h5 className="text-dark font-weight-bold text-center">
                GAS Tokens are the product that will fuel the ecosystem. GAS
                tokens run on the Dividend Token ERC-20 Smart Contract. The GAS
                token has a transaction tax of 24% at launch, reducing rapidly
                at 1% til a minimum of 16% tax on all transactions:
              </h5>
              <h6 className="text-dark font-weight-bold text-center">
                <ul>
                  • 7% of Tax automatically gets rewarded back to token holders
                </ul>
                <ul>
                  • 5% of Tax gets added to the underlying liquidity pool, and
                  sent to a burned “dead” wallet.
                </ul>
                <ul>
                  • 8% of Tax is funding the project development, this % will
                  reduce 1% every 30 days after a token has been launched, to a
                  minimum of 4%. With these funds gathered from the tax the
                  development team will be building asset bridges for every
                  network we deploy on.
                </ul>
              </h6>
              <a
                href="https://github.com/The-Gas-Station/Solidity-WebUI/blob/main/The%20Gas%20Station%20White%20Paper%20v1.1.1.pdf"
                className="btn bg-gradient-primary w-100 px-3 mb-2 active"
              >
                Read The Whitepaper
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-sm-4 text-center">
            <div className="card">
              <div className="card-body p-3">
                <h3 className="text-dark font-weight-bolder text-center">
                  Non Fungible Patrons
                </h3>
                <h5 className="text-dark font-weight-bold text-center">
                  Patrons will be unique one-of-a-kind hand drawn & script
                  generated NFTs that will help fund the bridge liquidities and
                  have unique rewards to their owners.
                </h5>
                <h6 className="text-dark font-weight-bold text-center">
                  <ul>
                    • There will be a max of 550 mints per blockchain. 500
                    common, 38 rare, 12 legendary.
                  </ul>
                  <ul>
                    • Common mint lets the holder use the bridge for free like a
                    token holder would be allowed to do.
                  </ul>
                  <ul>
                    • Rare / Legendary mint also allow wallet holders to use the
                    bridge for free.
                  </ul>
                  <ul>
                    • Rare / Legendary mint have staking pools that are directly
                    funded by % of tax that is produced from the bridge fees.
                    Common mint will not have these.
                  </ul>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card">
              <div className="card-body p-3">
                <img src="img/nftutility.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 align-items-center">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body p-3">
                <p className="text-center">
                  <img src="img/gamers.png" className="img-fluid" />
                </p>
                <h4 className="text-dark font-weight-bolder text-center">
                  We’ve Got Your 6, Lets Move Out!
                </h4>
                <h5 className="text-dark font-weight-bold text-center">
                  Never again will you need to worry about having enough gas for
                  your next move while holding GAS tokens. The reflected gas
                  should keep your tank full and ready for action.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body p-3">
                <p className="text-center">
                  <img src="img/traders.png" className="img-fluid" />
                </p>
                <h4 className="text-dark font-weight-bolder text-center">
                  Quit Burning Your Cash On Migrations To Other Blockchains!
                </h4>
                <h5 className="text-dark font-weight-bold text-center">
                  When we complete and deploy our stable coin bridge, GAS token
                  holders will never have to worry about fees when migrating
                  from one blockchain to another.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body p-3">
                <p className="text-center">
                  <img src="img/investors.png" className="img-fluid" />
                </p>
                <h4 className="text-dark font-weight-bolder text-center">
                  Passive Income Just For Holding!
                </h4>
                <h5 className="text-dark font-weight-bold text-center">
                  The DEFI scene is hot, and we want in on the action! GAS
                  tokens give our investors returns in native blockchain assets
                  - the most valuable of assets around, Gas. No need to do
                  anything but buy GAS tokens and watch your native gas go up!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 align-items-center">
        <div>
          <img
            src="./assets/img/gascanbanner.png"
            className="img-fluid"
            alt="Responsive image"
          />
        </div>
      </div>
      <p className="text-center">
        <img
          src="./img/roadmap.png"
          className="img-fluid align-items-center"
          alt="Responsive image"
        />
      </p>
      <div className="row justify-content-center">
        <div className="col-sm-5 align-items-center">
          <div className="card">
            <h3 className="text-dark font-weight-bolder text-center">
              Aug 2021 - Oct 2021
            </h3>
            <h4 className="text-dark font-weight-bold text-center">
              <ul>Launch bscGAS on Binance Smart Chain (8/06/21)</ul>

              <ul>Launch polyGAS on Polygon (9/03/21)</ul>

              <ul>Launch ftmGAS on Fantom (10/01/21)</ul>

              <ul>Launch Rewards Hub (completed 8/22/21)</ul>

              <ul>NFT Launch</ul>

              <ul>Stress-testing upcoming features on testnet</ul>
            </h4>
          </div>
        </div>
        <div className="col-sm-5 align-items-center">
          <div className="card">
            <h3 className="text-dark font-weight-bolder text-center">
              Nov 2021 - Jan 2022
            </h3>
            <h4 className="text-dark font-weight-bold text-center">
              <ul>Launch avaxGAS on Avalanche (TBD)</ul>

              <ul>Launch ethGAS on Ethereum (TBD)</ul>

              <ul>Deploy Mainnet Faucets</ul>

              <ul>Deploy Mainnet Bridges</ul>

              <ul>Establishing Partnerships</ul>
            </h4>
          </div>
        </div>
        <div className="row mt-4 align-items-center">
          <div>
            <img
              src="./assets/img/gascanbanner.png"
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
          <div className="row mt-4 justify-content-center">
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body p-3">
                  <p className="text-center">
                    <img src="img/panda@2x.png" className="img-fluid" />
                  </p>
                  <h4 className="text-dark font-weight-bolder text-center">
                    OPPanda
                  </h4>
                  <h5 className="text-dark font-weight-bold text-center">
                    Lead Developer
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body p-3">
                  <p className="text-center">
                    <img src="img/me@2x.png" className="img-fluid" />
                  </p>
                  <h4 className="text-dark font-weight-bolder text-center">
                    Captnocap
                  </h4>
                  <h5 className="text-dark font-weight-bold text-center">
                    Project Manager
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body p-3">
                  <p className="text-center">
                    <img src="img/xeno@2x.png" className="img-fluid" />
                  </p>
                  <h4 className="text-dark font-weight-bolder text-center">
                    Xenodelic
                  </h4>
                  <h5 className="text-dark font-weight-bold text-center">
                    Graphics Design
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body p-3">
                  <p className="text-center">
                    <img src="img/hadmanz@2x.png" className="img-fluid" />
                  </p>
                  <h4 className="text-dark font-weight-bolder text-center">
                    StrikingSerpent
                  </h4>
                  <h5 className="text-dark font-weight-bold text-center">
                    Marketing Strategist
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="card">
                <div className="card-body p-3">
                  <p className="text-center">
                    <img src="img/proc@2x.png" className="img-fluid" />
                  </p>
                  <h4 className="text-dark font-weight-bolder text-center">
                    ProcArt
                  </h4>
                  <h5 className="text-dark font-weight-bold text-center">
                    Developer
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center mt-4">
              <div className="col-lg-6 mb-lg-0 mb-4">
                <div className="card">
                  <div className="card-body p-3">
                    <h2 className="mb-1 pt-2 text-bold text-center">
                      Our Partners
                    </h2>
                    <div className="row justify-content-center">
                      <div className="col-lg-2 gx-5">
                        <div className="d-flex flex-column h-100">
                          <a
                            className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                            href="https://www.polycrystal.finance/"
                          >
                            <img src="img/crystal.png" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-2 gx-5">
                        <div className="d-flex flex-column h-100">
                          <a
                            className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                            href="https://www.cryptoguns.io/"
                          >
                            <img src="img/guns.png" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-2 gx-5">
                        <div className="d-flex flex-column h-100">
                          <a
                            className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                            href="https://www.primatesocialsociety.com/"
                          >
                            <img src="img/apes.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
