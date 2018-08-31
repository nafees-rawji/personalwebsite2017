import React, {Component} from 'react';

class PortfolioOverview extends Component {
    render() {
        const body =
            <div className={"portfolio-content"}>
                <h1 className={"portfolio-title"}>{this.props.title}</h1>
                <p className={"portfolio-overview-body"}>{this.props.body}</p>
                <a className="portfolio-link" href={this.props.url}>Link To: {this.props.title}</a>
            </div>;
        return (
            <div className={"portfolio-container"}>
                <div className={"portfolio-overview"} id={this.props.id}>
                    <img className={"portfolio-overview-image"} src={this.props.img} alt={this.props.title}/>
                    {body}
                </div>
            </div>
        );
    }
}

export default PortfolioOverview;
