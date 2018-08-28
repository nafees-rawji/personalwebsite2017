import React, {Component} from 'react';


class ExperienceItem extends Component {
    render() {
        return (
           <div className={'timeline-item'}>
               <div className={'timeline-thumbnail'}>
                   <img src={this.props.img}/>
               </div>
               <div className={'timeline-body'}>
                   <h4>{this.props.title}</h4>
                   <p>{this.props.body}</p>
               </div>
           </div>
        );
    }
}

export default ExperienceItem;
