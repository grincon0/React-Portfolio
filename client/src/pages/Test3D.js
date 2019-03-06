import React, { Component } from "react";
import Scene3D from "../components/Scene3D/index";
import Landing from "../pages/Landing";
import "./styles/Texts3D.css";

class Test3D extends Component {
    state = {
        test: "test",
        hideLanding: true,
    }
    handleStateChange = () => {
        console.log("this function works");
        this.setState({hideLanding : false});
    }
    handleTester = () => {
        console.log("this function works");
    }
    render = () => {
        return (
            <div>
                <Scene3D
                tester={this.handleStateChange}
                />
                <Landing 
                classes={this.state.hideLanding ? "hideall" : "show-container"}
                />
            </div>
        );
    }
}

export default Test3D;