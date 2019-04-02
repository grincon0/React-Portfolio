
import React, { Component } from "react";
import ParallaxHelper from "../../helpers/ParallaxHelper";
import Circle from "../../assets/SVG/Parallax/Circle.svg";
import Triangle from "../../assets/SVG/Parallax/Triangle.svg";
import Square from "../../assets/SVG/Parallax/Square.svg";
import X from "../../assets/SVG/Parallax/X.svg";

import Circle2 from "../../assets/SVG/circle.svg";
import Triangle2 from "../../assets/SVG/triangle.svg";
import Square2 from '../../assets/SVG/square.svg';
import Rectangle from "../../assets/SVG/rectangle.svg";


import "./style.css";


class Parallax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 10,
            canAppear: false,
            createElements: [],
            icons: [Circle, Triangle, Square, X],
            height: 25,
            width: 25,
            readyToDump: false,
            readyToKill: false,

        }
    }
    componentDidMount = () => {
        if (!this.state.readyToDump) {
            let imgArr = [];
            for (let i = 0; i < this.state.amount; i++) {
                imgArr.push(this.createElement(this.state.amount - i));
            }
            this.setState({ createElements: imgArr, readyToDump: true });

            /*             let test = new ParallaxHelper();
                        test.watch(); */
            setTimeout(() => {
                let newState = { ...this.state };
                newState.canAppear = true;
                this.setState(newState);
            }, 1000);
            ParallaxHelper.watch();
        }
    }
    componentWillUnmount = () => {
        clearTimeout(this.opacityTimer);
        ParallaxHelper.kill();
    }
    createElement = (key) => {
        return (
            <img
                className={`base-parallax parallax-img-${key}`}
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
        for (let i = 0; i < this.state.amount; i++) {
            this.createElement();
        }
    }
    render = () => {
        let elem;
        if (this.state.readyToDump) {
            elem = this.state.createElements;
        }

        return (
            <div id="img-container" className={`${this.state.canAppear ? "ease-opacity" : ""}`}>
                {elem || null}
            </div>
        );
    }
}

export default Parallax;