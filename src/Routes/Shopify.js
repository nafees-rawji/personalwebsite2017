import React, {Component} from 'react';

import '../css/main.css';
import '../css/Shopify/shopify.css'
import ShopifyMainSection from "../Components/Shopify/ShopifyMainSection";

class Shopify extends Component {

    render() {
        return (
            <div id="shopify-root">
                <div id="shopify-content">
                    <h1 id="shopify-title">Stay up to date with ecommerce trends with Shopify's newsletter</h1>
                    <hr id="shopify-divider"/>
                    <ShopifyMainSection/>
                </div>
            </div>
        );
    }
}

export default (Shopify);