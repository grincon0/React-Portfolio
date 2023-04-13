import React, { Component } from "react";
import "./styles/Button3D.css";

export class Button3D extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }
  componentDidUpdate = () => {
    this.handleClickReset();
  }
  handleClickEvent = () => {
    this.setState({ clicked: true });
  }
  handleClickReset = () => {
    this.resetTimer = setTimeout(() => {
      this.setState({ clicked: false })
      clearTimeout(this.resetTimer);
    }, 2000);
  }
  render = () => {
    return (
      <div className={`btn-box ${this.props.transition ? "page-is-changing" : ""}`}>
        <div className="scene-button">
          <button onClick={this.handleClickEvent} className={`cube ${this.state.clicked ? "clicked" : ""}`}>
            <span className="side top">Sent!</span>
            <span className="side front">Submit</span>
          </button >
        </div>

      </div>
    )

  }
}