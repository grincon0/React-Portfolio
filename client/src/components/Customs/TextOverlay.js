import React, { Component } from "react";
import "./styles/TextOverlay.css";

export class TextOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            ready: false,
            loadBefore: false
        }
    }

    componentDidMount = () => {
        /*     setTimeout(() =>{ */
        this.setState({ 
            content: this.props.text,
            ready: true 
        });
        /* this.addTransitionEndListener(); */
        /*      },600); */

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
            <section id="Text-Cont" className={`Animated ${this.state.ready ? "show-number" : ""} ${this.state.loadBefore ? "show-pseudo" : "hide-psuedo"}`}>
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