import React, { Component } from "react";
import colorwheel from "../../assets/SVG/Icons/colorwheel.svg";
import art from "../../assets/SVG/Icons/art.svg";
import github from "../../assets/SVG/Logos/githublogo2.svg";
import ideaa from "../../assets/SVG/Icons/ideaa.svg";
import octocat from "../../assets/SVG/Logos/github-octocat.svg";
import liftoff from "../../assets/SVG/Icons/liftoff.svg";
import linkedin from '../../assets/SVG/Logos/linkedin2.svg';
import internet from "../../assets/SVG/Logos/internet.svg";
import paint from "../../assets/SVG/Icons/paint.svg";
import performance from "../../assets/SVG/Icons/performance.svg";
import car from "../../assets/SVG/Icons/car.svg";
import palm from "../../assets/SVG/palm2.svg";
import volcan from "../../assets/SVG/volcan.svg";

import "./style.css";

class SVGIcon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            svg: "testing"
        }
    }
    handleSVGProp = () => {
        switch (this.props.src) {
            case "art":
                return art;
            case "ideaa":
                return ideaa;
            case "colorwheel":
                return colorwheel;
            case "liftoff":
                return liftoff;
            case "palm":
                return palm;
            case "volcan":
                return volcan;
            case "octocat":
                return octocat;
            case "internet":
                return internet;
            case "linkedin":
                return linkedin;
            case "github":
                return github;
            default:
                break;
        }
    }
    render = () => {

        let SVGimage = this.handleSVGProp();

        return (
            <img id="svg-image" className={this.props.classes} src={SVGimage} width={this.props.width} height={this.props.height} alt="icon"></img>

        )
    }

}

export default SVGIcon;