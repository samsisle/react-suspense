import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './lib/serviceWorker';

import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
