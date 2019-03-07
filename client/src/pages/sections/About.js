import React, {Component} from 'react';
import AnimatedText from "../../components/AnimatedText/index";
import FlexContainer from "../../components/FlexContainer/index";
import OverlayBlock from "../../components/OverlayBlock/index";
import Slider from "../../components/Slider/index";
import SVGIcon from "../../components/SVGIcon/index";
import "./section-styles/About.css";

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            hidden: true
        }
    }
    render = () => {
        return(
            <div>
                <FlexContainer>


                </FlexContainer>
            </div>
        );
    }
}

export default About;
