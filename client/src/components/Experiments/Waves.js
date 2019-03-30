import React, {Component} from "react";
import $ from "../../helpers/WavesHelper.js";
import "./styles/Waves.css";

export class Waves extends Component {
    constructor(){
        super();
        this.state = {
            test: false
        }
    }
    componentDidMount = () => {
        $.init();
    }
    render = () => {
        return(
            <canvas className="wave-adjust"></canvas>
        );
    }

}