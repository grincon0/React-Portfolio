import React, { Component } from "react";
import "./style.css";


/* add action and method to form tag later */
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            msg: ""
        }
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
            <form id="form">
                <div>
                    <input
                        type="text"
                        placeholder=" Enter your name."
                        id="name"
                        className="input-bg form-start underline"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />

                </div>
                <div>

                    <input
                        type="email"
                        placeholder=" Enter your email address."
                        id="email"
                        className="input-bg form-start underline"
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