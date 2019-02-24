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
                <img src="https://picsum.photos/200/300" alt="eee"></img>
                <div className="overlay right"></div>
            </div>

        );
    }
}

export default OverlayBlock;
