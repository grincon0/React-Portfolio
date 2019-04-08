import React, { Component } from "react";
import AnimatedText from "../../components/AnimatedText/index";
import Form from "../../components/Form/index";
import FlexContainer from "../../components/FlexContainer";
import { SpanGenerator } from "../../components/Customs/index";
import Parallax from "../../components/Parallax/index";
import "./section-styles/ContactContent.css";
import "./section-styles/ProjectContent.css";
import SVGIcon from "../../components/SVGIcon/index";

const spanBlocks = [{
    from: 8,
    to: 20,
    classes: "highlight-2",
    completed: false
}, {
    from: 30,
    to: 38,
    classes: "highlight-1",
    completed: false,
}, {
    from: 49,
    to: 52,
    classes: "highlight-3",
    completed: false,
}];

class ContactContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            transition: false
        }
    }
    componentDidMount = () => {
        this.animateTimer = setTimeout(() => {
            if (this.state.animate === false) {
                this.setState({ animate: true });
            }
        }, 100);
    }
    componentWillUnmount = () => {
        console.log(spanBlocks);
        clearTimeout(this.animateTimer);
    }
    transitionChecker = () => {
        this.transitionInterval = setInterval(() => {
            if (this.props.transition === true) {
                let newState = { ...this.state };
                newState.transition = true;
                this.setState(newState);
                console.log(newState);
                clearInterval(this.transitionInterval);

            }

        }, 300);
    }
    addAnimationEndLisenter = (query, type, which) => {
        let element = document.querySelector(query);

        element.addEventListener(`${type}end`, () => {
            console.log(`${type} ended`);

            let newState = { ...this.state };

            switch (which) {
                case 'first':
                    newState.headlineAnimationCompleted.first = true;
                    this.setState(newState);
                    break;
                case 'second':
                    newState.headlineAnimationCompleted.second = true;
                    this.setState(newState);
                    break;
                case 'name':
                    newState.headlineAnimationCompleted.name = true;
                    this.setState(newState);
                    break;
                default:

                    break;
            }
        });
    }
    render = () => {
        return (
            <section id="CONTACT">
                <FlexContainer
                    id={`parallax-container`}
                    direction="column"
                    justify="center"
                    classes="align-fix">
                    <div className="testi">
                        <div className={`contact-title-div ${this.state.animate ? "run-anim-first" : ""} ${this.props.transition ? "page-is-changing" : ""}`}>
                            <h1 className="contact-title">Contact</h1>
                            <div className="contact-title-front">
                                <h1 data-content="Contact" className="contact-title-overlay">Contact</h1>

                            </div>

                        </div>
                    </div>
                    <div >
                        <SpanGenerator
                            text="Want to work together? Need a developer for your team? Let's talk."
                            blocks={spanBlocks}
                            transition={this.props.transition}
                        />

                    </div>
                    <Form
                        transition={this.props.transition}
                    />
                    <Parallax />

                </FlexContainer>

            </section>
        );
    }

}

export default ContactContent;