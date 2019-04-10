import React, { Component } from "react";
import Scene3D from "../components/Scene3D/index";
import "./styles/Texts3D.css";

class Landing extends Component {
  state = {
    test: "test",
    hideLanding: true,
  }
  componentDidMount = () => {
    if (document.body.className === 'page-is-changing') {
      document.body.className = '';
    }
  }
  handleTransition = (path, history) => {

    setTimeout(() => {
      this.props.history.push(`/${path}`);
    }, 2000);

  }
  handleStateChange = () => {
    console.log("this function works");
    this.setState({ hideLanding: false });
  }
  handleTester = () => {
    console.log("this function works");
  }
  render = () => {
    return (
      <div>
        <Scene3D
          transitioner={(path)=> this.handleTransition(path)}
        />
        <div id={`parallax-container`} className={`hide-now`}></div>
      </div>
    );
  }
}

export default Landing;