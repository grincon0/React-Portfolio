import React, {Component} from "react";
import {Button} from "../Buttons/index";
import "./styles/ButtonList.css";

export class ButtonList extends Component {
    constructor(props){
        super(props);
        this.state = {
            test: false
        }
    }

    render = () => {
        return(
            <ul>
                <li>
                    <Button
                    text="NODE.JS"
                    />
                </li>
            </ul>
        );
    }
}