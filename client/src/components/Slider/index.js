import React, {Component} from "react";
import GlobalStates from '../../assets/js/global';
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
    componentDidUpdate = () => {
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
            }
        }, 175);
    }
    resetStates = () => {
        this.stateTimeout = setTimeout(() => {
            this.setState({animate : false});
            GlobalStates.setAnimate(false);
            
        }, 2200);
    }
    render = () => {
        return (
            <div>
                <div style={{backgroundColor:GlobalStates.colorA}} className={`begins ${this.state.animate ? "rollout" : "roll-in"}`}>
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


