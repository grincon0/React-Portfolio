import React, { Component } from 'react';
import AboutContent from "../pages/sections/AboutContent";
import AnimatedText from "../components/AnimatedText/index";
import Arrow from "../components/Arrow/index";
import Flexbox from "../components/Flexbox/index";
import FlexContainer from "../components/FlexContainer/index";
import Menu from "../components/Menu/index";
import NavIcon from "../components/NavIcon/index";
import Parallax from "../components/Parallax/index";
import SVGIcon from "../components/SVGIcon/index";
import { Route, withRouter, Redirect } from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canRender: true,
            collapseMenu: false,
            hidden: true,
            section: '',
            transition: false
        }
    }
    componentDidMount = () => {
        if (document.body.className === 'page-is-changing') {
            document.body.className = '';
        }
    }
    handleTransition = async (event, history) => {
        event.preventDefault();
        /* old version for body */
        /* await this.doTransitionEffect(); */

        await this.runTransition();

        setTimeout(() => {
            this.props.history.push('/projects');
        }, 2300);

    }
    /* old version for body pseudos */
    doTransitionEffect = () => {
        document.body.className += 'page-is-changing';
    }
    runTransition = () => {
        let newState = { ...this.state };
        newState.transition = true;
        this.setState(newState);
    
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
            <section id="ABOUT" className={'overflow-fix'}>
                <div className={`box-size overflow-fix `} scroll='no'>
                    <Menu collapseMenu={this.state.collapseMenu} />
                    <FlexContainer classes="nav-height-fix " direction="row" justify="end">
                        
                        <NavIcon
                            toggleMenu={this.toggleMenu}
                            transition={this.state.transition}
                        />
                    </FlexContainer>
                    <FlexContainer
                        id="parallax-container"
                        direction="column"

                        classes={`overflow-fix`}
                    >

                        {/* About page content beings */}
                        <AboutContent
                            transition={this.state.transition}
                        />

                        <FlexContainer
                            direction="column"
                            justify="center"
                            style={{overflow:"hidden"}}

                        >
                            <Route render={({ history }) => (
                                <Arrow
                                    arrowText={"Projects"}
                                    onClick={(e) => { this.handleTransition(e, history) }}
                                    transition={this.state.transition}
                                />
                            )} />
                        </FlexContainer>

                        {/* About page content ends */}
                    </FlexContainer>


                </div>
            </section>
        );
    }
}

export default About;
