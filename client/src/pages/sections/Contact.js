import React, {Component} from "react";
import AnimatedText from "../../components/AnimatedText/index";
import Form from "../../../components/Form/index";
import "./style.css";

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            test: "test"
        }
    }
    componentDidMount = () => {

    }

    render = () => {
        return(
            <section id="CONTACT">
                <AnimatedText />
                <AnimatedText />
                <AnimatedText />
                <Form 
                
                
                />
            </section>
        );
    }

}

export default Contact;