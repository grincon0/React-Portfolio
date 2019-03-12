import React, { Component } from "react";
import "./style.css";

class OverlayBlock extends Component{
    constructor(props){
        super(props);
        this.state ={
            test:"text"
        }
    }

    render = () => {
        return(
            <div className="parent-box">
                <div className={`overlay-content o-full-size ${this.props.classes ? this.props.classes : ""}`}></div>
                <div className={`overlay block-top ${this.props.color ? this.props.color : ""}`}></div>
            </div>

        );
    }
}

export default OverlayBlock;
