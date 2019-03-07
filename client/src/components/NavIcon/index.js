import React, { Component } from "react";
import "./style.css";

class NavIcon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            canReset: false,
            transform: false,
            hovering:false

        }
    }
    componentDidMount = () => {
        if (this.state.canReset) {
            this.handleTransformReset();
        }
    }
    componentWillUnmount = () => {
        if(this.state.canReset){
            clearTimeout(this.resetTimer);
        }
        
    }
    handleStateChange = () => {
        this.state.transform ? this.setState({ canReset: false, transform: false }) : this.setState({ canReset: true, transform: true });
    }
    handleTransformReset = () => {
        
        //resets state after transition completes
        this.resetTimer = setTimeout(() => {
            this.setState({
                canReset: false,
                transform: false
            })
        }, 1001);
    }
    handleParentHover = () => {
        if(!this.state.hovering){
            let newState = {...this.state};
            newState.hovering = true;
            this.setState(newState);
        }
    }
    removeParentHover = () => {
        if(this.state.hovering){
            let newState = {...this.state};
            newState.hovering = false;
            this.setState(newState);
        }
    }
    render = () => {
        return (
            <div id="burger-icon" className={this.state.hovering ? "hover-burger": ""} onClick={this.handleStateChange} onMouseOver={this.handleParentHover} onMouseOut={this.removeParentHover}>
                <i id="i-first" className={this.state.transform ? "" : ""}></i>
                <i id="i-second" className={this.state.transform ? " " : ""}></i>
                <i id="i-third" className={this.state.transform ? "" : ""}></i>
            </div>
        )
    }
}

export default NavIcon;