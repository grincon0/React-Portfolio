import React, { Component } from "react";
/* import NavIcon from "../NavIcon/index"; */
import "./style.css";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display : false

        }
    }
    componentDidMount = () => {
            
    }
    render = () => {
        if(!this.state.display){
            setTimeout(() => {
                this.setState({display: true});
            }, 500)
        }
        return (
            <nav id="nav-menu" className={`nav-block-flex ${this.props.collapseMenu ? "nav-menu-show" : ""} ${this.state.display ? "display-fix" : ""}`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>
        );
    }
}

export default Menu;