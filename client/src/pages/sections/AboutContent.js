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

    render = () => {
        return (
            <div className={``}>
                <AnimatedText 
                text="George Rincon"
                
                classes="blur-short"
                />
               
                {this.props.children}
            </div>

        );
    }
}

export default AboutContent;