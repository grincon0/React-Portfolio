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
        this.waveTimer = setTimeout(() => {
            this.setState({move: true});
        },1000)
        $.init();
    }
    componentWillUnmount = () => {
        clearTimeout(this.waveTimer);
    }
    render = () => {
        return(
            <canvas className={`wave-adjust ${this.state.move ? "move-wave" : ""}`}></canvas>
        );
    }

}