import React, { Component } from 'react';
import AnimatedText from "../../components/AnimatedText/index";
import Arrow from "../../components/Arrow/index";
import Flexbox from "../../components/Flexbox/index";
import FlexContainer from "../../components/FlexContainer/index";
import {Name} from "../../components/Customs/index";
import Parallax from "../../components/Parallax/index";
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
                {this.props.children}
                <Name />
                <Parallax />
                
            </div>

        );
    }
}

export default AboutContent;