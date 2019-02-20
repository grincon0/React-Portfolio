import React, { Component } from "react";
import "./style.css";


class AnimatedText extends Component {
    constructor(props){
        super(props);
        this.state = {
            animation: '',
            animationPlay: false
        }
    }

    componentDidMount = () => {
        this.timerID = setTimeout(() => {
            this.handleGetAnimation();
        }, 4000);

    }
    componentWillUnmount = () => {
        clearTimeout(this.timerID);
    }
    handleGetAnimation = () => {
        if(this.props.anim === "slide-right"){
                this.setState({
                    animation: this.props.anim,
                    animationPlay: true
                });
        }else{
            console.log('no');
        }
    }
    render = () => {
        return (
            <div>
                <p className={"default-text " + (this.state.animation ? this.state.animation : "")}>{this.props.text}</p>
            </div>
        );
    }

}

export default AnimatedText;