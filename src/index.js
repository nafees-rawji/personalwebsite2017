import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import Homepage from "./Routes/Homepage";

import './css/main.css';
import 'normalize.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LiveCompetition from "./Routes/LiveCompetition";
import Shopify from "./Routes/Shopify";

const app = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/portfolio/live' component={LiveCompetition}/>
            <Route exact path='/portfolio/shopify' component={Shopify}/>
        </Switch>
    </BrowserRouter>
    , app);
registerServiceWorker();
