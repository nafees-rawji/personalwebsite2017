import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ShopifyMainSection extends Component {

    state = {
        selectedOption: '',
        email: '',
        hasError: false
    };

    optionSelected(selectedOption) {
        this.setState({ selectedOption });
    };

    emailChanged(e) {
        this.setState({email: e.target.value});
    }

    submitClicked() {
        // regex from stackoverflow (don't need to reinvent the wheel)
        /*eslint no-useless-escape: "off"*/
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.state.email.toLowerCase())) {
            console.log(this.state.email);
            this.setState({hasError: false});
        } else {
            this.setState({hasError: true});
        }
    }

    render() {
        return (
            <div id="shopify-main-section">
                <h3 id="shopify-subheading" >Subscribe for free marketing tips</h3>
                <div id="shopify-fields">
                    <input className="shopify-input" placeholder="Email Address" type="email" value={this.state.email} onChange={this.emailChanged.bind(this)}/>
                    <Select
                        className="shopify-dropdown"
                        name="form-field-name"
                        value={this.state.selectedOption}
                        onChange={this.optionSelected.bind(this)}
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
                {(this.state.hasError) ? <p id="shopify-error-message">Please enter a valid email address</p>: null}
                <button id="shopify-submit-button" onClick={this.submitClicked.bind(this)}>Sign Up Now</button>
            </div>
        );
    }
}

export default ShopifyMainSection;
