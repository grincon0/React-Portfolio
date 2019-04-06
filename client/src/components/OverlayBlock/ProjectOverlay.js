import React, { Component } from "react";
import Flexbox from "../Flexbox/index";
import "./styles/ProjectOverlay.css";

export class ProjectOverlay extends Component {
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

            <div id={this.props.blockID} className={`item-container ${this.state.show ? "move-in" : ""}`}>
                <div className="project-box">
                    
                    <div className={`project-mask`}>
                    <h1>{this.props.name}</h1>
                    </div>
                </div>
            </div>

        )
    }
}