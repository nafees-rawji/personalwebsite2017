import React, {Component} from 'react';

class ExperienceItem extends Component {
    render() {
        let classNames = "experience-item " + ((this.props.textRight) ? "right": "");

        return (
           <div className={classNames}>
               <h3 className="experience-title">{this.props.title}</h3>
               <p  className="experience-body">{this.props.body}</p>
           </div>
        );
    }
}

export default ExperienceItem;