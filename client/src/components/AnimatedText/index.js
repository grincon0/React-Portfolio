import React, { Component } from "react";
import "./style.css";

class AnimatedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: '',
      animationPlay: false,
      blur: false,
      transform: false,
      hover: false
    }
  }

  componentDidMount = () => {
    if (!this.props.transform) {
      this.timerID = setTimeout(() => {
        this.handleGetAnimation();
      }, 10 + (this.props.delay || 0));
    }
    if (this.props.blur) {
      this.handleBlur();
      console.log(this.props.blur);
    }


  }
  componentDidUpdate = () => {
    if (this.state.blur) {
      this.blurTimeout = setTimeout(() => {
        this.setState({ blur: false });
      }, this.props.blur.time);
    }
  }
  componentWillUnmount = () => {
    clearTimeout(this.timerID);
    clearTimeout(this.blurTimeout);
  }
  handleBlur = () => {
    if (this.props.blur && !this.state.blur) {
      let newState = { ...this.state };
      newState.blur = true;
      this.setState({ newState });
    }
  }
  handleGetAnimation = () => {
    switch (this.props.anim) {
      case "slide-right":
        this.setState({
          animation: this.props.anim,
          animationPlay: true
        });
        break;
      case "slide-left":
        this.setState({
          animation: this.props.anim,
          animationPlay: true
        });
        break;
      case "slide-right-quick":
        this.setState({
          animation: this.props.anim,
          animationPlay: true
        });
        break;

      case "slide-left-quick":
        this.setState({
          animation: this.props.anim,
          animationPlay: true
        });
        break;

      default:
        break;
    }
  }
  render = () => {
    return (
      <div>
        <p className={`default-text ${this.state.animation ? this.state.animation : ""} ${this.props.classes} ${this.state.blur ? "blur-short" : ""} ${this.props.hover ? this.props.hoverInClass : this.props.hoverOutClass}`}>{this.props.text}</p>
      </div>
    );
  }

}

export default AnimatedText;