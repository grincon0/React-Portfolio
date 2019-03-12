import React, { Component } from "react";
import AnimatedText from "../../components/AnimatedText/index";
import Arrow from "../../components/Arrow/index";
import OverlayBlock from "../../components/OverlayBlock/index";
import FlexBox from "../../components/Flexbox/index";
import FlexContainer from "../../components/FlexContainer/index";
import "./section-styles/projectContent.css";

class ProjectContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: ''
        }
    }

    render = () => {
        return (
            <section id="PROJECTS">
                <FlexContainer
                    direction="row"
                    justify="start"
                    
                >
                    <FlexBox
                    classes="proj-box"
                    >
                        <OverlayBlock
                        classes="pet-perfect"
                        />
                        <OverlayBlock />
                        <OverlayBlock />
                        <OverlayBlock />

                    </FlexBox>

                </FlexContainer>
            </section>
        );
    }

}

export default ProjectContent;


