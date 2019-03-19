import React, {Component} from "react";
import ParallaxHelper from "../../helpers/ParallaxHelper";
import Circle from "../../assets/SVG/Parallax/Circle.svg";
import Triangle from "../../assets/SVG/Parallax/Triangle.svg";
import Square from "../../assets/SVG/Parallax/Square.svg";
import X from "../../assets/SVG/Parallax/X.svg";

class Parallax extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount:12,
            icons:[Circle,Triangle, Square, X]
        }
    }

    createElement = () => {
        for(let i = 0; i < this.state.amount; i++){
            return(
                <img src={this.state.icons[this.getRandomNumber(4)]}  alt="icon" />

            )
        }
    }
    getRandomNumber = (int) => {
        return Math.floor(Math.random() * Math.floor(int));
    }
    render = () => {

        return(
            <div id="parallax-container">
                {this.createElement()}
            </div>

        );
    }
}

export default Parallax