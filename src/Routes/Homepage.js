import React, {Component} from 'react';

import '../css/main.css';
import MainSection from "../Components/Sections/MainSection";
import About from "../Components/Sections/About";
import Portfolio from "../Components/Sections/Portfolio/Portfolio";
import Skills from "../Components/Sections/Skills";
import Navbar from "../Components/Navbar";
import Experience from "../Components/Sections/Experience/Experience";
import Footer from "../Components/Footer/Footer";
import scrollToComponent from 'react-scroll-to-component';
import Dots from "../Components/Dots";


class Homepage extends Component {

    constructor() {
        super();
        this.state = {
            currentElement: 0,
            lastScrollPos: 0
        };
        this.sections = [];
    }

    scrollAndSetState(i) {
        console.log("")
        scrollToComponent(this.sections[i]);
        this.setState({currentElement:i})
    }

    scrolledIntoView(e, i) {
        this.setState({currentElement:i})
    }

    scrolledOutOfView(e, i) {
        console.log("Scrolled Out of View", i);
    }


    render() {
        const sections = [
            <MainSection key={"homepage"} position={0} scrolledIntoView={this.scrolledIntoView.bind(this)}
                         scrolledOutOfView={this.scrolledOutOfView.bind(this)}
                         ref={(section) => { this.sections[0] = section; }}/>,

            <Portfolio key={"portfolio"} position={1} scrolledIntoView={this.scrolledIntoView.bind(this)}
                       scrolledOutOfView={this.scrolledOutOfView.bind(this)}
                       ref={(section) => { this.sections[1] = section; }}/>,

            <Skills key = {"skills"} position={2} scrolledIntoView={this.scrolledIntoView.bind(this)}
                    scrolledOutOfView={this.scrolledOutOfView.bind(this)}
                    ref={(section) => { this.sections[2] = section; }}/>,

            <Experience key={"experience"} position={3}  scrolledIntoView={this.scrolledIntoView.bind(this)}
                        scrolledOutOfView={this.scrolledOutOfView.bind(this)}
                        ref={(section) => { this.sections[3] = section; }}/>,

            <About key={"about"} position={4} scrolledIntoView={this.scrolledIntoView.bind(this)}
                   scrolledOutOfView={this.scrolledOutOfView.bind(this)}
                   ref={(section) => { this.sections[4] = section; }}
                   backToTop={() => scrollToComponent(this.sections[0])}
            />
            ];

        const numberOfSections = sections.length;

        return (
            <div id={"reactRoot"} onScroll={this.handleScroll}>
                <Dots number={numberOfSections} active={this.state.currentElement} handleCLick={(i) => {scrollToComponent(this.sections[i])}}/>
                <Navbar>
                        <p className={"nav-link"} onClick={() => {scrollToComponent(this.sections[1])}}>portfolio</p>
                        <p className={"nav-link"} onClick={() => {scrollToComponent(this.sections[2])}}>skills</p>
                        <p className={"nav-link"} onClick={() => {scrollToComponent(this.sections[3])}}>experience</p>
                </Navbar>
                {sections}
            </div>
        );
    }
}

export default (Homepage);