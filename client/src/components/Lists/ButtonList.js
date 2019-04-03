import React, { Component } from "react";
import { Button } from "../Buttons/index";
import "./styles/ButtonList.css";

export class ButtonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: false,
            count: 9,
            content: [{ name: "ReactJS" }, { name: "NodeJS" }, { name: "JavaScript" }, { name: "BackEnd" }, { name: "Mongodb" },
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
                {/*                     <li>
                        <Button
                            text="ReactJS"
                        />
                    </li>


                    <li>
                        <Button
                            text="Node.Js"
                        />
                    </li>
                    <li>
                        <Button
                            text="Javascript"
                        />
                    </li>
                    <li>
                        <Button
                            text="Mongodb"
                        />
                    </li>
                    <li>
                        <Button
                            text="Game Design"
                        />
                    </li>
                    <li>
                        <Button
                            text="Augmented Reality"
                        />
                    </li>
                    <li>

                        <Button
                            text="React-Native" />
                    </li> */}
            </ul>
        );
    }
}