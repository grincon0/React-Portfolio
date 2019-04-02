import React, { Component } from 'react';
import AnimatedText from "../../components/AnimatedText/index";
import Arrow from "../../components/Arrow/index";
import Flexbox from "../../components/Flexbox/index";
import FlexContainer from "../../components/FlexContainer/index";
import {FirstName, LastName} from "../../components/Name/index";
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
                second: false
            }
        }
    }
    componentDidMount = () => {
        this.addAnimationEndLisenter('.last-span', 'animation', 'first');
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
                default:
                    break;
            }
        });
    }

    render = () => {
        return (
            <div className={``}>
                {this.props.children}
                <FlexContainer
                    direction="row"
                    justify="center"
                    classes={`overflow-fix`}
                    id="Top-Text-Container"
                >

                    <div id="Headline-1" className={"DoIt"}>
                        <span>H</span>
                        <span>i</span>
                        <span>,</span>
                        <span>I</span>
                        <span>'</span>
                        <span className="last-span">m</span>
                    </div>
                    <FirstName
                    animate={this.state.headlineAnimationCompleted.first}
                    />
                    
                    {/* <TextOverlay
                        text="G"
                        faded={false}
                    />
                    <TextOverlay
                        text="e"
                        faded={false}
                    />
                    <TextOverlay
                        text="o"
                        faded={false}
                    />
                    <TextOverlay
                        text="r"
                        faded={false}
                    />
                    <TextOverlay
                        text="g"
                        faded={false}
                    />
                    <TextOverlay
                        text="e"
                        faded={false}
                    /> */}



                </FlexContainer>
                <FlexContainer
                    direction="row"
                    justify="center"
                    classes={`overflow-fix`}
                    id="Bottom-Text-Container"
                >
{/*                     <TextOverlay
                        text="R"
                        faded={false}
                    />
                    <TextOverlay
                        text="i"
                        faded={false}
                    />
                    <TextOverlay
                        text="n"
                        faded={false}
                    />
                    <TextOverlay
                        text="c"
                        faded={false}
                    />
                    <TextOverlay
                        text="o"
                        faded={false}
                    />
                    <TextOverlay
                        text="n"
                        faded={false}
                    /> */}
                    <LastName />



                    <div id="Headline-2" className={`${this.state.headlineAnimationCompleted.first ? "run-second" : ""}`}>
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
                        <span>r</span>
                    </div>
                    <SVGIcon
                        classes={`palm`}
                        src="palm"
                        height={180}
                        width={180}
                    />
                    <Waves />
                </FlexContainer>


                <Parallax />

            </div>

        );
    }
}

export default AboutContent;