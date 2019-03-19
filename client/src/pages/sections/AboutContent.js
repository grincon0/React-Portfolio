import React, { Component } from 'react';
import AnimatedText from "../../components/AnimatedText/index";
import Arrow from "../../components/Arrow/index";
import Flexbox from "../../components/Flexbox/index";
import FlexContainer from "../../components/FlexContainer/index";
import "./section-styles/About.css";

class AboutContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            collapseMenu: false
        }
    }
    componentDidMount = () => {
        this.renderChecker = setInterval(() => {
            if (this.props.canRender) {
                this.tester();
                clearInterval(this.renderChecker);
            }
            console.log('running');
        }, 400);
    }
    tester = () => {
        this.setState({ hidden: false })
    }
    handleThing = () => {
        if (!this.state.hidden) {
            return (
                <AnimatedText
                    text="Testing 2nd Div"
                    anim="slide-right-quick"
                    delay={1000}
                />
            );
        }
    }

    render = () => {
        let thing = this.handleThing();
        return (
            <div>
                {thing}
                {this.props.children}
            </div>

        );
    }
}

export default AboutContent;