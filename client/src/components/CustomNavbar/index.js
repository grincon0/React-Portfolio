import React, { Component } from "react";
import MenuIcon from "../../assets/SVG/MenuIcon.svg";
import "./style.css";

class CustomNavBar extends Component {
    state = {
        collapsed: false
    }
    componentDidMount = () => {

    }
    render = () => {
        return (
            <nav className="CustomNav">
                <div className="CustomAnchors">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">PORTFOLIO</a>
                    <a href="#">CONTACT</a>
                </div>
                <div>
                <button className="CustomNavBtn">
                    <img src={MenuIcon} width={40} height={41} alt="icon"></img>
                </button>
                </div>

            </nav>
        );
    }
}

export default CustomNavBar;