import React, { Component } from "react";
import "./styles/TextOverlay.css";

export class TextOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            fade: false,
            ready: true,
            loadBefore: false
        }
    }

    componentDidMount = () => {
        let newState = {...this.state};
        
        if(this.props.fade === true){
            newState.fade = true;
        }
        newState.content = this.props.text;

        this.setState(newState);
    }
    addTransitionEndListener = () => {
        const transtion = document.querySelector('.last-char');
        transtion.addEventListener('animationend', () => {
            console.log('Animation ended');
            this.setState({ loadBefore: true });
        });
    }

    render = () => {
        return (
            <section id="Text-Container" className={`Animated ${this.state.ready ? "show-number" : ""} ${this.state.loadBefore ? "show-pseudo" : "hide-psuedo"} ${this.state.faded ? "invisible" : "visible"}`}>
                <div className="mask-number">
                    <div className="mask-back">{this.props.text}</div>
                    <div className="mask-front">
                        <div data-content={this.state.content} className="mask-overlay">{this.props.text}</div>
                    </div>
                </div>
            </section>
        );
    }

}