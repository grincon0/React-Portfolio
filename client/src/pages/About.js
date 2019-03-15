import React, { Component } from 'react';
import AboutContent from "../pages/sections/AboutContent";
import AnimatedText from "../components/AnimatedText/index";
import Arrow from "../components/Arrow/index";
import Flexbox from "../components/Flexbox/index";
import FlexContainer from "../components/FlexContainer/index";
import Menu from "../components/Menu/index";
import NavIcon from "../components/NavIcon/index";
/* import Slider from "../components/Slider/index"; */
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canRender: true,
            collapseMenu: false,
            hidden: true,
            section: ''
        }
    }
    componentDidMount = () => {
        if (document.body.className === 'page-is-changing') {
            document.body.className = '';
        }
    }
    testLoader = () => {
        document.body.className += 'page-is-changing';
        setTimeout(() => {
            document.body.className = '';
        }, 1500)

    }
    toggleMenu = () => {
        if (!this.state.collapseMenu) {
            let newState = { ...this.state };
            newState.collapseMenu = true;
            this.setState(newState);
        } else {
            let newState = { ...this.state };
            newState.collapseMenu = false;
            this.setState(newState);
        }
    }
    render = () => {
        return (
            <section id="ABOUT">
                <div className={`box-size ${this.state.section === 'about' ? "overflow-fix " : "overflowX-fix"} ${this.props.classes}`}>
                    <Menu collapseMenu={this.state.collapseMenu} />
                    <FlexContainer classes="nav-height-fix" direction="row" justify="end">
                        <NavIcon toggleMenu={this.toggleMenu} />
                    </FlexContainer>
                    {/* comp below needs direction column and justify center if rednering AboutContent */}
                    <FlexContainer
                        direction="column"
                        justify="center"
                    >
                        <AboutContent
                            canRender={this.state.canRender}
                        />
                        <a href="/projects">
                            <Arrow
                                arrowText={"Projects"}
                                onClick={this.testLoader}
                            />
                        </a>
                    </FlexContainer>
                </div>
            </section>
        );
    }
}

export default About;
