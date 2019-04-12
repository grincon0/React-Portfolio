import React, { Component } from "react";
import FlexContainer from "../components/FlexContainer/index";
import Flexbox from "../components/Flexbox/index";
import GlobalStates from "../assets/js/global";
import { SpanGenerator } from "../components/Customs/index";
import Slider from '../components/Slider/index';
import SVGIcon from "../components/SVGIcon/index"
import "./styles/Advision.css";
import { Route, Redirect } from "react-router-dom";

export default class PetPerfect extends Component {
    constructor() {
        super();
        this.state = {
            animated: false,
            transition: false,
            data: {
                tier: "Mid",
                id:"3",
                name: "Pet Perfect",
                type: ["Web App", "Web Design"],
                time: "Fall 2018",
                github: "https://github.com/DavidDBaker/pet-perfect",
                link: "https://pet-perfect.herokuapp.com/",
                sub: "The Perfect Site for the passionate pet owner.",
                description: "Pet Perfect is a website that allows users to find local pet shops, veterinarians, pet-friendly parks within a 10-mile radius.",
                role: {
                    paragraph: {
                        one: "As the first project we tackled as web developers, our team wanted to created web app that provides a great solution. Our apprecitate for our furry companions prompted us to pursue the idea of a one-stop-shop for the passionate pet owner",
                        two: "In addition to UI Design, my main focus was intergrating the Google Maps API for the Front-end. The user is able to select from category of pet-related services to search for within a 10 miles radius of the address they provided.",

                    }
                },
                stack: ["Google Maps API", "Petfinder API", "Vue.js", "Sass", "Bootstrap 5", "HTML5 - Semantic UI", "Responsive Web Design"]
            },
            showAbout: false,
            showDetail: false,
            showStack: false
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

        if (this.state.showAbout === false && scrollTop > 400) {
            this.setState({ showAbout: true });

        }

        if (this.state.showDetail === false && scrollTop > 800) {
            this.setState({ showDetail: true });
        }
        if (this.state.showStack === false && scrollTop > 1100) {
            console.log(this.state.showAbout);
            this.setState({ showStack: true });
        }
    }
    handleGlobalState = () => {
        GlobalStates.setAnimate(true);
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
    handleTransition = async (event, history) => {
        event.preventDefault();
        /* old version for body */
        /* await this.doTransitionEffect(); */

        /* await this.runTransition(); */
        this.handleGlobalState();
        setTimeout(() => {
            this.props.history.push('/projects');
        }, 2300);

    }
    render = () => {
        let techStack = this.state.data.stack.map((tech, i) => <li key={i}>{tech}</li>)

        return (
            <section id="AD-VISION">
                <Slider />
                <Flexbox classes={`nav-section`}>
                <Route render={({ history }) => (
                    <div onClick={(e) => this.handleTransition(e)} className={`h2-block`}>
                        <h2 className={`ad-return`}>Go back</h2>
                    </div>
                )}/>
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
                        <p>{this.state.data.role.paragraph.two}</p>
                    </div>
                </Flexbox>
                <Flexbox classes={`ad-stack ${this.state.showStack ? "show-this" : ""}`}>
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