import React, {Component} from 'react';
import Waypoint from 'react-waypoint';


class PortfolioItem extends Component {
    constructor() {
        super();
        this.state = {
            className: "",
            offset: 200
        }
    }

    handleEntrance(e) {
        // console.log("Entered", this.props.position);
        this.setState({
            className: "fadeIn"
        });
    }

    render() {
        console.log(this.state.className);
        const classNames = "portfolio-item animated " + this.state.className;
        return (
            <Waypoint
                onEnter={this.handleEntrance.bind(this)}
                topOffset={this.state.offset}
                bottomOffset={this.state.offset}>
                <div className={classNames}>
                    <a href={this.props.url} className="overlay-container">
                        <div className="overlay"/>
                        <img className={"portfolio-image"} src={this.props.img} alt = {this.props.imgAlt}/>
                    </a>
                    <h3>{this.props.subheading}</h3>
                </div>
            </Waypoint>
        );
    }
}

export default PortfolioItem;