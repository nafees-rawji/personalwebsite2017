import React, {Component} from 'react';

import '../css/main.css';
import MainSection from "../Components/Sections/MainSection";
import About from "../Components/Sections/About";
import Portfolio from "../Components/Sections/Portfolio/Portfolio";
import Skills from "../Components/Sections/Skills";
import Navbar from "../Components/Navbar";
import Scrollchor from 'react-scrollchor';
import Experience from "../Components/Sections/Experience/Experience";


class Homepage extends Component {

    constructor() {
        super();
        this.state = {
            currentElement: 0
        }
    }

    scrolledIntoView(e, i) {
        // console.log(e, i);
        this.setState({currentElement: i});
    }

    scrolledOutOfView(e, i) {
        // console.log(e, i);
    }

    render() {
        const sections = [
            <MainSection key={"homepage"} position={0} scrolledIntoView={this.scrolledIntoView.bind(this)}
                         scrolledOutOfView={this.scrolledOutOfView.bind(this)}/>,

            <Portfolio key={"portfolio"} position={1} scrolledIntoView={this.scrolledIntoView.bind(this)}
                       scrolledOutOfView={this.scrolledOutOfView.bind(this)}/>,

            <Skills key = {"skills"} position={2} scrolledIntoView={this.scrolledIntoView.bind(this)}
                    scrolledOutOfView={this.scrolledOutOfView.bind(this)}/>,

            <Experience key={"experience"} position={3}  scrolledIntoView={this.scrolledIntoView.bind(this)}
                        scrolledOutOfView={this.scrolledOutOfView.bind(this)}/>,

            <About key={"about"} position={4} scrolledIntoView={this.scrolledIntoView.bind(this)}
                   scrolledOutOfView={this.scrolledOutOfView.bind(this)}/>
            ];

        const numberOfSections = sections.length;

        return (
            <div id={"reactRoot"}>
                <Navbar>
                        <Scrollchor className={"nav-link"} to="#portfolio">portfolio</Scrollchor>
                        <Scrollchor className={"nav-link"} to="#skills">skills</Scrollchor>
                        <Scrollchor className={"nav-link"}>experience</Scrollchor>
                </Navbar>
                {sections}
            </div>
        );
    }
}

export default (Homepage);