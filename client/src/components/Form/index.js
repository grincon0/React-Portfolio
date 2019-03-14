import React, { Component } from "react";
import "./style.css";



/* add action and method to form tag later */
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            msg: "",
            test: false
        }
    }
    componentDidMount = () => {

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
        setTimeout(() => {
            if(!this.state.test){
                this.setState({test:true});
            }

        },1000);

        return (
            <form id="form" >
                <div id="first">

                    <input
                        type="text"
                        placeholder=" Enter your name."
                        id="name"
                        className={`input-bg form-start underline begin-position-left ${this.state.test ? "end-pos" : ""} `}
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </div>

                <div id="second">
                    <input
                        type="email"
                        placeholder=" Enter your email address."
                        id="email"
                        className={`input-bg form-start underline begin-position-right ${this.state.test ? "end-pos" : ""}`}
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </div>


                <div>

                    <textarea
                        id="msg"
                        placeholder=" Your message."
                        className="input-bg form-start underline"
                        name="msg"
                        value={this.state.msg}
                        onChange={this.handleInputChange}
                    ></textarea>
                </div>
                <div className="btn-box">
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </div>
            </form>

        );
    }
}

export default Form;