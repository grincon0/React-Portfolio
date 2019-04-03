import React, { Component } from "react";
import AnimatedText from "../../components/AnimatedText/index";
import Arrow from "../../components/Arrow/index";
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
                        direction="row"
                        justify="center"
                        classes="margin-fix "
                    >

                        <div className="flex">

                            <FlexBox
                                id="Items"
                                classes="proj-box"
                            >

                                <ProjectOverlay />
                                <ProjectOverlay delay={100} />
                            </FlexBox>

                            <FlexBox
                                id="Items"
                                classes="proj-box"
                            >
                                <ProjectOverlay delay={200} />
                                <ProjectOverlay delay={300} />
                            </FlexBox>

                            <FlexBox
                                id="Items"
                                classes="proj-box"
                            >
                                <ProjectOverlay delay={400} />
                                <ProjectOverlay delay={500} />
                            </FlexBox>




                        </div>

                    </FlexContainer>
                </FlexContainer>
            </section>
        );
    }

}

export default ProjectContent;


