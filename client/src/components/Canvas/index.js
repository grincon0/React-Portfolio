import React, { Component } from "react";
import "./style.css";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    }
  };
  componentDidMount = () => {
    this.checkWindowSizeChange();
  };
  componentWillUnmount = () => {
    clearTimeout(this.sizeTimer);
  };
  checkWindowSizeChange = () => {
    this.sizeTimer = setInterval(() => {
      if (this.state.width !== window.innerWidth) {
        let newState = { ...this.state }
        newState.width = parseInt(window.innerWidth);
        this.setState(newState);

      } else {
        return;
      }
    }, 150);
  };
  render = () => {
    return (
      <div className="canvasBlock" style={{ width: `${this.state.width}px` }} {...this.props}>
        <canvas id="canvas" style={{ width: `${this.state.width}px` }} >
        </canvas>
        {this.props.children}
      </div>
    );
  };
}

export default Canvas;
