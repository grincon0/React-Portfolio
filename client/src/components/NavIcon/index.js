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
            
        
    }
    componentWillUnmount = () => {
        if(this.state.canReset){
            clearTimeout(this.resetTimer);
        }
        
    }
    handleStateChange = () => {
        this.state.transform ? this.setState({ canReset: false, transform: false }) : this.setState({ canReset: true, transform: true });
        this.handleTransformReset();
    }
    handleTransformReset = () => {
        
        //resets state after transition completes
        this.resetTimer = setTimeout(() => {
            this.setState({
                canReset: false,
                transform: false
            })
        }, 901);
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
            <div id="burger-icon" 
            className={`${this.state.hovering ? "hover-burger": ""} ${this.state.transform ? "rotate-in" : ""}`}
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