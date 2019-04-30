import React, {Component} from "react";
import GlobalStates from '../Global/index';
import "./style.css"

export default class Slider extends Component{
    constructor(){
        super();
        this.state = {
            animate: false
        }
    }
    componentDidMount = () => {
        this.checker();
        
    }

    componentWillUnmount = () => {
        clearInterval(this.globalInterval);
    }
    checker = () => {
        this.globalInterval = setInterval(() => {
            if(GlobalStates.slider === true && this.state.animate === false){
                this.setState({animate : true});
                this.resetStates();
                clearInterval(this.globalInterval);
                console.log(GlobalStates.slider);
            }
        }, 175);
    }
    resetStates = () => {
        this.stateTimeout = setTimeout(() => {
            this.setState({animate : false});
            GlobalStates.setAnimate(false);
            this.checker();
            clearTimeout(this.stateTimeout);
            
        }, 2200);
    }
    render = () => {
        return (
            <div>
                <div style={{backgroundColor: GlobalStates.colorA}} className={`begins ${this.state.animate ? "rollout show-column" : "roll-in"}`}>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                </div>
            </div>
        );
    }


}


