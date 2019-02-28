import React, { Component } from "react";
import colorwheel from "../../assets/SVG/Icons/colorwheel.svg";
import art from "../../assets/SVG/Icons/art.svg";
import ideaa from "../../assets/SVG/Icons/ideaa.svg";
import liftoff from "../../assets/SVG/Icons/liftoff.svg";
import paint from "../../assets/SVG/Icons/paint.svg";
import performance from "../../assets/SVG/Icons/performance.svg";
import car from "../../assets/SVG/Icons/car.svg";
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
            default:
                break;
        }
    }
    render = () => {

        let SVGimage = this.handleSVGProp();

        return (
            <img src={SVGimage} width={this.props.width} height={this.props.height} alt="icon"></img>

        )
    }

}

export default SVGIcon;