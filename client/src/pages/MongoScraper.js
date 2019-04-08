import React, { Component } from "react";
import FlexContainer from "../components/FlexContainer/index";
import Flexbox from "../components/Flexbox/index";
import { SpanGenerator } from "../components/Customs/index";
import SVGIcon from "../components/SVGIcon/index"
import "./styles/Advision.css";
import { Route, Redirect } from "react-router-dom";

export default class MongoScraper extends Component {
    constructor() {
        super();
        this.state = {
            animated: false,
            transition: false,
            data: {
                tier: "Mid",
                id: "4",
                name: "Mongo Scraper",
                type: ["Web App", "Full Stack Web Application"],
                time: "Fall 2018",
                github: "https://github.com/grincon0/mongo_scraper",
                link: "https://floating-oasis-57961.herokuapp.com/home",
                sub: "Scraping sites for the information we love.",
                description: "Mongo Scraper is a lightweight web application designed to scrape images and text from articles on space.com.  Utilizing MongoDB and powered by Express, the application stores and retrieves the scraped data stored on the databse and passes it the user through the Handlebars templating engine",
                role: "Users are able to leave comments on the articles displayed and revisit them later. The comments are saved to the database as well and associated with their articles.",
                stack: ["Back-End Development", "MongoDB", "Mongoose", "Cheerio", "Nodemon", "Axios.js", "Handlebars.js", "Express.js", "Node.js"]
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
        if (this.state.showStack === false && scrollTop > 1200) {
            console.log(this.state.showAbout);
            this.setState({ showStack: true });
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
    handleTransition = async (event, history) => {
        event.preventDefault();
        /* old version for body */
        /* await this.doTransitionEffect(); */

        /* await this.runTransition(); */

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
                            <h2>Go back</h2>
                        </div>
                    )} />
                </Flexbox>
                <Flexbox classes={`ad-title-box`}>
                    <div className={`color-${this.state.data.id}`}>
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