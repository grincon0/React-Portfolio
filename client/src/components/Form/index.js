import React, { Component } from "react";
import { Button3D } from "../Buttons/index";
import "./style.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      msg: "",
      test: false,
      animate: false
    }
  };
  componentDidMount = () => {
    this.animateTimer = setTimeout(() => {
      if (this.state.animate === false) {
        this.setState({ animate: true });
      }
    }, 1000);
  };
  componentWillUnmount = () => {
    clearTimeout(this.animateTimer);
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.msg);
    this.setState({ name: "", email: "", msg: "" })
  };

  render = () => {
    return (
      <form id="form" action="https://formspree.io/portfolioboxgeo@gmail.com" method="POST" className={`${this.state.animate ? "rollout" : ""} ${this.props.transition ? "page-is-changing" : ""}`}>
        <div id="first">
          <input
            type="text"
            placeholder=" Enter your name."
            id="name"
            className={`form-name`}
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </div>
        <div id="second">
          <input
            type="email"
            placeholder=" Enter your email address."
            id="email"
            className={`form-email`}
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </div>
        <div className={`text-box end-pos`}>
          <textarea
            id="msg"
            placeholder=" Your message."
            className={`form-textarea`}
            name="msg"
            value={this.state.msg}
            onChange={this.handleInputChange}
          ></textarea>
        </div>
        <Button3D transition={this.props.transition} onClick={this.handleFormSubmit} />
      </form>

    );
  }
}

export default Form;