import React, {Component} from "react"
import "./styles/Button.css";

export class Button extends Component {
    constructor(props){
        super(props);
        this.state ={
            pressed: false
        }
    }

    render = () => {
        return(
            <div className={`button-container`}>
                <button className={`button-mask`}><p className={`button-text`}>{this.props.text}</p></button>
            </div>

        );
        
    }
}