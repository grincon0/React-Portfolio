import React, { Component } from 'react';
import AnimatedText from "../../components/AnimatedText/index";
import Flexbox from "../../components/Flexbox/index";
import FlexContainer from "../../components/FlexContainer/index";
import OverlayBlock from "../../components/OverlayBlock/index";
import Slider from "../../components/Slider/index";
import SVGIcon from "../../components/SVGIcon/index";
import "./section-styles/About.css";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
    }
    render = () => {
        return (
            <div>
                <FlexContainer>
                    <Flexbox>
                        <AnimatedText
                            text="Testing New Div"
                            anim="slide-right-quick"
                        />
                    </Flexbox>
                    <Flexbox>
                        <AnimatedText
                            text="Testing 2nd Div"
                            anim="slide-right-quick"
                            delay={600}
                        />
                    </Flexbox>
                </FlexContainer>
            </div>
        );
    }
}

export default About;
