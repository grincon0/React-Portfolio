import React, { Component } from 'react';
import ProjectContent from "../pages/sections/ProjectContent";
import Arrow from "../components/Arrow/index";
import Flexbox from "../components/Flexbox/index";
import FlexContainer from "../components/FlexContainer/index";
import Menu from "../components/Menu/index";
import NavIcon from "../components/NavIcon/index";
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
            transition: false,
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
        }, 2300);
    }
    handleTransition = async (event, history, direction) => {
        event.preventDefault();
        /* await this.doTransitionEffect(); */

        await this.runTransition();
        switch (direction) {
            case "back":
                setTimeout(() => {
                    this.props.history.push('/about');
                }, 2300);
                break;
            case "forward":
                setTimeout(() => {
                    this.props.history.push('/contact');
                }, 2300);
                break;

            default:
                break;
        }
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
    runTransition = () => {
        let newState = { ...this.state };
        newState.transition = true;
        this.setState(newState);
    }
    render = () => {
        return (
            <section id="ABOUT">
                <div className={`box-size ${this.state.section === 'about' ? "overflow-fix " : "overflowX-fix"} ${this.props.classes}`}>
                    <Menu collapseMenu={this.state.collapseMenu} />
                    <FlexContainer classes="nav-height-fix" direction="row" justify="end">
                        <NavIcon
                            toggleMenu={this.toggleMenu}
                            transition={this.state.transition}
                        />
                    </FlexContainer>
                    <FlexContainer >
                        <ProjectContent
                            transition={this.state.transition}
                        />


                        <Route render={({ history }) => (


                            <Arrow
                                arrowText={"Contact"}
                                classes={`arrow-project`}
                                onClick={(e) => { this.handleTransition(e, history, "forward") }}
                                transition={this.state.transition}
                            />

                        )} />
                    </FlexContainer>


                    {/*                     <Route render={({ history }) => (

                        <Arrow
                            arrowText={"About"}
                            classes={`arrow-project-left`}
                            onClick={(e) => { this.handleTransition(e, history, "back") }}
                            transition={this.state.transition}
                        />

                    )} /> */}
                </div>

            </section>
        );
    }
}

export default Projects;