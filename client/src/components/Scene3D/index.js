import React, { Component } from "react";
import "./style.css";

const textStyle = {
    transform: [{ rotate: '0deg' }]
}


class Scene3D extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addclass: false,
        }
    }
    handleStateChange = () => {
        this.state.addclass ? this.setState({ addclass: false }) : this.setState({ addclass: true });
    }
    render = () => {
        return (
            <div>
                <div className="sub-text">
                    <p id="text1"className="subtitle">Home</p>
                    <p id="text2" className="subtitle">About</p>
                    <p id="text3" className="subtitle">Labs</p>
                    <p  id="text4" className="subtitle">Contact</p>
                </div>
                <div className="scene">
                    <div className="parent-container">
                        <div className={`container-3d ${this.state.addclass ? "container-3d-origin" : ""}`}>
                            <div className="card-3d" onClick={this.handleStateChange}>
                                <img id="image1" src="https://codyhouse.co/demo/3d-animated-mockup/img/cd-app-image.png" alt="atl" />
                                <img id="image2" src="https://codyhouse.co/demo/3d-animated-mockup/img/cd-app-image.png" alt="atl" />
                                <img id="image3" src="https://codyhouse.co/demo/3d-animated-mockup/img/cd-app-image.png" alt="atl" />
                                <img id="image4" src="https://codyhouse.co/demo/3d-animated-mockup/img/cd-app-image.png" alt="atl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Scene3D;