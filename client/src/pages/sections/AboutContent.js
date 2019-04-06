import React, { Component } from 'react';
import AnimatedText from "../../components/AnimatedText/index";
import Arrow from "../../components/Arrow/index";
import Flexbox from "../../components/Flexbox/index";
import FlexContainer from "../../components/FlexContainer/index";

import { FirstName, LastName } from "../../components/Name/index";
import { Name, TextOverlay } from "../../components/Customs/index";
import Parallax from "../../components/Parallax/index";
import { Waves } from "../../components/Experiments/index";
import SVGIcon from "../../components/SVGIcon/index";
import "./section-styles/About.css";
import "./section-styles/AboutContent.css";

class AboutContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            collapseMenu: false,
            headlineAnimationCompleted: {
                first: false,
                name: false,
                second: false,
            },
            pageTransitions: {
                first: false,
                name: false,
                second: false
            },
            pageTransition: false
        }
    }
    componentDidMount = () => {
        this.addAnimationEndLisenter('.last-span', 'animation', 'first');
        this.addAnimationEndLisenter('.lastname-overlay', 'animation', 'name');
        this.addAnimationEndLisenter('.lastname-final', 'animation', 'second');
        this.transitionChecker();
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
    handleSpanHover = (e) => {
        switch (e.target.id) {
            case "span1":
                console.log('leu')
                document.getElementById("span1").classList.add("hover-span");
                break;
            default:
                break;
        }
    }
    handleSpanOut = (e) => {
        switch (e.target.id) {
            case "span1":
                document.getElementById("span1").classList.remove("hover-span");
                break;
            default:
                break;
        }
    }
    handleThirdLineClasses = () => {
        if (this.state.headlineAnimationCompleted.name === true && this.state.headlineAnimationCompleted.second === true) {
            return "animation-finished";
        } else if (this.state.headlineAnimationCompleted.name === true) {
            return "run-second";
        }
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
        let thirdClasses = this.handleThirdLineClasses();

        return (
            <div className={``}>
                {this.props.children}
                <FlexContainer
                    direction="row"
                    justify="center"
                    classes={`overflow-fix`}
                    id="Top-Text-Container"
                >
                    <div id="Headline-1" className={`${this.state.headlineAnimationCompleted.second ? "animation-finished" : "DoIt "} ${this.state.pageTransition ? "page-is-changing" : ""}`}>
                        <span id="span1" >H</span>
                        <span>i</span>
                        <span>,</span>
                        <span>I</span>
                        <span>'</span>
                        <span className="last-span">m</span>
                    </div>
                </FlexContainer>
                <Flexbox
                    id="Name-container"
                    direction="row"
                    justify="center"
                    classes={`flex-adjust ${this.state.pageTransition ? "page-is-changing" : ""}`}
                >
                    <FirstName
                        id="First-Name"
                        transition={this.state.pageTransition}
                        animate={this.state.headlineAnimationCompleted.first}
                    />
                    <LastName
                    id="Last-Name"
                    transition={this.state.pageTransition}
                        animate={this.state.headlineAnimationCompleted.first}
                    />
                </Flexbox>
                <FlexContainer
                    direction="row"
                    justify="center"
                    classes={`overflow-fix `}
                    id="Bottom-Text-Container"
                >

                    <div id="Headline-2" className={`${thirdClasses} ${this.state.pageTransition ? "page-is-changing" : ""}`}>
                        <span>F</span>
                        <span>u</span>
                        <span>l</span>
                        <span>l</span>
                        <span> </span>
                        <span>S</span>
                        <span>t</span>
                        <span>a</span>
                        <span>c</span>
                        <span>k</span>
                        <span> </span>
                        <span>D</span>
                        <span>e</span>
                        <span>v</span>
                        <span>e</span>
                        <span>l</span>
                        <span>o</span>
                        <span>p</span>
                        <span>e</span>
                        <span className={`lastname-final`}>r</span>
                    </div>
                    <SVGIcon
                        id="palmTree"
                        classes={`palm ${this.state.pageTransition ? "page-is-changing" : ""}`}
                        src="palm"
                        height={180}
                        width={180}
                    />
                    {/*                     <SVGIcon 
                        classes={`volcan`}
                        src="volcan"
                        height={100}
                        width={100}
                    /> */}
                    <Waves />
                </FlexContainer>


             <Parallax /> 

            </div>

        );
    }
}

export default AboutContent;