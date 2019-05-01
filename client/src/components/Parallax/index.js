
import React, { Component } from "react";
import ParallaxHelper from "../../helpers/ParallaxHelper";
import Circle from "../../assets/SVG/Parallax/Circle.svg";
import Triangle from "../../assets/SVG/Parallax/Triangle.svg";
import Square from "../../assets/SVG/Parallax/Square.svg";
import X from "../../assets/SVG/Parallax/X.svg";
import GlobalStates from "../Global/index";

import Circle2 from "../../assets/SVG/circle.svg";
import Triangle2 from "../../assets/SVG/triangle.svg";
import Square2 from '../../assets/SVG/square.svg';
import Rectangle from "../../assets/SVG/rectangle.svg";


import "./style.css";



    let ParallaxEffect;



class Parallax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 10,
            amountFigure: 2,
            type: "img",
            canAppear: false,
            createElements: [],
            icons: [Circle, Triangle, Square, X],
            height: 25,
            width: 25,
            readyToDump: false,
            readyToKill: false,
            ParallaxEffect: ""

        }
    }
    componentDidMount = () => {
        
        
        if(!this.props.shapes){
            this.setState({type:"img"});
           

            if (!this.state.readyToDump) {
                let imgArr = [];
                for (let i = 0; i < this.state.amount; i++) {
                    imgArr.push(this.createElement(this.state.amount - i));
                }
                this.setState({ createElements: imgArr, readyToDump: true });
                /* ParallaxHelper.watch(); */
    
                this.startParallax();
    
                setTimeout(() => {
                    let newState = { ...this.state };
                    newState.canAppear = true;
                    this.setState(newState);
                }, 1000);
    
            }
        }else{
          
            this.setState({type:"figure"});
            

            if (!this.state.readyToDump) {
                let figureArr = [];
                for (let i = 0; i < this.state.amountFigure; i++) {
                    figureArr.push(this.createElement(i += 1));
                }
                this.setState({ createElements: figureArr, readyToDump: true });
                this.startParallax();
                
    
                setTimeout(() => {
                    let newState = { ...this.state };
                    newState.canAppear = true;
                    this.setState(newState);
                }, 1000);
    
            }
        }
        
    }
    componentDidUpdate = () => {
     
       
    }
    changeGlobalState = (typeElement) => {
      
        if( (this.props.shapes) || (GlobalStates.parallax.type !== typeElement)){
            GlobalStates.parallax.type = typeElement;
        }else{
            return;
        }
    }
    startParallax = async () => {
       await this.instantiateParallax();
        //this.watchParallax();

    }
    instantiateParallax = () => {
        let typeElem = "";

        if(this.props.shapes){
            typeElem = "figure";
        }else{
            typeElem = "img";
        }
     

        this.changeGlobalState(typeElem);

        
        
        /* if(!GlobalStates.parallax.init){ */
            ParallaxEffect = new ParallaxHelper();

        this.watchParallax();
        
    
    }
    watchParallax = () => {
        ParallaxEffect.watch();
    }
    killParallax = () => {
        
        ParallaxEffect.kill();
    }

    componentWillUnmount = () => {
        this.killParallax();
        clearTimeout(this.opacityTimer);
        
        
    }
    createElement = (key) => {

        if(!this.props.shapes){
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
        }else{
            return(
                <figure
                    className={`base-parallax parallax-figure-${key}`}
                    alt="icon"
                    key={key}
                />

                
            );
        }
  
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