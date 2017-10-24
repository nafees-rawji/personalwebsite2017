import React, {Component} from 'react';
import Section from "../Section";

class Skills extends Component {
    render() {
        return (
            <Section scrolledIntoView={(e) => this.props.scrolledIntoView(e, this.props.position)} className={this.props.className}
                     scrolledOutOfView={(e) => this.props.scrolledOutOfView(e, this.props.position)} position={this.props.position}
                     id={"skills"} sectionHeading="Skills">
                <ul>
                    <li>HTML5/CSS3</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Android Development</li>
                    <li>Python</li>
                    <li>C</li>
                    <li>Java</li>
                </ul>
            </Section>
        );
    }
}

export default Skills;