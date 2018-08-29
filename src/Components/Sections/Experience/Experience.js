import React, {Component} from 'react';
import Section from "../../Section";
import ExperienceItem from "./ExperienceItem";
import tr from '../../../Images/ThomsonReuters.png';
import td from '../../../Images/td.png';
import howlplay from '../../../Images/howlplay.svg';
import weav from '../../../Images/weav.gif';

class Experience extends Component {
    render() {
        return (
            <Section scrolledIntoView={(e) => this.props.scrolledIntoView(e, this.props.position)}
                     className={this.props.className}
                     scrolledOutOfView={(e) => this.props.scrolledOutOfView(e, this.props.position)}
                     position={this.props.position}
                     id={"experience"} sectionHeading={"Experience"}>
                <div id={'timeline'}>
                    <div className={'timeline-group'}>
                        <ExperienceItem className={'timeline-item-left'} img={weav} title={'Weav (2018 - Present)'} body={'Worked on application development and deployment using Node.js, React.js, and AWS (EC2, S3 and ECS).'} first={true}/>
                        <div className={'timeline-divider group-divider'}/>
                        <ExperienceItem  className={'timeline-item-right'} img={tr} title={'Thomson Reuters (2018 - Present)'} body={'Worked on application development and deployment using Node.js, React.js, and AWS (EC2, S3 and ECS).'} first={true}/>
                    </div>
                    <div className={'timeline-group dividers'}>
                        <div className={'timeline-divider timeline-divider-left'}/>
                        <div className={'timeline-divider timeline-divider-right'}/>
                    </div>
                    <ExperienceItem img={howlplay} title={'HowlPlay (Winter 2018)'} body={''}/>
                    <div className={'timeline-divider'}/>
                    <ExperienceItem img={td} title={'TD Canada (Summer 2017)'} body={'Worked on the production TD Canada Android Application developing a section that allows users to see their credit score.'}/>
                </div>
            </Section>
        );
    }
}

export default Experience;
