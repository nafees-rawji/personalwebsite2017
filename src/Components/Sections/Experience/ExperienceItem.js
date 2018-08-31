import React, {Component} from 'react';


class ExperienceItem extends Component {
    render() {
        return (
           <div className={`timeline-item ${this.props.className}`}>
               <div className={'timeline-thumbnail'}>
                   <img src={this.props.img} alt={this.props.title}/>
               </div>
               {(this.props.first) ? <div className={'click-icon'}>
                   <div className={'click-icon-click'}/>
               </div>: null}
               <div className={'timeline-body'}>
                   <h4>{this.props.title}</h4>
                   <p>{this.props.body}</p>
               </div>
           </div>
        );
    }
}

export default ExperienceItem;
