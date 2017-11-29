import React, {Component} from 'react';
import Section from "../Section";
import Footer from "../Footer/Footer";
import Resume from "../../Docs/Resume.pdf"
class About extends Component {
    render() {
        return (
            <Section scrolledIntoView={(e) => this.props.scrolledIntoView(e, this.props.position)}
                     className={this.props.className}
                     scrolledOutOfView={(e) => this.props.scrolledOutOfView(e, this.props.position)}
                     position={this.props.position}
                     id={"about"} sectionHeading>
                <h1>yeah, that's me</h1>
                <ul className="about-options">
                    <a href={Resume}>resume</a>
                    <li onClick={this.props.backToTop}>back to top</li>
                </ul>
                <Footer/>
            </Section>
        );
    }
}

export default About;