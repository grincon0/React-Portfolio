import React, { Component } from "react";
import AnimatedText from "../../components/AnimatedText/index";
import Form from "../../components/Form/index";
import FlexContainer from "../../components/FlexContainer";


class Contact extends Component {
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
                <Form/>
            </section>
        );
    }

}

export default Contact;