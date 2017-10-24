import React, {Component} from 'react';

class FooterItem extends Component {
    constructor() {
        super();
        this.state = {
            hovered : false
        }
    }

    onEnter() {
        this.setState({
            hovered:true
        });
    }

    onLeave() {
        this.setState({
            hovered:false
        });
    }

    render() {
        const img = (this.state.hovered) ? this.props.blueImg : this.props.img;
        return (
            <a href={this.props.src} onMouseEnter={this.onEnter.bind(this)}
               onMouseLeave={this.onLeave.bind(this)}>
                <img src={img} alt={this.props.alt}/>
            </a>
        );
    }
}

export default FooterItem;