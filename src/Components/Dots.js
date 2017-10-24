import React, {Component} from 'react';

class Dots extends Component {
    render() {
        const dots = [];
        for (let i=0; i < this.props.number; i++) {
            const dotClassNames = "dot " + ((this.props.active === i) ? "active": "");
            dots[i] = <div key={i} className={dotClassNames} onClick={() => {this.props.handleCLick(i)}}/>;
        }
        return (
            <div className={"nav-dots"} id={this.props.id}>
                {dots}
            </div>
        );
    }
}

export default Dots;