import React, { Component } from 'react';
import AnimatedText from "../../components/AnimatedText/index";
import Arrow from "../../components/Arrow/index";
import Flexbox from "../../components/Flexbox/index";
import FlexContainer from "../../components/FlexContainer/index";
import { Name, TextOverlay } from "../../components/Customs/index";
import Parallax from "../../components/Parallax/index";
import {Waves} from "../../components/Experiments/index";
import "./section-styles/About.css";

class AboutContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            collapseMenu: false
        }
    }

    render = () => {
        return (
            <div className={``}>
                {this.props.children}
              <FlexContainer
                    direction="row"
                    justify="center"
                >
                    <TextOverlay
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
                    />

                </FlexContainer>
                <FlexContainer
                    direction="row"
                    justify="center"
                >
                    <TextOverlay
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
                    />
                    <Waves /> 
                </FlexContainer> 
                 

                <Parallax />

            </div>

        );
    }
}

export default AboutContent;