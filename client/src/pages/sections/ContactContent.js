import React, { Component } from "react";
import AnimatedText from "../../components/AnimatedText/index";
import Form from "../../components/Form/index";
import FlexContainer from "../../components/FlexContainer";
import {SpanGenerator} from "../../components/Customs/index";
import "./section-styles/ContactContent.css";
import SVGIcon from "../../components/SVGIcon/index";


class ContactContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "test"
        }
    }
    componentDidMount = () => {

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
                                <h1 data-content="Contact"className="contact-title-overlay">Contact</h1>

                            </div>

                        </div>
                    </div>
                    <div>
                        <SpanGenerator 
                            text="Want to work together? Need a developer for your team? Let's talk."
                            blocks={{
                                from:9,
                                to:21,
                                classes:"highlight-2"
                            }}
                        />
                        {/* <p className="contact-subtitle">Want to <span className="highlight-2">work together</span>? Need a <span className="highlight-1">developer</span> for your <span className="highlight-3">team</span>? Let's talk.</p> */}
                    </div>
                    <Form />

                </FlexContainer>

            </section>
        );
    }

}

export default ContactContent;