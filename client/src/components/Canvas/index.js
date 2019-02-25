import React, { Component } from "react";
import "./style.css";

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        }
    }
    componentDidMount = () => {
        this.checkWindowSizeChange();
    }
    checkWindowSizeChange = () => {
        setInterval(()=> {
            if(this.state.width !== window.innerWidth){
                console.log(window.innerWidth);
                console.log('state', this.state.width);
                let newState = {...this.state}
                newState.width = parseInt(window.innerWidth);
                this.setState(newState);

            }else{
                return;
            }
        }, 350);
    }
    render = () => {
        return (
            <div className="canvasBlock" style={{width:`${this.state.width}px`}} {...this.props}>
                <canvas id="canvas" style={{width:`${this.state.width}px`}} >
                </canvas>
                {this.props.children}
            </div>
        );
    }
}

export default Canvas;