import React, { Component } from "react";
import PinkImage from "../../assets/images/pink.png";
import BlueImage from "../../assets/images/blue.png";
import GreenImage from "../../assets/images/green.png";
import PurpleImage from "../../assets/images/purple.png";
import { SpanGenerator } from "../Customs/index";
import "./style.css";



class Scene3D extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addclass: false,
      releaseContain: false,
      imageClicked: '',
      canRender: false,
    }
  }
  componentDidMount = () => {
    this.renderTimer = setTimeout(() => {
      let newState = { ...this.state };
      newState.canRender = true;
      this.setState(newState);
    }, 1500);
  }
  componentWillUnmount = () => {
    clearTimeout(this.renderTimer);
  }
  handleStateChange = (e) => {
    const path = e.target.getAttribute("value")

    this.props.transitioner(path);


    let ident = e.target.id;
    this.state.addclass ? this.setState({ addclass: false, releaseContain: false }) : this.setState({ addclass: true, releaseContain: true });
    this.handleSelectionOpacity(ident);
    this.handleImageExpansion(ident);
  }
  handleImageExpansion = (id) => {

    if (this.state.releaseContain) {
      document.getElementById(id).classList.add("image-size");
      document.getElementById(id).classList.remove("expand");

      this.handleImageAnimation(id, "remove");
      /* document.getElementById(id).classList.remove("start-anim"); */
      document.getElementById("card-container").classList.add("container-3d-width");
      document.getElementById("card-container").classList.add("overflow-hide-all");
    } else {
      document.getElementById(id).classList.remove("image-size");
      document.getElementById(id).classList.add("expand");
      this.handleImageAnimation(id, "add");
      /* document.getElementById(id).classList.add("start-anim"); */
      document.getElementById("card-container").classList.remove("container-3d-width");
      document.getElementById("card-container").classList.remove("overflow-hide-all");
    }


  }
  handleImageAnimation = (id, action) => {

    if (action === "remove") {
      switch (id) {
        case "image1":
          document.getElementById(id).classList.remove("start-animD");
          break;
        case "image2":
          document.getElementById(id).classList.remove("start-animC");
          break;

        case "image3":
          document.getElementById(id).classList.remove("start-animB");
          break;

        case "image4":
          document.getElementById(id).classList.remove("start-anim");
          break;
        default:
          break;
      }
    } else if (action === "add") {
      switch (id) {
        case "image1":
          document.getElementById(id).classList.add("start-animD");
          break;
        case "image2":
          document.getElementById(id).classList.add("start-animC");
          break;

        case "image3":
          document.getElementById(id).classList.add("start-animB");
          break;

        case "image4":
          document.getElementById(id).classList.add("start-anim");
          break;
        default:
          break;
      }

    }
  }
  handleSelectionOpacity = (id) => {
    if (this.state.releaseContain) {
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
    } else {
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
  handleTextAppear = (e) => {
    if (e.target.id === "image4") {
      document.getElementById("text1").classList.add("subtitle-appear-1");
    } else if (e.target.id === "image3") {
      document.getElementById("text2").classList.add("subtitle-appear-2");
    } else if (e.target.id === "image2") {
      document.getElementById("text3").classList.add("subtitle-appear-3");
    } else {
      document.getElementById("text4").classList.add("subtitle-appear-4");
    }

  }
  handleTestReset = (e) => {
    switch (e.target.id) {
      case "image4":
        document.getElementById("text1").classList.remove("subtitle-appear-1");
        document.getElementById("text1").classList.add("subtitle-reset-1");
        setTimeout(() => {
          document.getElementById("text1").classList.remove("subtitle-reset-1");
        }, 200);
        break;
      case "image3":
        document.getElementById("text2").classList.remove("subtitle-appear-2");
        document.getElementById("text2").classList.add("subtitle-reset-2");
        setTimeout(() => {
          document.getElementById("text2").classList.remove("subtitle-reset-2");
        }, 200);
        break;
      case "image2":
        document.getElementById("text3").classList.remove("subtitle-appear-3");
        document.getElementById("text3").classList.add("subtitle-reset-3");
        setTimeout(() => {
          document.getElementById("text3").classList.remove("subtitle-reset-3");
        }, 200);
        break;
      case "image1":
        document.getElementById("text4").classList.remove("subtitle-appear-4");
        document.getElementById("text4").classList.add("subtitle-reset-4");
        setTimeout(() => {
          document.getElementById("text4").classList.remove("subtitle-reset-4");
        }, 200);
        break;
      default:
        break;
    }
  }
  resetCardOpacity = () => {
    document.getElementById("image1").classList.remove("disappear");
    document.getElementById("image2").classList.remove("disappear");
    document.getElementById("image3").classList.remove("disappear");
    document.getElementById("image4").classList.remove("disappear");
  }
  removeContainerVisibility = () => {
    if (this.state.releaseContain) {
      document.getElementById("3D-contain").classList.add("hideTest");
    }
  }
  render = () => {
    if (this.state.releaseContain) {
      this.removeContainerVisibility();
    }

    return (
      <div>
        <div id="3D-contain">
          <div className="sub-text">
            <p id="text1" className="subtitle">Home</p>
            <p id="text2" className="subtitle">About</p>
            <p id="text3" className="subtitle">Projects</p>
            <p id="text4" className="subtitle">Contact</p>
          </div>
          <div className="sub-intro">
            <p>Click on one of the cards to begin</p>
          </div>
          <div className="scene">
            <div className="parent-container">
              <div id="card-container" className={`container-3d ${this.state.releaseContain ? "" : "container-3d-width"} ${this.state.addclass ? "container-3d-origin" : ""}`}>
                <div className="card-3d" >
                  <img data-ident="1" value="contact" id="image1" className="image-size image-opacity" onClick={(e) => this.handleStateChange(e)} onMouseOver={this.handleTextAppear} onMouseOut={this.handleTestReset} src={PinkImage} alt="atl" />
                  <img data-ident="2" value="projects" id="image2" className="image-size image-opacity" onClick={(e) => this.handleStateChange(e)} onMouseOver={this.handleTextAppear} onMouseOut={this.handleTestReset} src={PurpleImage} alt="atl" />
                  <img data-ident="3" value="about" id="image3" className="image-size image-opacity" onClick={(e) => this.handleStateChange(e)} onMouseOver={this.handleTextAppear} onMouseOut={this.handleTestReset} src={BlueImage} alt="atl" />
                  <img data-ident="4" value="about" id="image4" className="image-size image-opacity image-position-4" onClick={(e) => this.handleStateChange(e)} onMouseOver={this.handleTextAppear} onMouseOut={this.handleTestReset} src={GreenImage}
                    alt="atl"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    );
  }

}

export default Scene3D;