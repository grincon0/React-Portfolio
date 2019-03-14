import React, { Component } from "react";
import About from "./sections/About";
import Scene3D from "../components/Scene3D/index";

import Landing from "../pages/Landing";
import "./styles/Texts3D.css";

class Test3D extends Component {
    state = {
        test: "test",
        hideLanding: true,
    }
/*     componentDidMount = () => {
        if(document.getElementById("body").classList.contains("page-is-changing")){
          setTimeout(() => {
            document.getElementById("body").classList.remove("page-is-changing");
            this.setState({showContent: true});
          }, 1000);
        }
        
      } */
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
                <About 
                classes={this.state.hideLanding ? "hideall" :  "show-container"}
                canRender={this.state.hideLanding}
                />
            </div>
        );
    }
}

export default Test3D;