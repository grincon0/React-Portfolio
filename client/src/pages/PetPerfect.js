import React, { Component } from "react";
import FlexContainer from "../components/FlexContainer/index";
import Flexbox from "../components/Flexbox/index";
import { SpanGenerator } from "../components/Customs/index";
import SVGIcon from "../components/SVGIcon/index"
import "./styles/Advision.css";

export default class PetPerfect extends Component {
    constructor() {
        super();
        this.state = {
            animated: false,
            transition: false,
            data: {
                tier: "Mid",
                name: "Pet Perfect",
                type: ["Web App", "Web Design"],
                time: "Fall 2018",
                github: "https://github.com/DavidDBaker/pet-perfect",
                link: "https://pet-perfect.herokuapp.com/",
                sub: "The Perfect Site for the passionate pet owner.",
                description: "Pet Perfect is an website that allows users to find local pet shops, veterinarians, pet-friendly parks within a 10-mile radius. The user will input his/her zip-code in a input field. Once the zip code is submitted, the webpage will use the Google Maps API to generate a map that will show the nearest veterinarians, pet shops, and pet-friendly parks around the user.",
                role:{
                    paragraph : {
                        one: "As the first project we tackled as web developers, our team wanted to created web that provides a solution to users. Our love and apprecitate for our furry compantion motivated us to create a web concept around the idea of a one-stop shop for the needs of pet owner",
                        two: "In addition to UI Design, my main focus was intergrating the Google Maps API for the Front-end. The user is able to select from category of pet-related services to search for within a 10 miles radius of their inputed location",

                    }
                } ,
                stack: ["Front-End Development", "Google Maps API", "Petfinder API", "Vue.js","Sass", "Bootstrap 5", "HTML5 - Semantic UI", "Responsive Web Design"]
            }
        }
    }
    componentDidMount = () => {

    }
    render = () => {
        let techStack = this.state.data.stack.map((tech, i) => <li key={i}>{tech}</li>)

        return (
            <section id="AD-VISION">
                <Flexbox classes={`nav-section`}>
                    <div className={`h2-block`}>
                        <h2>Go back</h2>
                    </div>
                </Flexbox>
                <Flexbox classes={`ad-title-box`}>
                    <h1>{this.state.data.name}</h1>
                    <p>{this.state.data.sub}</p>
                </Flexbox>
                <Flexbox classes={`ad-title-lower`}>
                    <div>
                        <span>Period:</span><p>{this.state.data.time}</p>
                    </div>
                    <div>
                        <span>Type:</span><p>{this.state.data.type[1]}</p>
                    </div>
                </Flexbox>
                <Flexbox classes={`ad-about`}>
                    <div className={`about-header`}>
                        <h1>About</h1><span>.</span>
                    </div>
                    <div className={`about-wrap`}>
                        <p>{this.state.data.description}</p>
                    </div>
                    <div className={`about-links`}>
                        <a className={`github-link`} href={this.state.data.github} target="_blank"><SVGIcon classes="octo-dark" src="octocat" height={75} width={75} /></a>
                        {this.state.data.link ? <a className={`web-link`} href={this.state.data.link} target="_blank"><SVGIcon classes="web-dark" src="internet" height={75} width={75} /></a> : "" }

                    </div>


                </Flexbox>
                <Flexbox classes={`ad-role`}>
                    <div className={`role-info`}>
                        <p>{this.state.data.role.paragraph.one}</p>
                        <p>{this.state.data.role.paragraph.two}</p>
                    </div>
                </Flexbox>
                <Flexbox classes={`ad-stack`}>
                    <div className={`stack-header`}>
                        <h1>Tech Stack</h1>
                    </div>
                    <div className={`stack-list`}>
                        <ul>
                            {techStack}
                        </ul>

                    </div>

                </Flexbox>


            </section>
        );
    }


}