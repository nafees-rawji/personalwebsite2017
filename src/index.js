import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import Homepage from "./Routes/Homepage";

import './css/main.css';
import 'normalize.css';

const app = document.getElementById('root');

ReactDOM.render(
    <Homepage/>, app);
registerServiceWorker();
