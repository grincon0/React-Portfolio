import React, { Component } from "react";
import $ from "../../helpers/WavesHelper.js";
import "./styles/Waves.css";

export class Waves extends Component {
    constructor(){
        super();
        this.state = {
            move: false
        }
    }
    componentDidMount = () => {
        let waveTimer = setTimeout(() => {
            this.setState({move: true});
        },1000)
        $.init();
    }
    render = () => {
        return(
            <canvas className={`wave-adjust ${this.state.move ? "move-wave" : ""}`}></canvas>
        );
    }

}