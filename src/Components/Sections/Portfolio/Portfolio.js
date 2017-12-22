import React, {Component} from 'react';
import Section from "../../Section";
import PortfolioItem from "./PortfolioItem";
import liveImage from '../../../Images/Portfolio/LiveImage.png'
import shopifyImage from '../../../Images/Portfolio/Shopify.png'

import placeholder from '../../../Images/placeholder.jpg'

class Portfolio extends Component {
    render() {
        return (
            <Section scrolledIntoView={(e) => this.props.scrolledIntoView(e, this.props.position)} className={this.props.className}
                     scrolledOutOfView={(e) => this.props.scrolledOutOfView(e, this.props.position)} position={this.props.position}
                     id={"portfolio"} sectionHeading={"Portfolio"}>
                <div className="portfolio-gallery">
                    <div className="column">
                        <PortfolioItem img={liveImage} subheading="live competition 2017" imgAlt = "live-competition 2017" url="/portfolio/live"/>
                        <PortfolioItem img={placeholder} subheading="placeholder" imgAlt = "placeholder" url="http://google.com"/>
                    </div>
                    <div className="column">
                        <PortfolioItem img={shopifyImage} subheading="shopify coding challenge" imgAlt = "shopify coding challenge" url="/portfolio/shopify"/>
                    </div>
                    <h3 id="construction-notice">This section is still under construction! More items will be added shortly.</h3>
                </div>
            </Section>
        );
    }
}

export default Portfolio;