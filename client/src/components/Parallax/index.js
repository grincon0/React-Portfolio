
import React, {Component} from "react";
import ParallaxHelper from "../../helpers/ParallaxHelper";
import Circle from "../../assets/SVG/Parallax/Circle.svg";
import Triangle from "../../assets/SVG/Parallax/Triangle.svg";
import Square from "../../assets/SVG/Parallax/Square.svg";
import X from "../../assets/SVG/Parallax/X.svg";

import "./style.css";


class Parallax extends Component {
    constructor(props){
        super(props);
        this.state = {
            amount:12,
            createElements : [],
            icons:[Circle,Triangle, Square, X],
            height:25,
            width: 25,
            readyToDump: false
        }
    }
    componentDidMount = () => {
        if(!this.state.readyToDump){
            let imgArr = [];
            for(let i = 0; i < this.state.amount; i++){
                imgArr.push(this.createElement(this.state.amount - i));
            }
            this.setState({createElements : imgArr, readyToDump: true});
        }
    }
    componentDidUpdate = () => {
        console.log(this.state.createElements)
    }
    createElement = (key) => {
            return(
                <img 
                className="parallax-img" 
                src={this.state.icons[this.getRandomNumber(4)]}  
                width={this.state.width}
                height={this.state.height}
                alt="icon" 
                key={key}
                />
            );
    }
    getRandomNumber = (int) => {
        return Math.floor(Math.random() * Math.floor(int));
    }
    getImgElements = () => {
        for(let i = 0; i < this.state.amount; i++){
            this.createElement();
        }
    }
    render = () => {
        let elem;
        if(this.state.readyToDump){
            /* elem = this.state.createElements; */
           
            
        }
        let test = new ParallaxHelper();
        test.watch();
        return(
                <img 
                className="parallax-img" 
                src={this.state.icons[this.getRandomNumber(4)]}  
                width={this.state.width}
                height={this.state.height}
                alt="icon" 
                key={1}
                />
            
        );
    }
}

export default Parallax;