import React, { Component } from "react";
/* import NavIcon from "../NavIcon/index"; */
import "./style.css";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: false
        }
    }
/*     handleCollapse = () => {
        if(!this.state.collapse){
            this.setState({collapse: true});
        }else{
            this.setState({collapse: false});
        }
    }
 */
    render = () => {
        return (
            <nav id="nav-menu" className={`nav-block-flex ${this.props.collapseMenu ? "nav-menu-show" : ""}`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>
        );
    }
}

export default Menu;