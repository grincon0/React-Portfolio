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
            loaded: false
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
                            classes={`random-photo align-fix`}
                            showClass="overlay-end"
                            color="violet"

                            appType="Augmented Reality Mobile App"
                            headline="Ad-Vision."
                            text="Magical AR app that reads targets and returns info on screen"
                            pColorChange="violet-text-header"
                            h1ColorChange="buttercup-text"
                        />


                        <OverlayBlock
                            classes={`random-photo-2 align-fix`}
                            showClass="overlay-end"
                            color="night"
                            delay={100}
                            appType="Platform Fighter Video Game"
                            headline="Pixel-Smash."
                            text="Test your mettle against online players or the relentless CPU."
                            pColorChange="violet-text"
                            h1ColorChange="magenta-text"
                            h2ColorChange="violet-text-header"

                        />
                        <OverlayBlock
                            classes={`pet-perfect align-fix `}
                            showClass="overlay-end"
                            color="coral"
                            delay={200}
                            appType="Website"
                            headline="Pet-Perfect."
                            text="The perfect site for the passionate pet owner"
                            pColorChange="buttercup-text"
                            h2ColorChange="eclipse-text"

                        />
                        <OverlayBlock
                            classes={`random-photo-2 align-fix`}
                            showClass="overlay-end"
                            color="quetzal"
                            delay={300}
                            appType="Mongo-powered Web App"
                            headline="Space-Scraper."
                            text="Scrapes current articles from Space.com"
                            pColorChange="mist-text"
                            h2ColorChange="greenery-text"
                        />
                        <OverlayBlock
                            classes={`random-photo align-fix`}
                            showClass="overlay-end"
                            color="midnight"
                            delay={400}
                            appType="Command Line Application"
                            headline="Bamazon."
                            text="Purchase and manage your business' inventory"
                            pColorChange="mist-text"
                            h2ColorChange="greenery-text"
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


