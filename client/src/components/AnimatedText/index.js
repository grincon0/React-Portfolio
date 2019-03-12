import React, { Component } from "react";
import "./style.css";


class AnimatedText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: '',
            animationPlay: false,
            transform: false,
            hover: false
        }
    }

    componentDidMount = () => {
        if(!this.props.transform){
            this.timerID = setTimeout(() => {
                this.handleGetAnimation();
            }, 1000 + (this.props.delay || 0));
        }
    }
    componentWillUnmount = () => {
        clearTimeout(this.timerID);
    }
    handleGetAnimation = () => {
        /*         if(this.props.anim === "slide-right"){
                        this.setState({
                            animation: this.props.anim,
                            animationPlay: true
                        });
                }else{
                    console.log('no');
                } */
        switch (this.props.anim) {
            case "slide-right":
                this.setState({
                    animation: this.props.anim,
                    animationPlay: true
                });
                break;
            case "slide-left":
                this.setState({
                    animation: this.props.anim,
                    animationPlay: true
                });
                break;
            case "slide-right-quick":
                this.setState({
                    animation: this.props.anim,
                    animationPlay: true
                });
                break;

            case "slide-left-quick":
                this.setState({
                    animation: this.props.anim,
                    animationPlay: true
                });
                break;

            default:
                break;
        }
    }
    render = () => {
        return (
            <div>
                <p className={"default-text " + (this.state.animation ? this.state.animation : "") + " " +  this.props.classes + (this.props.hover ? this.props.hoverInClass : this.props.hoverOutClass)}>{this.props.text}</p>
            </div>
        );
    }

}

export default AnimatedText;