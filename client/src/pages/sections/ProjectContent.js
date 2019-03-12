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
            placeholder: '',
            loaded:false
        }
    }
     componentDidMount = () => {


    } 
    render = () => {
      /*   if(!this.state.loaded){
            this.setState({loaded: true});
        }
         */

        return (
            <section id="PROJECTS">
                <FlexContainer
                    direction="row"
                    justify="start"
                >
                    <FlexBox
                    id="Items"
                        classes="proj-box"
                    >
                        <OverlayBlock
                            classes={`pet-perfect align-fix `}
                            showClass="overlay-end"
                            color="coral"
                            appType="Website"
                            headline="Pet-Perfect."
                            text="The perfect site for the passionate pet owner"

                        />
                        <OverlayBlock
                            classes={`random-photo align-fix`}
                            showClass="overlay-end"
                            color="violet"
                            delay={100}
                        />
                        <OverlayBlock
                            classes={`random-photo-2 align-fix`}
                            showClass="overlay-end"
                            color="chili"
                            delay={200}

                        />
                        <OverlayBlock
                            classes={`random-photo-2 align-fix`}
                            showClass="overlay-end"
                            color="quetzal"
                            delay={300}
                        />
                        <OverlayBlock
                            classes={`random-photo align-fix`}
                            showClass="overlay-end"
                            color="greenery"
                            delay={400}
                        />
                        <OverlayBlock
                            classes={`random-photo-3 align-fix`}
                            showClass="overlay-end"
                            color="snorkel"
                            delay={500}
                        />
                        <OverlayBlock
                            classes={`random-photo-2 align-fix`}
                            showClass="overlay-end"
                            color="buttercup"
                            delay={600}
                        />
                        <OverlayBlock
                            classes={`random-photo align-fix`}
                            showClass="overlay-end"
                            color="eclipse"
                            delay={700}
                        />
                        <OverlayBlock
                            classes={`random-photo-3 align-fix`}
                            showClass="overlay-end"
                            color="meadow"
                            delay={800}
                        />

                    </FlexBox>

                </FlexContainer>
            </section>
        );
    }

}

export default ProjectContent;


