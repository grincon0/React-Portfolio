import React, { Component } from "react";
import "./styles/Button3D.css";

export class Button3D extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: false
        }
    }

    render = () => {
        return (
            <div type="submit" className="scene-button">
                <div onClick={this.props.onClick} className="cube">
                    <span className="side top">Sent!</span>
                    <span className="side front">Submit</span>
                </div>
            </div>
        )

    }
} 