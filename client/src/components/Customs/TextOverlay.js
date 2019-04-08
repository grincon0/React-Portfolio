import React, { Component } from "react";
import "./styles/TextOverlay.css";

export class TextOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            content: "",
            fade: false,
            ready: true,
            loadBefore: false,
            forAbout: false,
        }
    }

    componentDidMount = () => {
        let newState = {...this.state};
        
        if(this.props.fade === true){
            newState.fade = true;
        }

        if(this.props.forAbout === true){
            newState.forAbout = true;
        }
        newState.content = this.props.text;

        this.setState(newState);

        this.checkAnimation();
    }
    addTransitionEndListener = () => {
        const transtion = document.querySelector('.last-char');
        transtion.addEventListener('animationend', () => {
            console.log('Animation ended');
            this.setState({ loadBefore: true });
        });
    }
    checkAnimation = () => {
        this.animateInterval = setInterval(() => {
            if (this.props.animate === true) {
                this.setState({ animate: true });
                console.log('done');
                clearInterval(this.animateInterval);
            }

        }, 300);
    }
    render = () => {
        return (
            <section id="Text-Container" className={`Animated ${this.state.ready ? "show-number" : ""} ${this.state.animate ? "reveal-text" : ""} ${this.props.transition ? "page-is-changing" : ""}`}>
                <div className="mask-number">
                    <h1 className="mask-back">{this.props.text}</h1>
                    <div className="mask-front">
                        <h1 data-content={this.state.content} className="mask-overlay">{this.props.text}</h1>
                    </div>
                </div>
            </section>
        );
    }

}