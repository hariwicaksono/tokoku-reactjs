import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'argon-design-system-react/src/assets/scss/argon-design-system-react.scss?v1.1.0';
import './index.css';
import 'react-notifications/lib/notifications.css';
import 'spin.js/spin.css';
import 'offline-js/offline.js';
import 'offline-js/themes/offline-theme-default.css';
import 'offline-js/themes/offline-language-english.css';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
