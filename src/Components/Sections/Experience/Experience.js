import React, {Component} from 'react';
import Section from "../../Section";
import ExperienceItem from "./ExperienceItem";
import tr from '../../../Images/ThomsonReuters.png';
import td from '../../../Images/td.png';


class Experience extends Component {
    render() {
        return (
            <Section scrolledIntoView={(e) => this.props.scrolledIntoView(e, this.props.position)}
                     className={this.props.className}
                     scrolledOutOfView={(e) => this.props.scrolledOutOfView(e, this.props.position)}
                     position={this.props.position}
                     id={"experience"} sectionHeading={"Experience"}>
                <div id={'timeline'}>
                    <ExperienceItem img={tr} title={'Thomson Reuters'} body={'Worked on application development and deployment using Node.js, React.js, and AWS (EC2, S3 and ECS).'}/>
                    <div className={'timeline-divider'}/>
                    <ExperienceItem img={td} title={'TD Canada'} body={'Worked on the production TD Canada Android Application developing a section that allows users to see their credit score.'}/>
                    <div className={'timeline-divider'}/>
                </div>
            </Section>
        );
    }
}

export default Experience;
