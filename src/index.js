/**
 * See documentation on Strict Mode & Concurrent Mode below for more information:
 *
 * https://reactjs.org/docs/strict-mode.html
 * https://reactjs.org/docs/concurrent-mode-intro.html
 * https://reactjs.org/docs/concurrent-mode-adoption.html
 */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './lib/serviceWorker';

import './css/index.css';

// Opting into Strict Mode & Concurrent Mode:
ReactDOM.createRoot(document.getElementById('emojiest')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
