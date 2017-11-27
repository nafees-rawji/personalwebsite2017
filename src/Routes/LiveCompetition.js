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
                    <PortfolioOverview title={"Live Competition"} right={false} img={mainImage} url={"http://google.com"} body={"From January to Nonmember 2017, I had the opportunity and privilege of being on the LIVE Competition 2017 executive team. To provide a bit of background, LIVE Competition is a University of Torornto student run case competition that runs annually each year in November.\n\n One of my first tasks for LIVE was developing them a new website, as their previous one was difficult to navigate and contained a lot of unnecessary information."}/>
                </div>
            </div>
        );
    }
}

export default (LiveCompetition);