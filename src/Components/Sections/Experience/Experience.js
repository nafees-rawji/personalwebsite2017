import React, {Component} from 'react';
import Section from "../../Section";
import ExperienceItem from "./ExperienceItem";

class Experience extends Component {
    render() {
        return (
            <Section scrolledIntoView={(e) => this.props.scrolledIntoView(e, this.props.position)}
                     className={this.props.className}
                     scrolledOutOfView={(e) => this.props.scrolledOutOfView(e, this.props.position)}
                     position={this.props.position}
                     id={"experience"} sectionHeading={"Experience"}>
                <ExperienceItem title={"TD Canada (Summer 2017)"} textRight={false}
                                body={"Over the summer of 2017, I worked as an Android Developer for TD Bank. During my time at TD I was tasked with developing a section of the TD Canada App (which you can find on the Google Play Store) which would allow users to see their credit score within the app. I completed this section on time and it was scheduled to launch in November after I left. Unfortunately, the back-end service which actually determined your credit score was provided by Equifax, and in lieu of their recent security troubles the entire project was scrapped.\n\nNevertheless, I learned a lot from my time at TD not only about Android Development but the software development process in such a large project as well. Working in an Agile environment with daily scrum meetings and code reviews before every merge ensured that my code was always on time and of good quality. I also was introduced to tools such as Jira and Jenkins during my time at TD."}/>
                <ExperienceItem title={"LIVE Competition (2016-2017)"} textRight={false}
                                body={"From January 2016 to November 2017 I was an executive on the LIVE Competition team. LIVE Competition is an annual student run case competition, during which 160 students from universities across Canada compete in a series of rounds showcasing their abilities in a different fields in business. My role consisted primarily of doing three main things.\n\nFirst I had to build a website for the competition, the website from the previous year had an antiquated design and clearly needed to be revamped. So in my first few months with the competition I remade their website (using HTML, CSS and JQuery) to be better designed and look more modern. Additionally, I believe I greatly improved the navigability of the website by flatting the structure of it and deeply nested pages that were difficult for users to find. Secondly, I was tasked with making the Portal for the competition which would serve as an interface for the executives and delegates to communicate. Also, the Portal would provide the delegates with a system to upload and download files during the competition. Finally, within the competition Portal, I had to build a business simulator which would take inputs from the delegates, and compute their scores/profit (which was done relative to each other). All parts of the Portal were completed in Node.JS, React.js, and SCSS, it was hosted on Microsoft Azure.\n\nYou can find a more in depth breakdown of my work in my portfolio."}/>
                <ExperienceItem title={"Cofax Buisiness Systems (2016-2017)"} textRight={false}
                                body={"During the summer of 2017, I worked at a small business in Markham ON, called Cofax Business Systems. I was tasked with remaking their internal tools which kept track of their inventory and billing. I built the new inventory/billing system in HTML, CSS and JQuery and the backend in Node.js."}/>

            </Section>
        );
    }
}

export default Experience;