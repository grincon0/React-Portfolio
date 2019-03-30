import React, {Component} from "react"
import "./styles/Waves.css";

export class Waves extends Component {
    constructor(){
        super();
        this.state = {
            test: false
        }
    }
    render = () => {
        return(
            <canvas></canvas>
        );
    }

}