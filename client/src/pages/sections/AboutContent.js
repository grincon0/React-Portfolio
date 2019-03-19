import React, { Component } from 'react';
import AnimatedText from "../../components/AnimatedText/index";
import Arrow from "../../components/Arrow/index";
import Flexbox from "../../components/Flexbox/index";
import FlexContainer from "../../components/FlexContainer/index";
import {Name} from "../../components/Customs/index";
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
                <Name />
               
                {this.props.children}
            </div>

        );
    }
}

export default AboutContent;