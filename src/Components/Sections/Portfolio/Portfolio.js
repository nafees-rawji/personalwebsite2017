import React, {Component} from 'react';
import Section from "../../Section";
import PortfolioItem from "./PortfolioItem";
import placeholder from '../../../Images/placeholder.jpg'

class Portfolio extends Component {
    render() {
        return (
            <Section scrolledIntoView={(e) => this.props.scrolledIntoView(e, this.props.position)} className={this.props.className}
                     scrolledOutOfView={(e) => this.props.scrolledOutOfView(e, this.props.position)} position={this.props.position}
                     id={"portfolio"} sectionHeading={"Portfolio"}>
                <div className="portfolio-gallery">
                    <PortfolioItem img={placeholder} subheading="placeholder" imgAlt = "placeholder" url="http://google.com"/>
                    <PortfolioItem img={placeholder} subheading="placeholder" imgAlt = "placeholder" url="http://google.com"/>
                    <PortfolioItem img={placeholder} subheading="placeholder" imgAlt = "placeholder" url="http://google.com"/>
                    <PortfolioItem img={placeholder} subheading="placeholder" imgAlt = "placeholder" url="http://google.com"/>
                </div>
            </Section>
        );
    }
}

export default Portfolio;