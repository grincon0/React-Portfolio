import React from "react";
import "./style.css";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav-back">

            <ul className="navbar-nav full">
                <li className="nav-item">
                    <a href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#">Search</a>
                </li>
                <li className="nav-item">
                    <a href="#">Saved</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;