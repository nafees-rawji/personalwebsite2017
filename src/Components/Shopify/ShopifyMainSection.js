import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ShopifyMainSection extends Component {

    state = {
        selectedOption: '',
    };

    handleChange(selectedOption) {
        this.setState({ selectedOption });
    };

    render() {

        return (
            <div id="shopify-main-section">
                <h3 id="shopify-subheading">Subscribe for free marketing tips</h3>
                <div id="shopify-fields">
                    <input className="shopify-input" placeholder="Email Address" type="email"/>
                    <Select
                        className="shopify-dropdown"
                        name="form-field-name"
                        value={this.state.selectedOption}
                        onChange={this.handleChange.bind(this)}
                        searchable={false}
                        options={[
                            { value: 'one', label: 'Option One' },
                            { value: 'two', label: 'Option Two' },
                        ]}
                        placeholder={"Interested in..."}
                        style={{
                            height: "50px",
                            backgroundColor: "white",
                            borderRadius: "5px"
                        }}
                    />
                </div>
                <p id="shopify-error-message">Please enter a valid email address</p>
                <button id="shopify-submit-button">Sign Up Now</button>
            </div>
        );
    }
}

export default ShopifyMainSection;