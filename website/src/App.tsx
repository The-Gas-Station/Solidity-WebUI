import { useEffect, useState } from 'react';

import { providers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

import { ThemeConfig } from 'bootstrap-darkmode';

import { useEagerConnect, useInactiveListener } from './hooks/connection';
import { Connections } from './connectors';
// import { Spinner } from './components/Spinner';

import SideNav from './components/SideNav';
import Footer from './components/Footer';
import ConnectSlideOut from './components/ConnectSlideOut';
import HomePage from './pages/HomePage';

function App() {
  const [themeConfig] = useState<ThemeConfig>(new ThemeConfig());

  useEffect(() => {
    themeConfig.initTheme();

    const mainpanel = document.querySelector('.main-content');
    new PerfectScrollbar(mainpanel);
  }, []);
  const fallbackWeb3 = useWeb3React<providers.Web3Provider>('fallback');

  useEffect(() => {
    const doAsync = async () => {
      await fallbackWeb3.activate(Connections.Network, undefined, true);
    };
    doAsync();
  }, []);

  const userWeb3 = useWeb3React<providers.Web3Provider>();
  const { connector } = userWeb3;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<any>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <div className="wrapper">
      <SideNav />
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <HomePage />
        <Footer />
      </main>
      <ConnectSlideOut themeConfig={themeConfig} />
    </div>
  );
}

export default App;
