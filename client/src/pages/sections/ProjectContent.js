import React, { Component } from "react";
import { ButtonList } from "../../components/Lists/index"
import FlexBox from "../../components/Flexbox/index";
import FlexContainer from "../../components/FlexContainer/index";
import Parallax from "../../components/Parallax/index";

class ProjectContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      animationComplete: {
        title: true,
        subtitle: false,
        buttons: false
      },
      placeholder: '',
      loaded: false,
      delay: 400,
      pageTransition: false
    }
  }
  componentDidMount = () => {
    this.animateTimer = setTimeout(() => {
      this.setState({ animate: true });
    }, 1300);

    this.addAnimationEndLisenter(".project-header", "animation", "title");
    this.addAnimationEndLisenter(".project-page-text", "animation", "subtitle");
  }
  componentWillUnmount = () => {
    clearTimeout(this.animateTimer);
  }
  addAnimationEndLisenter = (query, type, which) => {
    let element = document.querySelector(query);
    element.addEventListener(`${type}end`, () => {
      let newState = { ...this.state };
      switch (which) {
        case 'title':
          newState.animationComplete.title = true;
          this.setState(newState);
          break;
        case 'buttons':
          newState.animationComplete.buttons = true;
          this.setState(newState);
          break;
        case 'subtitle':
          newState.animationComplete.subtitle = true;
          this.setState(newState);
          break;
        default:
          break;
      }
    });
  };
  handlePageTransition = (event) => {
    event.preventDefault();
    const value = event.target.value;
  };
  transitionChecker = () => {
    this.transitionInterval = setInterval(() => {
      if (this.props.transition === true) {
        let newState = { ...this.state };
        newState.pageTransition = true;
        this.setState(newState);
        clearInterval(this.transitionInterval);
      }
    }, 300);
  };
  render = () => {
    return (
      <section id="PROJECTS">
        <FlexContainer
          direction="column"
          justify="center"
          classes="align-fix"
          id={`parallax-container`}>
          <FlexBox
            classes="tiny-flex">
            <div className={`project-header ${this.state.animate ? "show-header" : ""} ${this.props.transition ? "page-is-changing" : ""} `}>
              <h1 className={`rollout ${this.props.transition ? "text-disappear" : ""}`}>Projects</h1>
            </div>
          </FlexBox>
          <FlexContainer
            direction="column"
            justify="center"
            classes="margin-fix ">
            <div className={`project-page-subtitle ${this.state.animationComplete.title ? "rollout" : ""} ${this.props.transition ? "page-is-changing" : ""}`}>
              <div className={`project-page-text ${this.state.animate ? "show-header" : ""} ${this.props.transition ? "text-disappear" : ""} `}>
                <p>From <span className={`project-highlight-1`}>web development</span> to <span className={`project-highlight-2`}>game design</span>, and apps in between. Click on the buttons below to filter my projects by technology or skill.</p>
              </div>
            </div>
            <FlexBox
              classes="button-flex">
              <ButtonList
                animate={this.state.animationComplete.subtitle}
                transition={this.props.transition}
              />
            </FlexBox>
          </FlexContainer>
          <Parallax shapes={true} />
        </FlexContainer>
      </section>
    );
  }
}

export default ProjectContent;
