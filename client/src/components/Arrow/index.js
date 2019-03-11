import React, { Component } from 'react';
import SVGArrow from "../../assets/SVG/Icons/right-arrow-2.svg";
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
        let newState = {...this.state};
        newState.hover = true;
        this.setState(newState);

    }
    handleOut = () => {
        let newState = {...this.state};
        newState.hover = false;
        this.setState(newState);
    }
    render = () => {
        return (
            <div id="arrow-box" className={`${this.state.hover ? "hover-box" : ""}`} onMouseOver={this.handleHover} onMouseOut={this.handleOut}>
                <div id="arrow-head" className={`starting-point ${this.state.hover ? "hover-arrow" : ""} `}>
                    <img src={SVGArrow} alt="arrow" />
                </div>

                <i id="arrow-bar" className={`${this.state.hover ? "hover-bar-out" : "hover-bar-in"}`}></i>
            </div>
        );
    }
}

export default Arrow;