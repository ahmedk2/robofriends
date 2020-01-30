import React from 'react';
//for react for the web (dom)
import ReactDOM from 'react-dom';

import './index.css';
//for progressive web apps
import * as serviceWorker from './serviceWorker';
//import component from Major Parent 
import App from './containers/App';
//for react css similar to bootstrap
import 'tachyons';

//remember the name of components are always capitalized
//import major component from App.js
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
