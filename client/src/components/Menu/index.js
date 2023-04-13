import React, { Component } from "react";
import "./style.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false

    }
  };
  render = () => {
    if (!this.state.display) {
      setTimeout(() => {
        this.setState({ display: true });
      }, 500)
    }
    return (
      <nav id="nav-menu" className={`nav-block-flex ${this.props.collapseMenu ? "nav-menu-show" : ""} ${this.state.display ? "display-fix" : ""}`}>
        <a href="/">Home</a>
        <i></i>
        <a href="/about">About</a>
        <i></i>
        <a href="/projects">Projects</a>
        <i></i>
        <a href="/contact">Contact</a>
        <i></i>
      </nav>
    );
  };
}

export default Menu;