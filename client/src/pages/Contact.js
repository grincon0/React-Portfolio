import React, { Component } from 'react';
import ContactContent from "./sections/ContactContent";
import Arrow from "../components/Arrow/index";
import FlexContainer from "../components/FlexContainer/index";
import Menu from "../components/Menu/index";
import NavIcon from "../components/NavIcon/index";
import { Route, Redirect } from "react-router-dom";
import "../pages/sections/section-styles/About.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      collapseMenu: false,
      section: '',
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
    }, 3000);
  }
  handleRedirect = () => {
    if (this.state.toAbout) {
      return <Redirect to='/' />;
    }
  }
  handleTransition = async (event, history) => {
    event.preventDefault();
    await this.runTransition();
    setTimeout(() => {
      this.props.history.push('/');
    }, 3000);
  }
  testLoader = () => {
    this.setState({ toAbout: true });
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
      <section id="CONTACT">
        <div className={`box-size ${this.state.section === 'about' ? "overflow-fix " : "overflowX-fix"} ${this.props.classes}`}>
          <Menu collapseMenu={this.state.collapseMenu} />
          <FlexContainer classes="nav-height-fix" direction="row" justify="end">
            <NavIcon
              toggleMenu={this.toggleMenu}
              transition={this.state.transition} />
          </FlexContainer>
          <FlexContainer
            direction="column"
            justify="center">
            <ContactContent
              transition={this.state.transition}
            />
            <Route render={({ history }) => (
              <Arrow
                arrowText={"Home"}
                onClick={(e) => { this.handleTransition(e, history) }}
                transition={this.state.transition} />
            )} />
          </FlexContainer>
        </div>
      </section>
    );
  }
}

export default Contact;
