import React, { Component } from 'react';
/* import AboutContent from "./AboutContent";
import ProjectContent from "./ProjectContent"; */
import ContactContent from "./sections/Contact";
/* import AnimatedText from "../../components/AnimatedText/index"; */
import Arrow from "../components/Arrow/index";
/* import Flexbox from "../../components/Flexbox/index"; */
import FlexContainer from "../components/FlexContainer/index";
/* import OverlayBlock from "../../components/OverlayBlock/index"; */
import Menu from "../components/Menu/index";
import NavIcon from "../components/NavIcon/index";
/* import Slider from "../../components/Slider/index";
import SVGIcon from "../../components/SVGIcon/index"; */
import { Redirect } from "react-router-dom";
import "../pages/sections/section-styles/About.css";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            collapseMenu: false,
            section: '',
            toAbout: false
        }
    }
    componentDidMount = () => {
        console.log(this.props);
        if (document.body.className === 'page-is-changing') {
            document.body.className = '';
        }
    }
    handleRedirect = () => {
        if (this.state.toAbout) {
            return <Redirect to='/' />;
        }
    }
    testLoader = () => {
        /*         document.body.className += 'page-is-changing';
                setTimeout(() => {
                    document.body.className = '';
                }, 1500) */
        this.setState({ toAbout: true });
        console.log(this.state);

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
        this.handleRedirect();

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
                        <ContactContent />

                        <Arrow
                            arrowText={"Home"}
                            onClick={this.testLoader}
                        />

                    </FlexContainer>
                </div>
            </section>
        );
    }
}

export default Contact;
