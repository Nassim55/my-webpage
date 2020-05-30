import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './style/css/IntroPage.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
