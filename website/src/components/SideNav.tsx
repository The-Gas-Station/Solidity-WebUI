import { useEffect } from 'react';

function SideNav() {
  useEffect(() => {
    const sidebar = document.querySelector('.sidenav');
    new PerfectScrollbar(sidebar);
  }, []);

  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a className="navbar-brand m-0">
          <img
            src="./assets/img/logo-ct.png"
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="ms-1 font-weight-bold">The Gas Station</span>
        </a>
      </div>
      <hr className="horizontal dark mt-0" />
      <div
        className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link  active" href="#">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-home text-sm" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1 text-color-dark">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="https://hub.gasstationcrypto.com">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-gas-pump text-dark" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1 text-dark">Rewards Hub</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="./pages/dashboard.html">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-chart-bar text-dark" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1 text-dark">
                Trade (Coming Soon)
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="https://nfp.gasstationcrypto.com/">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-id-card text-dark" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1 text-dark">
                Non Fungible Patrons
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="./pages/dashboard.html">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-faucet text-dark" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1 text-dark">
                Faucet (Coming Soon)
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="./pages/dashboard.html">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-route text-dark" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1 text-dark">
                Bridge Assets (Soon)
              </span>
            </a>
          </li>
          <li className="nav-item mt-3">
            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
              Links
            </h6>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="https://github.com/The-Gas-Station">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-github text-dark" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1 text-dark">Github</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link  "
              href="https://gasstationcrypto.gitbook.io/the-crypto-gas-station/"
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-book text-dark" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1 text-dark">Gitbook</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="https://discord.gg/vaaZ2mrYaq">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fab fa-discord text-dark" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1 text-dark">Discord</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  " href="https://t.me/TheGasStation_Crypto">
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-telegram text-dark" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1 text-dark">Telegram</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link  "
              href="https://gasstationcrypto.medium.com/"
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-medium text-dark" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1 text-dark">Medium</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link  "
              href="https://twitter.com/GasStation_cryp"
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-twitter text-dark" aria-hidden="true"></i>
              </div>
              <span className="nav-link-text ms-1 text-dark">Twitter</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideNav;
