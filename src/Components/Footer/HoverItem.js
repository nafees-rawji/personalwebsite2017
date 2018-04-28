import React, {Component} from 'react';

class HoverItem extends Component {
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
                <img id={this.props.id} src={img} alt={this.props.alt}/>
            </a>
        );
    }
}

export default HoverItem;