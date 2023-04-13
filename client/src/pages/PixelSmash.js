import React, { Component } from "react";
import Flexbox from "../components/Flexbox/index";
import GlobalStates from "../components/Global/index";
import LaxHelper from "../helpers/LaxHelper";
import { Square } from "../components/Lax/index";
import SVGIcon from "../components/SVGIcon/index";
import { PhotoSlider } from "../components/PhotoSlider/index";
import "./styles/Advision.css";
import { Route } from "react-router-dom";

const laxHelper = new LaxHelper();

export default class PixelSmash extends Component {
  constructor() {
    super();
    this.state = {
      animated: false,
      transition: false,
      showAbout: false,
      showDetail: false,
      showStack: false,
      data: {
        tier: "High",
        id: "2",
        name: "Pixel-Smash",
        type: ["Video Game", "Game Design"],
        time: "Winter 2018",
        github: "https://github.com/grincon0/Pixel_Smash",
        link: "https://pixelsmash-demo.herokuapp.com/",
        sub: "Combo your way to victory.",

        description: "Pixel-Smash is a fun, yet competitive , JavaScript-powered platform fighter where you can test your mettle against online players or the relentless CPU.",
        role: {
          paragraph: {
            one: "As lead designer, I spearheaded the development of the game design, battle mechanics, and the arrangement of the game's soundtrack.",
            two: "As a fan of the older generations of gaming, I wanted this game's design to evoke a classic 16-bit feel to the player. Ensuring that combat was fast-paced was my top priority, so I made sure to program the battle mechanics in a way that allows the player to perform quick combos and evasion techniques that can devastate the opponent.",
          }
        },
        stack: ["Phaser.CE", "Sockets.io", "Gulp", "Node.js", "Express.js", "Fl Studio"],
      }
    }
  }
  componentDidMount = () => {
    this.setScrollEventListener();
    laxHelper.init();
    laxHelper.setUpScrollEvent();
    laxHelper.updateLaxElements();
  }
  componentDidUpdate = () => {
    laxHelper.updateLaxElements();
  }
  componentWillUnmount = () => {
    this.removeScrollEventListener();
  }
  handleClassesScrollTop = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

    if (this.state.showAbout === false) {
      if (400 < scrollTop && scrollTop < 849) {
        this.setState({ showAbout: true });
      }

    } else if (this.state.showAbout === true) {
      if (308 > scrollTop || (1200 < scrollTop && scrollTop < 1600)) {
        this.setState({ showAbout: false });
      }
    }

    if (this.state.showDetail === false) {
      if (1230 < scrollTop && scrollTop < 2400) {
        this.setState({ showDetail: true });
      }
    } else if (this.state.showDetail === true) {
      if (0 < scrollTop && scrollTop < 1000) {
        this.setState({ showDetail: false });
      }
    }

    if (this.state.showStack === false) {
      if (scrollTop > 1900) {
        this.setState({ showStack: true });
      }
    } else if (this.state.showStack === true) {
      if (scrollTop < 1900) {
        this.setState({ showStack: false });
      }
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
    this.handleGlobalState();
    setTimeout(() => {
      this.props.history.push('/projects');
    }, 2300);

  }
  handleGlobalState = () => {
    GlobalStates.setAnimate(true);
  }
  handleBackgroundColor = () => {
    if (this.state.showStack) {
      return "bg-test-1";
    } else if (this.state.showDetail) {
      return "bg-test-2";
    } else if (this.state.showAbout) {
      return "bg-test-3";
    } else {
      return "bg-test-3";
    }
  }
  render = () => {
    let techStack = this.state.data.stack.map((tech, i) => <li key={i}>{tech}</li>);
    return (
      <section id={`PIXEL-SMASH`} className={`bg-test-4`}>
        <Flexbox classes={`nav-section`}>

          <Route render={({ history }) => (
            <div onClick={(e) => this.handleTransition(e)} className={`h2-block`}>
              <h2 className={`ad-return`}>Go back</h2>
            </div>
          )} />
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
            <h1>About</h1>
          </div>
          <div className={`about-wrap`}>
            <p className={`lax`} data-lax-preset="blurInOut fadeInOut">{this.state.data.description}</p>
          </div>
          <div className={`about-links`}>
            <a className={`github-link`} href={this.state.data.github} target="_blank"><SVGIcon classes="octo-dark" src="octocat" height={75} width={75} /></a>
            {this.state.data.link ? <a className={`web-link`} href={this.state.data.link} target="_blank"><SVGIcon classes="web-dark" src="internet" height={75} width={75} /></a> : ""}
          </div>
          <Square
            classes={`box-3`}
            translateX="0 vw, 485 vw, 735 (window.innerWidth*0.73)"
            opacity="0 0, 485 0, 780 1"
            rotate={true}
          />
          <Square
            classes={`box-2`}
            translateX="0 vw, 485 vw, 735 (window.innerWidth*0.73)"
            opacity="0 0, 485 0, 780 1"
            rotate={true}
          />
          <Square
            classes={`box-1`}
            translateX="0 vw, 485 vw, 735 (window.innerWidth*0.73)"
            opacity="0 0, 485 0, 780 1"
            rotate={true}
          />
          <Square
            classes={`box-4`}
            translateX="0 vw, 485 vw, 735 (window.innerWidth*0.73)"
            opacity="0 0, 485 0, 780 1"
            rotate={true}
          />
          <Square
            classes={`box-5`}
            translateX="0 vw, 485 vw, 735 (window.innerWidth*0.73)"
            opacity="0 0, 485 0, 780 1"
            rotate={true}
          />
          <Square
            classes={`box-3`}
            translateX="0 0, 485 0, 735 (window.innerWidth*0.17)"
            opacity="0 0, 485 0, 780 1"
            rotate={true}
          />
          <Square
            classes={`box-1`}
            translateX="0 0, 485 0, 735 (window.innerWidth*0.17)"
            opacity="0 0, 485 0, 780 1"
            rotate={true}
          />
          <Square
            classes={`box-4`}
            translateX="0 0, 485 0, 735 (window.innerWidth*0.17)"
            opacity="0 0, 485 0, 780 1"
            rotate={true}
          />
          <Square
            classes={`box-2`}
            translateX="0 0, 485 0, 735 (window.innerWidth*0.17)"
            opacity="0 0, 485 0, 780 1"
            options="| speed=0.93"
            rotate={true}
          />
          <Square
            classes={`box-5`}
            translateX="0 0, 485 0, 735 (window.innerWidth*0.17)"
            opacity="0 0, 485 0, 780 1"
            rotate={true}
          />
        </Flexbox>
        <Flexbox classes={`ad-role ${this.state.showDetail ? "show-this" : ""}`}>
          <div className={`about-header`}>
            <h1>Details</h1>
          </div>
          <Flexbox classes={`slider-box`} id="Slider-Box">
            <div className={`about-wrap`}>
              <p>{this.state.data.role.paragraph.one}</p>
              <p>{this.state.data.role.paragraph.two}</p>
            </div>
            <PhotoSlider
              project={this.state.data.name}
              show={this.state.showDetail}
            />
          </Flexbox>
        </Flexbox>
        <Flexbox classes={`ad-stack ${this.state.showStack ? "show-this" : ""}`}>
          <div className={`stack-header`}>
            <h1>Tech Stack</h1>
          </div>
          <i className={`portal`}></i>
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
