import React, {Component} from "react";
import MenuIcon from "../../assets/SVG/MenuIcon.svg";
import "./style.css";

class CustomNavBar extends Component {
    state = {
        collapsed: false
    }
    componentDidMount = () => {

    }
    render = () => {
        return(
            <nav className="CustomNav">
                <a href="#">Home</a>
                <button className="CustomNavBtn">
                     <img src={MenuIcon} width={40} height={41} alt="icon"></img>
                </button>
            </nav>
        );
    }
}

export default CustomNavBar;