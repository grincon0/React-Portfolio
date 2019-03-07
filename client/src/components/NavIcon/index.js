import React, {Component} from "react";
import "./style.css";

class NavIcon extends Component {
    constructor(props){
        super(props)
        this.state ={
            transform: false
        }
    }

    render = () => {
        return(
            <div id="burger-icon">
                <i></i>
                <i></i>
                <i></i>
            </div>
        )
    }
}

export default NavIcon;