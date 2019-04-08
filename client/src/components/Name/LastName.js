import React, { Component } from "react";
import Flexbox from "../Flexbox/index";
import { TextOverlay } from "../Customs/index";

export class LastName extends Component {
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
                <div className="lastname-wrapper">
                    <div className={`lastname-overlay ${this.state.animate ? "run-anim-first" : ""} ${this.props.transition ? "page-is-changing" : ""}`}>
                        
                        <TextOverlay
                            text="R"
                            faded={false}
                            animate={this.state.animate}
                            transition={this.props.transition}
                        />
                        <TextOverlay
                            text="i"
                            faded={false}
                            animate={this.state.animate}
                            transition={this.props.transition}
                        />
                        <TextOverlay
                            text="n"
                            faded={false}
                            animate={this.state.animate}
                            transition={this.props.transition}
                        />
                        <TextOverlay
                            text="c"
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
                            text="n"
                            faded={false}
                            animate={this.state.animate}
                            transition={this.props.transition}
                        />
                        
                    </div>
                </div>
            </Flexbox>
        )
    }

}