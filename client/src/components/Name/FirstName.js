import React, { Component } from "react";
import Flexbox from "../Flexbox/index";
import { TextOverlay } from "../Customs/index";
import "./styles/style.css";


export class FirstName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
        }
    }
    componentDidMount = () => {
        this.checkAnimation();
    }
    componentDidUpdate = () => {

    }
    componentWillUnmount = () => {

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
            <Flexbox>
                <div className="firstname-wrapper">
                    <div className={`firstname-overlay ${this.state.animate ? "run-anim-first" : ""}`}>
                        <TextOverlay
                            text="G"
                            faded={false}
                            animate={this.state.animate}
                        />
                        <TextOverlay
                            text="e"
                            faded={false}
                            animate={this.state.animate}
                        />
                        <TextOverlay
                            text="o"
                            faded={false}
                            animate={this.state.animate}
                        />
                        <TextOverlay
                            text="r"
                            faded={false}
                            animate={this.state.animate}
                        />
                        <TextOverlay
                            text="g"
                            faded={false}
                            animate={this.state.animate}
                        />
                        <TextOverlay
                            text="e"
                            faded={false}
                            animate={this.state.animate}
                        />
                    </div>
                </div>
            </Flexbox>
        )
    }

}