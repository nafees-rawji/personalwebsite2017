import React, {Component} from 'react';
import Section from "../Section";

class About extends Component {
    render() {
        return (
            <Section scrolledIntoView={(e) => this.props.scrolledIntoView(e, this.props.position)}  className={this.props.className}
                     scrolledOutOfView={(e) => this.props.scrolledOutOfView(e, this.props.position)} position={this.props.position}
                     id={"about"} sectionHeading>
            <h1>Yeah Its me</h1>
            </Section>
        );
    }
}

export default About;