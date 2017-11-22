import React, {Component} from 'react';
import github from "../../Images/Footer/github.png";
import githublBlue from "../../Images/Footer/github-blue.png";
import email from "../../Images/Footer/email.png";
import emailBlue from "../../Images/Footer/email-blue.png";
import linkedIn from "../../Images/Footer/linkedin.png";
import linkedInBlue from "../../Images/Footer/linkedin-blue.png";
import FooterItem from "./HoverItem";


class Footer extends Component {
    render() {
        return (
            <div className={"footer"} id={this.props.id}>
                <FooterItem src="mailto:nafees.rawji@mail.utoronto.ca" img={email} blueImg={emailBlue} alt="emal"/>
                <FooterItem src="https://github.com/nafees-rawji" img={github} blueImg={githublBlue} alt="githhub"/>
                <FooterItem src="http://www.linkedin.com/in/nafees-rawji-75141911b" img={linkedIn} blueImg={linkedInBlue} alt="linked-in"/>


            </div>
        );
    }
}

export default Footer;