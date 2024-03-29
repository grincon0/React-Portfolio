import React, { Component } from "react";
import MenuIcon from "../../assets/SVG/MenuIcon.svg";
import "./style.css";

class CustomNavBar extends Component {
  state = {
    class: "noshow",
    hasCollapseBtnClicked: false,
    canCollapse: false
  };

  handleCollapse = () => {
    if (!this.state.hasCollapseBtnClicked) {
      let newState = {
        hasCollapseBtnClicked: true
      }
      this.handleNewState(newState);
    } else {
      this.handleNewState();
    }
  };

  handleNewState = (newState) => {
    if (newState !== undefined) {
      if (!this.state.canCollapse) {
        newState.class = "collapsee";
        newState.canCollapse = true;
        this.setState(newState);
      }
    } else {
      if (!this.state.canCollapse) {
        this.setState({ class: "collapsee", canCollapse: true });
      } else {
        this.setState({ class: "hidee", canCollapse: false });
      }
    }
  };

  cleanOutClass = (classToRemove) => {
    document.getElementById("CustomCollapse").classList.remove(classToRemove);
  };

  elementHasClass = (classToCheck) => {
    document.getElementById("CustomCollapse").classList.contains(classToCheck);
  };

  render = () => {
    return (
      <nav>
        <div className="CustomNav">
          <div className="CustomAnchors">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">CONTACT</a>
          </div>

          <div>
            <button className="CustomNavBtn" onClick={this.handleCollapse}>
              <img src={MenuIcon} width={40} height={41} alt="icon"></img>
            </button>
          </div>
        </div>
        <div>
          <div id="CustomCollapse" className={`NavMenu ${this.state.class} `}>
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">PORTFOLIO</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
};

export default CustomNavBar;