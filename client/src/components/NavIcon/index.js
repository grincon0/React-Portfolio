import React, { Component } from "react";
import "./style.css";

class NavIcon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            canReset: false,
            transform: false,
            hovering: false,
            clicked: false,
            morphX: false
        }
    }
    componentDidUpdate = () => {

    }
    componentWillUnmount = () => {
        if (this.state.canReset) {
            clearTimeout(this.resetTimer);
            clearTimeout(this.exTimer);
        }
    }
    cancelAnim = () => {
        let resetState = { ...this.state };
        resetState.transform = false;
        resetState.clicked = false;
        resetState.morphX = false;

        clearTimeout(this.resetTimer);
        clearTimeout(this.exTimer);
        console.log('anim canceled');
        this.setState(resetState);
    }
    handleStateChange = () => {
        console.log(this.state.clicked);
        if (this.state.clicked) {
            this.cancelAnim();
        }
        this.state.transform ? this.setState({ canReset: false, transform: false, clicked: false }) : this.setState({ canReset: true, transform: true, clicked: true });
        this.exifyBurger();
    }
    handleTransformReset = () => {
        if (this.state.clicked) {
            clearTimeout(this.exTimer);
            this.setState({
                canReset: false,
                transform: false,
                morphX: false,
                clicked: false
            });
        }

    }
    handleParentHover = () => {
        if (!this.state.hovering) {
            let newState = { ...this.state };
            newState.hovering = true;
            this.setState(newState);
        }
    }
    handleSetTimeout = (delay, ...args) => {
        this.resetTimer = setTimeout(() => {
            this.setState(args);
        }, (0 + delay));
    }
    removeParentHover = () => {
        if (this.state.hovering) {
            let newState = { ...this.state };
            newState.hovering = false;
            this.setState(newState);
        }
    }
    exifyBurger = () => {
        if (!this.state.morphX ) {
            this.exTimer = setTimeout(() => {
                if(this.state.transform){
                    let newState = { ...this.state };
                    newState.morphX = true;
                    this.setState(newState);
                }
            }, 901);

        }
    }

    render = () => {
        return (
            <div id="burger-icon"
                className={
                    `${this.state.hovering ? "hover-burger" : ""} ${this.state.transform ? "rotate-in" : ""} ${this.state.morphX ? "x-out" : ""} `}
                onClick={this.handleStateChange}
                onMouseOver={this.handleParentHover}
                onMouseOut={this.removeParentHover}>
                <i id="i-first" className={this.state.transform ? "" : ""}></i>
                <i id="i-second" className={this.state.transform ? " " : ""}></i>
                <i id="i-third" className={this.state.transform ? "" : ""}></i>
            </div>
        )
    }
}

export default NavIcon;