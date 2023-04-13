import React, { Component } from "react";
import "./styles/Sea.css";

export class Sea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      move: false
    }
  };
  componentDidMount = () => {
    this.seaTimer = setTimeout(() => {
      this.setState({ move: true });
    }, 2000);
  };
  componentWillUnmount = () => {
    clearTimeout(this.seaTimer);
  };
  render = () => {
    return (
      <canvas className={`sea ${this.state.move ? "appear" : ""} ${this.props.transition ? "rollout" : ""} `}></canvas>
    );
  };
}
