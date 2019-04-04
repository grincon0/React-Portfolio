import React, { Component } from "react";
import AnimatedText from "../../components/AnimatedText/index";
import Arrow from "../../components/Arrow/index";
import {ButtonList} from  "../../components/Lists/index"
import { ProjectOverlay, LargeOverlay } from "../../components/OverlayBlock/index";
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
                        direction="column"
                        justify="center"
                        classes="margin-fix "
                    >
                    <div>
                        <p>From web development to game design, from UI/UX design to Full Stack devleopment, Click on the buttons below to filter my projects by technology</p>
                    </div>
                    <FlexBox
                        classes="button-flex"
                    >
                        <ButtonList />

                    </FlexBox>

                       

                    </FlexContainer>
                </FlexContainer>
            </section>
        );
    }

}

export default ProjectContent;


