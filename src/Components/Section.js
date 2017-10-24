import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import 'animate.css'


class Section extends Component {

    constructor() {
        super();
        this.state = {
            classes: ""
        }
    }

    handleEntrance(e) {
        console.log("Entered", this.props.position);
        this.props.scrolledIntoView(e, this.props.position);
        this.setState({
            classes: "fadeIn"
        });
    }

    handleExits(e) {
        console.log("Left", this.props.position);
        this.props.scrolledIntoView(e, this.props.position);
        this.setState({
            classes: "fadeOut"
        });
    }

    render() {
        const classNames = "section animated " + this.state.classes + " " + this.props.className;
        return (
            <div className={classNames} id={this.props.id}>
                <Waypoint onEnter={this.handleEntrance.bind(this)}
                          onLeave={this.handleExits.bind(this)}
                          onPositionChange={this.handlePositionChange}
                          topOffset={200}
                          bottomOffset={200}>
                    <div>
                        <h2 className={"section-heading"}>{this.props.sectionHeading}</h2>
                        {this.props.children}
                    </div>
                </Waypoint>
            </div>
        );
    }
}

export default Section;