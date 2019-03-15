import React, { Component } from 'react';
/* import AboutContent from "./AboutContent"; */
import ProjectContent from "../pages/sections/ProjectContent";
/* import Contact from "./sections/Contact"; */
/* import AnimatedText from "../../components/AnimatedText/index"; */
import Arrow from "../components/Arrow/index";
/* import Flexbox from "../../components/Flexbox/index"; */
import FlexContainer from "../components/FlexContainer/index";
/* import OverlayBlock from "../../components/OverlayBlock/index"; */
import Menu from "../components/Menu/index";
import NavIcon from "../components/NavIcon/index";
/* import Slider from "../../components/Slider/index";
import SVGIcon from "../../components/SVGIcon/index"; */
import "../pages/sections/section-styles/About.css";

import { Route, Redirect } from "react-router-dom";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            collapseMenu: false,
            section: '',
            toContact: false,
        }
    }
    componentDidMount = () => {
        if (document.body.className === 'page-is-changing') {
            document.body.className = '';
        }
    }
    doTransitionEffect = () => {
        document.body.className += 'page-is-changing';
        setTimeout(() => {
            document.body.className = '';
        }, 3000);
    }
    handleTransition = async (event, history) => {
        event.preventDefault();
        await this.doTransitionEffect();

        setTimeout(() => {
            this.props.history.push('/contact');
        }, 1000);

    }
    componentWillUnmount = () => {
        console.log("Project component unmounted");
    }
    testLoader = () => {

        this.setState({ toContact: true });
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
                    <FlexContainer >
                        <ProjectContent />

                        <Route render={({ history }) => (
                            <Arrow
                                arrowText={"Contact"}
                                onClick={(e) => { this.handleTransition(e, history) }}
                            />
                        )} />
                    </FlexContainer>
                </div>
            </section>
        );
    }
}

export default Projects;