import React, {Component} from 'react';

import '../css/main.css';
import ShopifyMainSection from "../Shopify/components/ShopifyMainSection";
import '../Shopify/css/shopify.css'

class Shopify extends Component {

    render() {
        return (
            <div id="shopify-root">
                <div id="shopify-content">
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