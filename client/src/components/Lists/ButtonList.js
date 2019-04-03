import React, { Component } from "react";
import { Button } from "../Buttons/index";
import "./styles/ButtonList.css";

export class ButtonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: false,
            count: 9,
            content: [{ name: "ReactJS" }, { name: "NodeJS" }, { name: "JavaScript" }, { name: "FrontEnd" }, { name: "BackEnd" }, { name: "Mongodb" },
            { name: "Game Design" }, { name: "AR" }, { name: "React Native" }, { name: "Sockets.io" }]
        }
    }
    dumpListItems = () => {
        return this.state.content.map((item) => <li><Button text={item.name} /></li>)
    }
    render = () => {
        let dumpList = this.dumpListItems();
        return (
            <ul className={`button-list`}>
                {dumpList}
            </ul>
        );
    }
}