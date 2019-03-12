import React, { Component } from "react";
import "./style.css";

class OverlayBlock extends Component{
    constructor(props){
        super(props);
        this.state ={
            test:"text",
            show:false
        }
    }
    componentDidMount = () => {
        this.timerTransform = setTimeout(()=> {
            this.setState({show:true});
        }, 500 + (this.props.delay || 0));
    }
    componentWillUnmount = () => {
        clearTimeout(this.timerTransform);
    }
    render = () => {
        return(
            <div className="parent-box">
                <div className={`overlay-content o-full-size overlay-start ${this.props.classes ? this.props.classes : ""} ${this.state.show? this.props.showClass : ""}`}></div>
                <div className={`overlay block-top ${this.props.color ? this.props.color : ""}`}></div>
            </div>

        );
    }
}

export default OverlayBlock;
