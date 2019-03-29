import React, { Component } from "react";
import "./styles/Name.css";

export class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            loadBefore: false
        }
    }

    componentDidMount = () => {
        
    /*     setTimeout(() =>{ */
            this.setState({ ready: true });
            /* this.addTransitionEndListener(); */
   /*      },600); */
        
    }
    addTransitionEndListener =()=> {
        const transtion = document.querySelector('.last-char');
        transtion.addEventListener('animationend', () => {
            console.log('Animation ended');
            this.setState({loadBefore : true});
        });
    }
    render = () => {
        return (
            <section id="Name" className={`Animated ${this.state.ready ? "show-number" : ""} ${this.state.loadBefore ? "show-pseudo" : "hide-psuedo"}`}>
               <h1>
                    <span>G</span>
                    <span>E</span>
                    <span>O</span>
                    <span>R</span>
                    <span>G</span>
                    <span className={`end-top`}>E</span>
                    <span>R</span>
                    <span>I</span>
                    <span>N</span>
                    <span>C</span>
                    <span>O</span>
                    <span className="last-char">N</span>
                </h1> 
{/* 
                <div className="mask-number">
                    <div className="mask-back">01</div>
                    <div className="mask-front">
                        <div className="mask-overlay">01</div>
                    </div>
                </div> */}
            </section>


        );
    }


}