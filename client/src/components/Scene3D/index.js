import React, { Component } from "react";
import PinkImage from "../../assets/images/pink.png";
import BlueImage from "../../assets/images/blue.png";
import GreenImage from "../../assets/images/green.png";
import PurpleImage from "../../assets/images/purple.png";
import "./style.css";

class Scene3D extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addclass: false,
            releaseContain: false,
            imageClicked: '',
        }
    }
    handleStateChange = (e) => {
        let ident = e.target.id;
/*         let newState ={...this.state};
        this.state.addclass ? newState.addclass = false : newState.addclass = true; */
        this.state.addclass ? this.setState({ addclass: false, releaseContain:false }) : this.setState({ addclass: true, releaseContain:true });
        this.handleSelectionOpacity(ident);
        this.handleImageExpansion(ident);
    }
    handleImageExpansion = (id) => {
        console.log(id);
        if(this.state.releaseContain){
            document.getElementById(id).classList.add("image-size");
            document.getElementById(id).classList.remove("expand");
            document.getElementById(id).classList.remove("start-anim");
            document.getElementById("card-container").classList.add("container-3d-width");
            document.getElementById("card-container").classList.add("overflow-hide-all");
        }else{
            document.getElementById(id).classList.remove("image-size");
            document.getElementById(id).classList.add("expand");
            document.getElementById(id).classList.add("start-anim");
            document.getElementById("card-container").classList.remove("container-3d-width");
            document.getElementById("card-container").classList.remove("overflow-hide-all");
        }


    }
    handleSelectionOpacity = (id) => {

        if(this.state.releaseContain){
            switch (id) {
                case "image1":
                document.getElementById("image2").classList.add("disappear");
                document.getElementById("image3").classList.add("disappear");
                document.getElementById("image4").classList.add("disappear");
    
                    break;
                case "image2":
                document.getElementById("image1").classList.add("disappear");
                document.getElementById("image3").classList.add("disappear");
                document.getElementById("image4").classList.add("disappear");
                    break;
                case "image3":
                document.getElementById("image1").classList.add("disappear");
                document.getElementById("image2").classList.add("disappear");
                document.getElementById("image4").classList.add("disappear");
                    break;
                case "image4":
                document.getElementById("image1").classList.add("disappear");
                document.getElementById("image2").classList.add("disappear");
                document.getElementById("image3").classList.add("disappear");
                    break;
                default:
                    break;
            }
        }else{
            switch (id) {
                case "image1":
                document.getElementById("image2").classList.remove("disappear");
                document.getElementById("image3").classList.remove("disappear");
                document.getElementById("image4").classList.remove("disappear");
    
                    break;
                case "image2":
                document.getElementById("image1").classList.remove("disappear");
                document.getElementById("image3").classList.remove("disappear");
                document.getElementById("image4").classList.remove("disappear");
                    break;
                case "image3":
                document.getElementById("image1").classList.remove("disappear");
                document.getElementById("image2").classList.remove("disappear");
                document.getElementById("image4").classList.remove("disappear");
                    break;
                case "image4":
                document.getElementById("image1").classList.remove("disappear");
                document.getElementById("image2").classList.remove("disappear");
                document.getElementById("image3").classList.remove("disappear");
                    break;
                default:
                    break;
            }
        }
        

    }
    resetCardOpacity = () => {
        document.getElementById("image1").classList.remove("disappear");
        document.getElementById("image2").classList.remove("disappear");
        document.getElementById("image3").classList.remove("disappear");
        document.getElementById("image3").classList.remove("disappear");
    }
    render = () => {
        return (
            <div>
                <div className="sub-text">
                    <p id="text1" className="subtitle">Home</p>
                    <p id="text2" className="subtitle">About</p>
                    <p id="text3" className="subtitle">Labs</p>
                    <p id="text4" className="subtitle">Contact</p>
                </div>
                <div className="scene">
                    <div className="parent-container">
                        <div id="card-container" className={`container-3d ${this.state.releaseContain ? "" : "container-3d-width"} overflow-hide-all ${this.state.addclass ? "container-3d-origin" : ""}`}>
                            <div className="card-3d" >
                                <img data-ident="1" id="image1" className="image-size image-opacity" onClick={this.handleStateChange} src={PinkImage} alt="atl" />
                                <img data-ident="2" id="image2" className="image-size image-opacity" onClick={this.handleStateChange} src={PurpleImage} alt="atl" />
                                <img data-ident="3" id="image3" className="image-size image-opacity" onClick={this.handleStateChange} src={BlueImage} alt="atl" />
                                <img data-ident="4" id="image4" className="image-size image-opacity image-position-4"   onClick={this.handleStateChange} src={GreenImage} 
                                alt="atl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Scene3D;