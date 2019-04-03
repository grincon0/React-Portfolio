import React, { Component } from "react";
import AnimatedText from "../../components/AnimatedText/index";
import Arrow from "../../components/Arrow/index";
import {LargeOverlay} from "../../components/OverlayBlock/index";
import FlexBox from "../../components/Flexbox/index";
import FlexContainer from "../../components/FlexContainer/index";

import "./section-styles/projectContent.css";

class ProjectContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: '',
            loaded: false,
            delay: 400,
            pageTransition: false
        }
    }
    addAnimationEndLisenter = (query, type, which) => {
        let element = document.querySelector(query);

        element.addEventListener(`${type}end`, () => {
            console.log(`${type} ended`);

            let newState = { ...this.state };

            switch (which) {
                case 'first':
                    newState.headlineAnimationCompleted.first = true;
                    this.setState(newState);
                    break;
                case 'second':
                    newState.headlineAnimationCompleted.second = true;
                    this.setState(newState);
                    break;
                case 'name':
                    newState.headlineAnimationCompleted.name = true;
                    this.setState(newState);
                    break;
                default:

                    break;
            }
        });
    }
    transitionChecker = () => {
        this.transitionInterval = setInterval(() => {
            if (this.props.transition === true) {
                let newState = { ...this.state };
                newState.pageTransition = true;
                this.setState(newState);
                console.log(newState);
                clearInterval(this.transitionInterval);

            }

        }, 300);
    }
    render = () => {

        return (
            <section id="PROJECTS">
                <FlexContainer
                    direction="column"
                    justify="center"
                    classes="align-fix"
                >
                
                    <FlexBox
                        classes="tiny-flex"
                    >
                        <AnimatedText
                            classes="text-project-header color-default"
                            anim="slide-right-quick"
                            text="Projects"
                        />

                        <AnimatedText
                            classes="text-project-header color-default line-move"
                            anim="slide-right-quick"
                            delay={200}
                            text="_______"
                        />

                    </FlexBox>
                    <FlexContainer
                        direction="row"
                        justify="start"
                        classes="margin-fix "
                    >

                        <FlexBox
                            id="Items"
                            classes="proj-box"
                        >
                            <LargeOverlay
                                classes={`random-photo align-fix`}
                                showClass="overlay-end"
                                color="violet"
                                delay={this.state.delay}
                                appType="Augmented Reality Mobile App"
                                headline="Ad-Vision."
                                text="Magical AR app that reads targets and returns info on screen"
                                pColorChange="violet-text-header"
                                h1ColorChange="buttercup-text"
                            />


                            <LargeOverlay
                                classes={`random-photo-2 align-fix`}
                                showClass="overlay-end"
                                color="night"
                                delay={this.state.delay + 100}
                                appType="Platform Fighter Video Game"
                                headline="Pixel-Smash."
                                text="Test your mettle against online players or the relentless CPU."
                                pColorChange="violet-text"
                                h1ColorChange="magenta-text"
                                h2ColorChange="violet-text-header"

                            />
                            <LargeOverlay
                                classes={`pet-perfect align-fix `}
                                showClass="overlay-end"
                                color="coral"
                                delay={this.state.delay + 200}
                                appType="Website"
                                headline="Pet-Perfect."
                                text="The perfect site for the passionate pet owner"
                                pColorChange="buttercup-text"
                                h2ColorChange="eclipse-text"

                            />
                            <LargeOverlay
                                classes={`random-photo-2 align-fix`}
                                showClass="overlay-end"
                                color="quetzal"
                                delay={this.state.delay + 300}
                                appType="Mongo-powered Web App"
                                headline="Space-Scraper."
                                text="Scrapes current articles from Space.com"
                                pColorChange="mist-text"
                                h2ColorChange="greenery-text"
                            />
                            <LargeOverlay
                                classes={`random-photo align-fix`}
                                showClass="overlay-end"
                                color="midnight"
                                delay={this.state.delay + 400}
                                appType="SQL-backed Command Line Application"
                                headline="Bamazon."
                                text="Purchase and manage your business' inventory with this Node.js powered app"
                                pColorChange="mist-text"
                                h2ColorChange="greenery-text"
                            />
                            <LargeOverlay
                                classes={`random-photo-3 align-fix`}
                                showClass="overlay-end"
                                color="snorkel"
                                delay={this.state.delay + 500}
                                appType="Command Line Application"
                                headline="Liri-Bot."
                                text="Run a number of queries and return data wiht Liri"
                                pColorChange="buttercup-text"
                                h1ColorChange="sun-text"
                                h2ColorChange="bright-text"
                            />

                        </FlexBox>

                    </FlexContainer>
                </FlexContainer>
            </section>
        );
    }

}

export default ProjectContent;


