import React, {Component} from 'react';
import Section from "../../Section";
import ExperienceItem from "./ExperienceItem";

class Experience extends Component {
    render() {
        return (
            <Section scrolledIntoView={(e) => this.props.scrolledIntoView(e, this.props.position)} className={this.props.className}
                     scrolledOutOfView={(e) => this.props.scrolledOutOfView(e, this.props.position)} position={this.props.position}
                     id={"experience"} sectionHeading={"Experience"}>
                <ExperienceItem title={"TD Canada (Summer 2017)"} textRight={false}
                                body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh nulla, ornare ac turpis non, consectetur mollis lacus. Praesent at consectetur sem. Pellentesque efficitur rhoncus lorem, in varius velit congue id. Donec quis velit sed massa iaculis aliquet. Quisque convallis molestie urna tincidunt iaculis. Maecenas volutpat vel sem in eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sodales feugiat arcu. Fusce aliquet varius justo, ac aliquet mi faucibus vitae."}/>
                <ExperienceItem title={"Live Competition (2016-2017)"} textRight={true}
                                body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh nulla, ornare ac turpis non, consectetur mollis lacus. Praesent at consectetur sem. Pellentesque efficitur rhoncus lorem, in varius velit congue id. Donec quis velit sed massa iaculis aliquet. Quisque convallis molestie urna tincidunt iaculis. Maecenas volutpat vel sem in eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sodales feugiat arcu. Fusce aliquet varius justo, ac aliquet mi faucibus vitae."}/>
                <ExperienceItem title={"Cofax Buisiness Systems (2016-2017)"} textRight={false}
                                body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh nulla, ornare ac turpis non, consectetur mollis lacus. Praesent at consectetur sem. Pellentesque efficitur rhoncus lorem, in varius velit congue id. Donec quis velit sed massa iaculis aliquet. Quisque convallis molestie urna tincidunt iaculis. Maecenas volutpat vel sem in eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sodales feugiat arcu. Fusce aliquet varius justo, ac aliquet mi faucibus vitae."}/>

            </Section>
        );
    }
}

export default Experience;