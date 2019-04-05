import React, { Component } from "react";
import { Button3D } from "../Buttons/index";
import "./style.css";

/* add action and method to form tag later */
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            msg: "",
            test: false,
            animate:false
        }
    }
    componentDidMount = () => {
        this.animateTimer = setTimeout(() => {
            if(this.state.animate === false){
                this.setState({animate :true});
            }
        }, 1000);
    }
    componentWillUnmount = () => {
        clearTimeout(this.animateTimer);
    }
    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.msg);
        this.setState({ name: "", email: "", msg: "" })
    }

    render = () => {

        return (
            <form id="form" className={`${this.state.animate ? "rollout" : ""}`}>
                <div id="first">
                    <input
                        type="text"
                        placeholder=" Enter your name."
                        id="name"
                        className={`form-name`}
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}/>
                </div>
                <div id="second">
                    <input
                        type="email"
                        placeholder=" Enter your email address."
                        id="email"
                        className={`form-email`}
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}/>
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
                <div className={`btn-box`} >
                    <Button3D onClick={this.handleFormSubmit} />
                    {/* <button onClick={this.handleFormSubmit}>Submit</button> */}
                </div>
            </form>

        );
    }
}

export default Form;