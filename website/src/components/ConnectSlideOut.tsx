import { useEffect } from 'react';
import { ThemeConfig } from 'bootstrap-darkmode';

function ConnectSlideOut({ themeConfig }: { themeConfig: ThemeConfig }) {
  useEffect(() => {
    const fixedplugin = document.querySelector('.fixed-plugin');
    new PerfectScrollbar(fixedplugin);

    const fixedPlugin = document.querySelector('.fixed-plugin');
    if (fixedPlugin) {
      const fixedPluginButton = document.querySelector(
        '.fixed-plugin-button',
      ) as HTMLElement;
      const fixedPluginButtonNav = document.querySelector(
        '.fixed-plugin-button-nav',
      ) as HTMLElement;
      const fixedPluginCard = document.querySelector('.fixed-plugin .card');
      const fixedPluginCloseButton = document.querySelectorAll(
        '.fixed-plugin-close-button',
      ) as NodeListOf<HTMLElement>;
      const navbar = document.getElementById('navbarBlur');
      const buttonNavbarFixed = document.getElementById('navbarFixed');

      if (fixedPluginButton) {
        fixedPluginButton.onclick = function () {
          if (!fixedPlugin.classList.contains('show')) {
            fixedPlugin.classList.add('show');
          } else {
            fixedPlugin.classList.remove('show');
          }
        };
      }

      if (fixedPluginButtonNav) {
        fixedPluginButtonNav.onclick = function () {
          if (!fixedPlugin.classList.contains('show')) {
            fixedPlugin.classList.add('show');
          } else {
            fixedPlugin.classList.remove('show');
          }
        };
      }

      fixedPluginCloseButton.forEach(function (el) {
        el.onclick = function () {
          fixedPlugin.classList.remove('show');
        };
      });

      const body = document.querySelector('body');
      if (body) {
        body.onclick = function (e) {
          if (
            e.target &&
            e.target != fixedPluginButton &&
            e.target != fixedPluginButtonNav &&
            (e.target as HTMLElement).closest('.fixed-plugin .card') !=
              fixedPluginCard
          ) {
            fixedPlugin.classList.remove('show');
          }
        };
      }

      if (navbar && buttonNavbarFixed) {
        if (navbar.getAttribute('navbar-scroll') == 'true') {
          buttonNavbarFixed.setAttribute('checked', 'true');
        }
      }
    }
  }, []);

  return (
    <div className="fixed-plugin">
      <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
        <i className="fa fa-wallet py-2"> </i>
      </a>
      <div className="card shadow-lg ">
        <div className="card-header pb-0 pt-3 ">
          <div className="float-start">
            <h5 className="mt-3 mb-0">The Gas Station</h5>
            <p>Connect Wallet and Configure Network</p>
          </div>
          <div className="float-end mt-4">
            <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
              <i className="fa fa-close">Close</i>
            </button>
          </div>
        </div>
        <hr className="horizontal dark my-1" />
        <div className="card-body pt-sm-3 pt-0">
          <div className="d-flex">
            <button
              className="btn bg-gradient-primary w-100 px-3 mb-2 active connect-wallet"
              data-class="bg-transparent"
            >
              Connect Wallet
            </button>
          </div>
          <div>
            <h6 className="mb-0">Select Network</h6>
          </div>
          <select className="form-control network-select">
            <option value="56">Binance Smart Chain</option>
            <option value="137">Polygon Network</option>
          </select>
          <div className="mt-3">
            <h6 className="mb-0">Light / Dark Theme</h6>
          </div>
          <div className="form-check form-switch ps-0">
            <input
              className="form-check-input mt-1 ms-auto"
              type="checkbox"
              id="navbarFixed"
              checked={themeConfig.getTheme() === 'dark'}
              onChange={() => {
                if (themeConfig.getTheme() === 'dark') {
                  themeConfig.setTheme('light');
                } else {
                  themeConfig.setTheme('dark');
                }
              }}
            />
          </div>
          <button
            className="btn bg-gradient-primary w-100 px-3 mb-2 active add-token"
            data-class="bg-transparent"
          >
            Add GAS Token To Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConnectSlideOut;
