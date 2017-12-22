import React, {Component} from 'react';

class ShopifyMainSection extends Component {
    render() {
        return (
            <div id="shopify-main-section">
                <h3 id="shopify-subheading">Subscribe for free marketing tips</h3>
                <div id="shopify-fields">
                    <input className="shopify-field" placeholder="Email Address" type="email"/>
                </div>
            </div>
        );
    }
}

export default ShopifyMainSection;