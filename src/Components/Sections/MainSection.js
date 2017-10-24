import React, {Component} from 'react';
import Section from "../Section";

import 'animate.css';

class MainSection extends Component {
    render() {
        return (
            <Section scrolledIntoView={(e) => this.props.scrolledIntoView(e, this.props.position)} className={this.props.className}
                     scrolledOutOfView={(e) => this.props.scrolledOutOfView(e, this.props.position)} position={this.props.position}
                     id={"main"}>
                <div id={"main-container"} >
                    <h1 id={"main-title"}>nafees rawji</h1>
                    <h3 className={"main-subheading animated fadeIn"}>A software developer from Toronto, ON.</h3>
                </div>
            </Section>
        );
    }
}

export default MainSection;