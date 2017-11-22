import React, {Component} from 'react';

import '../css/main.css';
import MainSection from "../Components/Sections/MainSection";
import About from "../Components/Sections/About";
import Portfolio from "../Components/Sections/Portfolio/Portfolio";
import Skills from "../Components/Sections/Skills";
import Navbar from "../Components/Navbar";
import Experience from "../Components/Sections/Experience/Experience";
import scrollToComponent from 'react-scroll-to-component';
import Dots from "../Components/Dots";
import {Link} from "react-router-dom";


class LiveCompetition extends Component {

    render() {
        return (
            <div id={"reactRoot"}>
                <Navbar backPath={"/"}/>
                <div className="portfolio-page-content">
                    <h1>Hello World</h1>
                </div>
            </div>
        );
    }
}

export default (LiveCompetition);