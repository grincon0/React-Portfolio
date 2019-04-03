import React, { Component } from "react";
import "./style.css";

export class LargeOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "text",
            show: false,
            hover: false
        }
    }
    componentDidMount = () => {
        this.timerTransform = setTimeout(() => {
            this.setState({ show: true });
        }, 500 + (this.props.delay || 0));
    }
    componentWillUnmount = () => {
        clearTimeout(this.timerTransform);
    }
    handleHover = () => {
        this.setState({ hover: true });
    }
    handleOut = () => {
        this.setState({ hover: false });
    }
    render = () => {

        return (
            <div id="overlay-parent" className={`parent-box ${this.state.hover ? "show-block-text" : ""}`} onMouseOver={this.handleHover} onMouseOut={this.handleOut}>


                <div className={`overlay-content o-full-size overlay-start ${this.props.classes ? this.props.classes : ""} ${this.state.show ? this.props.showClass : ""}`}>

                </div>
                <div id="content" className={`overlay block-top ${this.props.color ? this.props.color : ""} `}>

                    <div id="text-box" className="text-box-cls text-box-start">
                    </div>
                </div>
                <div id="overlay-info" className={`pos-start headline ${this.state.hover ? "move-headline" : ""} ${this.state.show ? "pos-end pos-show-text" : ""}`}>
                    <p className={`start-text-color ${this.state.hover ? this.props.pColorChange : ""} ${this.state.show ? "pos-show-text" : ""}`}>{this.props.appType}</p>
                    <h1 className={`start-text-color ${this.state.hover ? this.props.h1ColorChange : ""} `}>{this.props.headline}</h1>
                    <h2 className={`hidden-text overlay-subtitle ${this.state.hover ? "show-text-o" : ""} ${this.props.h2ColorChange}`}>{this.props.text}</h2>

                </div>
            </div>

        );
    }
}


