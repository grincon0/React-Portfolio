import React, { Component } from "react";
import FlexContainer from "../components/FlexContainer/index";
import Flexbox from "../components/Flexbox/index";
import { SpanGenerator } from "../components/Customs/index";
import SVGIcon from "../components/SVGIcon/index"
import "./styles/Advision.css";

export default class PixelSmash extends Component {
    constructor() {
        super();
        this.state = {
            animated: false,
            transition: false,
            data: {
                tier: "High",
                name: "Pixel-Smash",
                type: ["Video Game", "Game Design"],
                time: "Winter 2018",
                github: "https://github.com/grincon0/Pixel_Smash",
                link: "https://my-pixel-smash.herokuapp.com/",
                sub: "Combo yourself to victory.",
                description: "Pixel-Smash is a fun, yet competitive , JavaScript-powered platform fighter where you can test your mettle against online players or the relentless CPU.",
                role: {
                    paragraph: {
                        one: "As lead designer, I spearheaded the development of the game design, battle mechanics, and the arrangement of the game's soundtrack. The focus of this project was to create a fun and competitive figthting game written completely in JavaScript, where you can not only battle the computer, but also each other through online play. ",
                        two: "As a fan of the older generations of gaming, I wanted this game's design to evoke a classic 16-bit feel to the player. Ensuring that combat was fast-paced was my top priority, so I made sure to program the battle mechanics that allowed the play to perform quick combos and evasion techniques that can devastate the opponent.",
                        
                    }
                } ,
                stack: ["Phaser.CE", "Sockets.io", "Gulp", "Node.js", "Express.js", "Fl Studio"]
            }
        }
    }
    componentDidMount = () => {

    }
    render = () => {
        let techStack = this.state.data.stack.map((tech, i) => <li key={i}>{tech}</li>)

        return (
            <section id="PIXEL-SMASH">
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