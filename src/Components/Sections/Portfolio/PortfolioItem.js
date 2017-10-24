import React, {Component} from 'react';

class PortfolioItem extends Component {
    render() {
        return (
            <div className={"portfolio-item"}>
                <a href={this.props.url} className="overlay-container">
                    <div className="overlay"/>
                    <img className={"portfolio-image"} src={this.props.img} alt = {this.props.imgAlt}/>
                </a>
                <h3>{this.props.subheading}</h3>
            </div>
        );
    }
}

export default PortfolioItem;