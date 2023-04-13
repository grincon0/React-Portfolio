import React, { Component } from "react";
import { Button } from "../Buttons/index";
import FlexBox from "../Flexbox/index";
import { ProjectOverlay } from "../OverlayBlock/index";
import GlobalStates from "../Global/index";
import { Route } from "react-router-dom";
import "./styles/ButtonList.css";

export class ButtonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      move: false,
      animationComplete: {
        title: false,
        buttons: false,
        blocks: false
      },
      filter: "",
      projects: [
        {
          name: "Ad-Vision",
          link: "advision",
          count: 1,
          colors: ["#00a8ea", "#00eb6a"],
          skill: ["React Native", "NodeJS", "Augmented Reality", "JavaScript"],
        },
        {
          name: "Pixel-Smash",
          link: "pixelsmash",
          count: 2,
          colors: ["#2300eb", "#910091"],
          skill: ["NodeJS", "Game Design", "JavaScript", "BackEnd", "Sockets.io"]
        },
        {
          name: "Pet-Perfect",
          link: "petperfect",
          count: 3,
          colors: ["#af001d", "#c4004b"],
          skill: ["FrontEnd", "JavaScript", "Web Design"]
        },
        {
          name: "Mongo Scraper",
          link: "mongoscraper",
          count: 4,
          colors: ["#0099b4", "#00c278"],
          skill: ["FrontEnd", "BackEnd", "MongoDB", "NodeJS"]
        },
        {
          name: "Bamazon",
          link: "bamazon",
          count: 5,
          colors: ["#b80000", "#ebe700"],
          skill: ["BackEnd", "SQL", "NodeJS", "JavaScript"]
        },
        {
          name: "React-Books",
          link: "reactbooks",
          count: 6,
          colors: ["#00dd67", "#0093dd"],
          skill: ["FrontEnd", "BackEnd", "MongoDB", "ReactJS", "NodeJS", "JavaScript"]
        },
      ],
      content: [{ name: "ALL", key: 1 }, { name: "ReactJS", key: 2 }, { name: "NodeJS", key: 3 }, { name: "FrontEnd", key: 5 }, { name: "BackEnd", key: 6 }, { name: "MongoDB", key: 7 }, { name: "SQL", key: 8 },
      { name: "Game Design", key: 9 }, { name: "Augmented Reality", key: 10 }, { name: "React Native", key: 11 }, { name: "Sockets.io", key: 12 }]
    }
  }
  changeSliderState = ([...args]) => {
    GlobalStates.setColors(args[0], args[1])
    GlobalStates.setAnimate(true);
  }
  handleButtonClick = (event) => {
    const value = event.target.value;
    if (value !== "ALL") {
      let newState = { ...this.state };
      newState.filter = value;

      this.setState(newState);
    } else {
      let newState = { ...this.state };
      newState.filter = '';
      this.setState(newState);
    }
  }
  handleProjectClick = async (event, history, item, ...args) => {
    const value = item;
    this.changeSliderState(...args);
    await setTimeout(() => {
      history.push(`/${value}`);
    }, 2500);
  }
  dumpListItems = () => {
    if (!this.state.move) {
      return this.state.content.map((item) => <li key={item.key} ><Button onClick={(event) => this.handleButtonClick(event)} key={item.key} value={item.name} text={item.name} /></li>);
    }
  }
  filterProjectItems = () => {
    /* If we have a string to filter by */
    if (this.state.filter !== "") {
      let filteredList = [];
      let data = [...this.state.projects];
      for (let elem of data) {
        if (elem.skill.includes(this.state.filter)) {
          filteredList.push(elem);
        }
      }
      return filteredList.map((item, i) => <Route key={i} render={({ history }) => (<ProjectOverlay onClick={(event) => this.handleProjectClick(event, history, item.link, item.colors)} blockID={`p-${i}`} id={item.count} count={item.count} key={item.count} colorA={item.colors[0]} colorB={item.colors[1]} value={item.link} name={item.name} />)} />);
    } else {
      let projectData = [...this.state.projects];
      return projectData.map((item, i) => <Route key={i} render={({ history }) => (<ProjectOverlay onClick={(event) => this.handleProjectClick(event, history, item.link, item.colors)} blockID={`p-${i}`} id={item.count} count={item.count} key={item.count} colorA={item.colors[0]} colorB={item.colors[1]} value={item.link} name={item.name} />)} />);
    }
  }

  render = () => {
    let dumpList;
    let dumpProjects;
    if (!this.state.move) {
      dumpList = this.dumpListItems();
      dumpProjects = this.filterProjectItems();
    }
    return (
      <section className={`button-project-section ${this.props.animate ? "rollout" : ""} ${this.props.transition ? "page-is-changing" : ""}`}>
        <ul className={`button-list`}>
          {dumpList}
        </ul>
        <div className="flex">
          <FlexBox
            id="Items-one"
            classes={`proj-box  ${this.props.transition ? "page-is-changing" : ""} `}>
            {dumpProjects}
          </FlexBox>
        </div>
      </section>
    );
  };
}
