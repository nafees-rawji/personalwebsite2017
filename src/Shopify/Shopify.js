import React, {Component} from 'react';

import '../scss/main.scss';
import ShopifyMainSection from "../Shopify/components/ShopifyMainSection";
import '../Shopify/css/shopify.css'

class Shopify extends Component {

    render() {
        return (
            <div id="shopify-root">
                <div id="shopify-content">
                    <a id="shopify-source-link" href="https://github.com/nafees-rawji/personalwebsite2017/tree/master/src/Shopify">Code on github</a>
                    <h1 id="shopify-title">Stay up to date with ecommerce trends with Shopify's newsletter</h1>
                    <hr id="shopify-divider"/>
                    <ShopifyMainSection/>
                </div>
                <p id="shopify-unsubscribe">Unsubscribe</p>
            </div>
        );
    }
}

export default (Shopify);
