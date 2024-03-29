import React, { Component } from 'react';
import AboutContent from "../pages/sections/AboutContent";
import Arrow from "../components/Arrow/index";
import Flexbox from "../components/Flexbox/index";
import FlexContainer from "../components/FlexContainer/index";
import Menu from "../components/Menu/index";
import NavIcon from "../components/NavIcon/index";
import SVGIcon from "../components/SVGIcon/index";
import { Route } from 'react-router-dom';

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
  };
  handleTransition = async (event) => {
    event.preventDefault();
    await this.runTransition();

    setTimeout(() => {
      this.props.history.push('/projects');
    }, 2300);
  };
  doTransitionEffect = () => {
    document.body.className += 'page-is-changing';
  };
  runTransition = () => {
    let newState = { ...this.state };
    newState.transition = true;
    this.setState(newState);
  };
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
  };
  render = () => {
    return (
      <section id="ABOUT" className={'overflow-fix'}>
        <div className={`box-size overflow-fix `} scroll='no'>
          <Menu collapseMenu={this.state.collapseMenu} />
          <FlexContainer classes="nav-height-fix " direction="row" justify="between">
            <Flexbox className={`about-flexbox`}>
              <a className={`a-first `} target="_blank" href="https://github.com/grincon0">
                <SVGIcon
                  classes={`about-icon ${this.state.transition ? "about-remove" : "about-show"}`}
                  src="github"
                  height={30}
                  width={25}
                />
              </a>
              <a className={`about-a`} target="_blank" href="https://www.linkedin.com/in/george-rincon">
                <SVGIcon
                  classes={`about-icon ${this.state.transition ? "about-remove" : "about-show"}`}
                  src="linkedin"
                  height={30}
                  width={25}
                />
              </a>
            </Flexbox>
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
            <AboutContent
              transition={this.state.transition}
            />
            <FlexContainer
              direction="column"
              justify="center"
              style={{ overflow: "hidden" }}
            >
              <Route render={({ history }) => (
                <Arrow
                  arrowText={"Projects"}
                  onClick={(e) => { this.handleTransition(e, history) }}
                  transition={this.state.transition}
                />
              )} />
            </FlexContainer>
          </FlexContainer>
        </div>
      </section>
    );
  }
}

export default About;
