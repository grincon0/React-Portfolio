import React, { Component } from "react";
import Scene3D from "../components/Scene3D/index";

class Test3D extends Component {
    state = {
        test: "test"
    }
    render = () => {
        return(
            <Scene3D />
        );
    }
}

export default Test3D;