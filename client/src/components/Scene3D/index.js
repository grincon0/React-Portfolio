import React, { Component } from "react";
import "./style.css";


class Scene3D extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addclass: false,
        }
    }
    handleStateChange = () => {
        this.state.addclass ? this.setState({addclass: false}) : this.setState({addclass : true});
    }
    render = () => {
        return (
            <div className="scene">
                <div className={`container-3d ${this.state.addclass ? "container-3d-origin" : ""}`}>
                    <div className="card-3d" onClick={this.handleStateChange}>
                        <img  src="https://codyhouse.co/demo/3d-animated-mockup/img/cd-app-image.png" alt="atl" />
                    </div>
                    <div className="card-3d"  onClick={this.handleStateChange}>
                        <img src="https://codyhouse.co/demo/3d-animated-mockup/img/cd-app-image.png" alt="atl" />
                    </div>
                </div>
            </div>

        )
    }

}

export default Scene3D;