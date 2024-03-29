import React, { Component } from "react";
import "./styles/ProjectOverlay.css";

export class ProjectOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "text",
      show: false,
      hover: false
    }

  };
  componentDidMount = () => {
    this.timerTransform = setTimeout(() => {
      this.setState({ show: true });
    }, 500 + (this.props.delay || 0));
  };
  componentWillUnmount = () => {
    clearTimeout(this.timerTransform);
  };
  handleHover = () => {
    this.setState({ hover: true });
  };
  handleOut = () => {
    this.setState({ hover: false });
  };
  render = () => {
    return (
      <div id={this.props.blockID} onClick={this.props.onClick} className={`item-container ${this.state.show ? "move-in" : ""}`}>
        <div data-colorA={this.props.colorA} data-colorB={this.props.colorB} className="project-box">
          <div className={`project-mask mask-${this.props.count}`}>
            <h1>{this.props.name}</h1>
          </div>
        </div>
      </div>
    );
  }
}