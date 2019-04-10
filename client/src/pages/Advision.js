import React, { Component, useState, useEffect } from "react";
import FlexContainer from "../components/FlexContainer/index";
import Flexbox from "../components/Flexbox/index";
import GlobalStates from "../assets/js/global";
import { SpanGenerator } from "../components/Customs/index";
import SVGIcon from "../components/SVGIcon/index"
import "./styles/Advision.css";

import { Route, withRouter, Redirect } from 'react-router-dom';



export default class Advision extends Component {
    constructor() {
        super();
        this.state = {
            animated: false,
            transition: false,
            data: {
                tier: "High",
                id: "1",
                name: "Ad-Vision",
                type: ["Native", "Mobile Augmented Reality"],
                time: "Early 2019",
                github: "https://github.com/Wizkym/Ad-Vision",
                sub: "An ViroReact AR application that render realtime information on your smart phone",
                description: "Ad-Vision is an Augmented Reality object and text recognition mobile application that renders ads to the user. Using real-world objects/images that it targets, the application will be able to render different forms of media, such as textual information, 3-D objects, and even graphical effects on the screen.",
                role: "I was responsible for creating an easy to use abstration for ViroReact's built in particle effect generators. Along with testing and creating all 3D compenents that rendered text, video formats, and meshes, I created animations that seamlessly brought the 3D components to life.",
                stack: ["ViroReact", "React Native", "Objective-C", "Android SDK", "Xcode", "Node.js", "Express.js", "JavaScript ES6", "Google Cloud Platform", "Bing Custom Search API"]
            },
            showAbout:false,
            showDetail:false,
            showStack:false
        }
    }
    componentDidMount = () => {
        this.setScrollEventListener();
    }
    componentWillUnmount = () => {
        this.removeScrollEventListener();
    }
    handleClassesScrollTop = () => {
       /*  console.log(document.documentElement.scrollTop || document.body.scrollTop); */

        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

        if(this.state.showAbout === false && scrollTop > 400){
            this.setState({showAbout: true});
            
        }

        if(this.state.showDetail === false && scrollTop > 800){
            this.setState({showDetail: true});
        }
        if(this.state.showStack === false && scrollTop > 1200){
         
            this.setState({showStack: true});
        }
    }
    boundScrollTop = () => {
        this.handleClassesScrollTop();
    }
    setScrollEventListener = () => {
        document.addEventListener('scroll', this.boundScrollTop);
    }
    removeScrollEventListener = () => {
     
            document.removeEventListener('scroll', this.boundScrollTop);
        
    }
    handleGlobalState = () => {
        GlobalStates.setAnimate(true);
    }
    handleTransition = (event, history) => {
        /* event.preventDefault(); */
        /* old version for body */
        this.handleGlobalState();
        setTimeout(() => {
            this.props.history.push('/projects');
        }, 2300);

    }
    render = () => {
        let techStack = this.state.data.stack.map((tech, i) => <li key={i}>{tech}</li>)

        return (
            <section id="AD-VISION">
                <Flexbox classes={`nav-section`}>
                <Route render={({ history }) => (
                    <div onClick={(e) => this.handleTransition(e)} className={`h2-block`}>
                        <h2 >Go back</h2>
                    </div>)}/>
                </Flexbox>
                <Flexbox classes={`ad-title-box`}>
                    <div className={`title-header color-${this.state.data.id}`}>
                        <h1>{this.state.data.name}</h1>
                    </div>

                    <div className={`color-${this.state.data.id}`}>
                        <p>{this.state.data.sub}</p>
                    </div>
                </Flexbox>
                <Flexbox classes={`ad-title-lower`}>
                    <div className={`lower-left`}>
                        <span>Period:</span><p>{this.state.data.time}</p>
                    </div>
                    <div className={`lower-right`}>
                        <span>Type:</span><p>{this.state.data.type[1]}</p>
                    </div>
                </Flexbox>
                <Flexbox classes={`ad-about ${this.state.showAbout ? "show-this" : ""} `}>
                    <div className={`about-header`}>
                        <h1>About</h1><span>.</span>
                    </div>
                    <div className={`about-wrap`}>
                        <p>{this.state.data.description}</p>
                    </div>
                    <div className={`about-links`}>
                        <a className={`github-link`} href={this.state.data.github} target="_blank"><SVGIcon classes="octo-dark" src="octocat" height={75} width={75} /></a>
                        {this.state.data.link ? <a className={`web-link`} href={this.state.data.link} target="_blank"><SVGIcon classes="web-dark" src="internet" height={75} width={75} /></a> : ""}

                    </div>
                </Flexbox>
                <Flexbox classes={`ad-role ${this.state.showDetail ? "show-this" : ""}`}>
                    <div className={`about-header`}>
                        <h1>Details</h1><span>.</span>
                    </div>
                    <div className={`about-wrap`}>
                        <p>{this.state.data.role}</p>
                    </div>
                </Flexbox>
                <Flexbox classes={`ad-stack ${this.state.showStack? "show-this" : ""}`}>
                    <div className={`stack-header`}>
                        <h1>Tech Stack</h1>
                    </div>
                    <i className={`portal`}>

                    </i>
                    <div className={`stack-list`}>
                        <ul>
                            {techStack}
                        </ul>

                    </div>

                </Flexbox>

            <div id={`parallax-container`} className={`hide-now`}></div>
            </section>
        );
    }


}