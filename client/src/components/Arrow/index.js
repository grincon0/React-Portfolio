import React, { Component } from 'react';
import Arrow from "../../assets/SVG/Icons/right-arrow-2.svg";
import "./style.css";

class Arrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: '',
            animate: false,
            hover: false,
        }
    }
    handleHover = () => {

    }
    handleOut = () => {

    }
    render = () => {
        return (
            <div id="arrow-box" className={`${this.state.hover ? "" : ""}`} onMouseOver={this.handleHover} onMouseOut={this.handleOut}>
                <div id="arrow-head">
                    <i></i>
                    <i></i>
                </div>

                <i id="arrow-bar"></i>
            </div>
        );
    }
}

export default Arrow;