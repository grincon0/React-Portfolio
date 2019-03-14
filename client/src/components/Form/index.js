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

    render = () => {
        return (
            <form>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" className="input-bg" name="user_name" />

                </div>
                <div>
                    <label for="mail">E-mail:</label>
                    <input type="email" id="mail" className="input-bg" name="user_email" />
                </div>
                <div>
                    <label for="msg">Message:</label>
                    <textarea id="msg" className="input-bg" name="user_message"></textarea>
                </div>
                <button>Submit</button>
            </form>

        );
    }
}

export default Form;