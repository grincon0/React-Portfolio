import React, { Component } from 'react';
import AnimatedText from "../AnimatedText/index";
import SVGArrow from "../../assets/SVG/Icons/right-arrow-2.svg";
import "./style.css";

class Arrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: '',
            animate: false,
            hover: false
        }
    }
    handleHover = () => {
        let newState = { ...this.state };
        newState.hover = true;
        this.setState(newState);

    }
    handleOut = () => {
        let newState = { ...this.state };
        newState.hover = false;
        this.setState(newState);
    }
    render = () => {


        return (
            <div id="arrow-box" className={`${this.state.hover ? "hover-box" : ""} ${this.props.transition ? "page-is-changing" : ""}`} onMouseOver={this.handleHover} onMouseOut={this.handleOut} onClick={this.props.onClick}>
                <div id="arrow-head" className={`starting-point ${this.state.hover ? "hover-arrow" : ""} `}>
                    <img src={SVGArrow} alt="arrow" />
                </div>

                <i id="arrow-bar" className={`${this.state.hover && !this.props.transition ? "hover-bar-out" : "hover-bar-in"}`}></i>
                <AnimatedText
                    classes="show-trans fix-test "
                    transform={true}
                    text={this.props.arrowText}
                    hover={this.state.hover}
                    hoverInClass="left-trans-in"
                    hoverOutClass="left-trans-out"
                />
                {this.props.children}
            </div>
           


        );
    }
}

export default Arrow;