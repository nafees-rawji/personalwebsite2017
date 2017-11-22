import React, {Component} from 'react';
import BackArrow from '../Images/Navbar/back-arrow.png';
import BackArrowBlue from '../Images/Navbar/back-arrow-blue.png';
import {Link} from "react-router-dom";
import HoverItem from "./Footer/HoverItem";


class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            navbarClassNames: "navbar",
            dropdownClassNames: "dropdown",
            mobileClassNames: "mobile-content hide",
            dropdownSymbol: `☰`,
            expanded: false
        }
    }

    close() {
        this.setState({
            navbarClassNames: "navbar navbar-out",
            dropdownClassNames: "dropdown",
            mobileClassNames: "mobile-content hide",
            dropdownSymbol: "☰",
            expanded: false
        })
    }

    expand() {
        this.setState({
            navbarClassNames: "navbar navbar-in",
            dropdownClassNames: "dropdown dropdown-white",
            mobileClassNames: "mobile-content show",
            dropdownSymbol: "✕",
            expanded: true
        })
    }

    toggleNav() {
        console.log("Clicked");
        if (this.state.expanded === true) {
            this.close();
        } else {
            this.expand();
        }
    }


    render() {
        let content;
        if (this.props.backPath === undefined) {
            content =
                <div className={this.state.navbarClassNames} id={this.props.id}>
                    <p className={this.state.dropdownClassNames} onClick={this.toggleNav.bind(this)}>{this.state.dropdownSymbol}</p>
                    <h4 className="navbar-title">Nafees Rawji</h4>
                    <ul className={"navbar-links"}>
                        {this.props.children}
                    </ul>
                    <div className={this.state.mobileClassNames} onClick={this.toggleNav.bind(this)}>
                        {this.props.children}
                    </div>
                </div>;
        } else {
            content =
                <div className={this.state.navbarClassNames} id={this.props.id}>
                    <Link to={this.props.backPath}><HoverItem id={"back-arrow"} img={BackArrow} blueImg={BackArrowBlue}/></Link>
                    <div className={this.state.mobileClassNames}>
                        <Link className={"nav-link"} to={this.props.backPath}>back</Link>
                    </div>
                </div>;
        }
        return (
            <div className={this.state.navbarClassNames} id={this.props.id}>
                {content}
            </div>
        );
    }
}

export default Navbar;