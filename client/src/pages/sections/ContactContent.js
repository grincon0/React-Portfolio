import React, { Component } from "react";
import AnimatedText from "../../components/AnimatedText/index";
import Form from "../../components/Form/index";
import FlexContainer from "../../components/FlexContainer";
import { SpanGenerator } from "../../components/Customs/index";

import "./section-styles/ContactContent.css";
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
            test: "test"
        }
    }
    componentDidMount = () => {

    }
    transitionChecker = () => {
        this.transitionInterval = setInterval(() => {
            if (this.props.transition === true) {
                let newState = { ...this.state };
                newState.pageTransition = true;
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
                    direction="column"
                    justify="center"
                    classes="align-fix">
                    <div className="testi">
                        <div className="contact-title-div">
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
                        />

                    </div>
                    <Form />

                </FlexContainer>

            </section>
        );
    }

}

export default ContactContent;