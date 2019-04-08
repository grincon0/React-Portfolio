import React, { Component } from "react";
import FlexContainer from "../components/FlexContainer/index";
import Flexbox from "../components/Flexbox/index";
import { SpanGenerator } from "../components/Customs/index";
import SVGIcon from "../components/SVGIcon/index"
import "./styles/Advision.css";

export default class Advision extends Component {
    constructor() {
        super();
        this.state = {
            animated: false,
            transition: false,
            data: {
                tier: "High",
                name: "Ad-Vision",
                type: ["Native", "Mobile Augmented Reality"],
                time: "Early 2019",
                github: "https://github.com/Wizkym/Ad-Vision",
                sub: "An ViroReact AR application that render realtime information on your smart phone",
                description: "Ad-Vision is an Augmented Reality object and text recogniztion mobile application that renders ads to the user. Using real-world objects/images that the it recognizes, the application will be able to render different forms of media, such as textual information, 3-D objects, and even graphical effects on the screen.",
                role: "I was responsible for creating an easy to use abstration for ViroReact's built in particle effect generators. Along with testing and creating 3D compenents that rendered text, video formats, and 3-diemnsional meshes, I created animations that seamlessly brought the user experience to life",
                stack: ["ViroReact", "React Native", "Objective-C", "Android SDK", "Xcode", "Node.js", "Express.js", "JavaScript ES6", "Google Cloud Platform", "Bing Custom Search API"]
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
                    <div>
                        <h1>{this.state.data.name}</h1>
                    </div>
                    <div>
                        <p>{this.state.data.sub}</p>
                    </div>


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
                        {this.state.data.link ? <a className={`web-link`} href={this.state.data.link} target="_blank"><SVGIcon classes="web-dark" src="internet" height={75} width={75} /></a> : ""}

                    </div>


                </Flexbox>
                <Flexbox classes={`ad-role`}>
                    <div className={`about-wrap`}>
                        <p>{this.state.data.role}</p>
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