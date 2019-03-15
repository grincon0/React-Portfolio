import React, { Component } from 'react';
import AboutContent from "../pages/sections/AboutContent";
import AnimatedText from "../components/AnimatedText/index";
import Arrow from "../components/Arrow/index";
import Flexbox from "../components/Flexbox/index";
import FlexContainer from "../components/FlexContainer/index";
import Menu from "../components/Menu/index";
import NavIcon from "../components/NavIcon/index";

import { Route, withRouter, Redirect } from 'react-router-dom'
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
    handleTransition = async (event, history) => {
        event.preventDefault();
        await this.doTransitionEffect();

        setTimeout(() => {
            this.props.history.push('/projects');
        }, 500);

    }
    doTransitionEffect = () => {
        document.body.className += 'page-is-changing';
        setTimeout(() => {
            document.body.className = '';
        }, 1500);
    }
    testLoader = () => {
        /*         document.body.className += 'page-is-changing';
                setTimeout(() => {
                    document.body.className = '';
                }, 1500) */
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
                    <FlexContainer
                        direction="column"
                        justify="center"
                    >
                        {/* About page content beings */}
                        <AboutContent canRender={this.state.canRender} />
                        <Route render={({ history }) => (
                            <Arrow
                                arrowText={"Projects"}
                                onClick={(e) => { this.handleTransition(e, history) }}
                            />
                        )} />
                        {/* About page content ends */}
                    </FlexContainer>
                </div>
            </section>
        );
    }
}

export default About;
