import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className={"navbar"} id={this.props.id}>
                <h4 className="navbar-title">Nafees Rawji</h4>
                <ul className={"navbar-links"}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default Navbar;