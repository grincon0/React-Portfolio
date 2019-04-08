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
                    <div className={`firstname-overlay ${this.state.animate ? "run-anim-first" : ""} ${this.props.transition ? "page-is-changing" : ""} ${this.props.classes ? this.props.classes : ""}`}>
                        <TextOverlay
                            text="G"
                            faded={false}
                            animate={this.state.animate}
                            transition={this.props.transition}
                        />
                        <TextOverlay
                            text="e"
                            faded={false}
                            animate={this.state.animate}
                            transition={this.props.transition}
                        />
                        <TextOverlay
                            text="o"
                            faded={false}
                            animate={this.state.animate}
                            transition={this.props.transition}
                        />
                        <TextOverlay
                            text="r"
                            faded={false}
                            animate={this.state.animate}
                            transition={this.props.transition}
                        />
                        <TextOverlay
                            text="g"
                            faded={false}
                            animate={this.state.animate}
                            transition={this.props.transition}
                        />
                        <TextOverlay
                            text="e"
                            faded={false}
                            animate={this.state.animate}
                            classes={`firstname-end`}
                            transition={this.props.transition}
                        />
                        <div className="spacefix"></div>

                    </div>
                </div>
            </Flexbox>
        )
    }

}