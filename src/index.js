import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './services/serviceWorker';
import './styles/reset.css';

ReactDOM.createRoot(document.getElementById('suspense-app')).render(<App />);
serviceWorker.register();
