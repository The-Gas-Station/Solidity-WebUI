import React from 'react';
import ReactDOM from 'react-dom';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';

import '../src/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getLibrary } from './connectors';

const Web3ReactProviderFallback = createWeb3ReactRoot('fallback');

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ReactProviderFallback getLibrary={getLibrary}>
        <App />
      </Web3ReactProviderFallback>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
