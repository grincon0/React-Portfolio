import React, { Component } from "react";
import Flexbox from "../components/Flexbox/index";
import GlobalStates from "../components/Global/index";
import LaxHelper from "../helpers/LaxHelper";
import { Square } from "../components/Lax/index";
import SVGIcon from "../components/SVGIcon/index";
import "./styles/Advision.css";
import { Route } from "react-router-dom";
const laxHelper = new LaxHelper();

export default class Bamazon extends Component {
  constructor() {
    super();
    this.state = {
      animated: false,
      transition: false,
      data: {
        tier: "Mid",
        id: "5",
        name: "Bamazon",
        type: ["CLI app", "CLI CRUD app"],
        time: "Fall 2018",
        github: "https://github.com/grincon0/bamazon",
        sub: "Manage your business inventory with Bamazon.",
        description: "Bamazon is multi-purspose command line application with CRUD functionality.",
        role: " Bamazon can take in orders from customers and deplete stock from the store's inventory. Using MySQL, it can also track product sales across departments and then provide a summary of the highest-grossing departments in the store.",
        stack: ["JavaScript ES6", "inquirer.js", "MySQL", "MySQL Server", "Express.js", "Node.js"]
      },
      showAbout: false,
      showDetail: false,
      showStack: false
    }
  };
  componentDidMount = () => {
    this.setScrollEventListener();
    laxHelper.init();
    laxHelper.setUpScrollEvent();
    laxHelper.updateLaxElements();
  };
  componentDidUpdate = () => {
    laxHelper.updateLaxElements();
  };
  componentWillUnmount = () => {
    this.removeScrollEventListener();
  };
  handleClassesScrollTop = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (400 < scrollTop && scrollTop < 849) {
      this.setState({ showAbout: true });
    } else if (this.state.showAbout) {
      if (308 > scrollTop || (1200 < scrollTop && scrollTop < 1600)) {
        this.setState({ showAbout: false });
      }
    }
    
    if (1230 < scrollTop && scrollTop < 2400) {
      this.setState({ showDetail: true });
    } else if (this.state.showDetail) {
      this.setState({ showDetail: 0 < scrollTop && scrollTop < 1000 ? false : true });
    }
    
    this.setState({ showStack: scrollTop > 1900 ? true : false });
  };
  handleGlobalState = () => {
    GlobalStates.setAnimate(true);
  };
  boundScrollTop = () => {
    this.handleClassesScrollTop();
  };
  setScrollEventListener = () => {
    document.addEventListener('scroll', this.boundScrollTop);
  };
  removeScrollEventListener = () => {
    document.removeEventListener('scroll', this.boundScrollTop);
  };
  handleGlobalState = () => {
    GlobalStates.setAnimate(true);
  };
  handleTransition = async (event, history) => {
    event.preventDefault();
    this.handleGlobalState();
    setTimeout(() => {
      this.props.history.push('/projects');
    }, 2300);
  };
  render = () => {
    let techStack = this.state.data.stack.map((tech, i) => <li key={i}>{tech}</li>)

    return (
      <section id="AD-VISION" className={`bg-test-8`}>
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
            <p>{this.state.data.description}</p>
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
          <div className={`about-wrap`}>
            <p>{this.state.data.role}</p>
          </div>
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
};
