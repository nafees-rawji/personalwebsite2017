import React, {Component} from 'react';

import '../css/main.css';
import Navbar from "../Components/Navbar";
import PortfolioOverview from "../Components/PortfolioPages/PortfolioOverview";
import mainImage from '../Images/Portfolio/LiveImage.png'

class LiveCompetition extends Component {

    render() {
        return (
            <div id={"reactRoot"}>
                <Navbar backPath={"/"}/>
                <div className="portfolio-page-content">
                    <PortfolioOverview title={"Live Competition"} right={false} img={mainImage} url={"http://live-competition.org"} body={"From January to November 2017, I had the opportunity and privilege of being on the LIVE Competition 2017 executive team. To provide a bit of background, LIVE Competition is a University of Torornto student run case competition that runs annually each year in November.\n\n One of my first tasks for LIVE was developing them a new website, as their previous one was difficult to navigate and contained a lot of unnecessary information. So I rebuilt the website from scratch using HTML5, CSS3 and JQuery and simplified the layout into two sections, one for delegates of the competition and one for sponsors of the competition. From their I decided to keep both of those sections limited to a single page so neither sponsors nor delegates would have to do any digging to find all the information important to them. Overall, I think I really brought the website into 2017 and provided LIVE a website on par with the quality of the competition.\n\nAnyways, visiting the website is the best way to see it so check it out for yourself!"}/>
                </div>
            </div>
        );
    }
}

export default (LiveCompetition);