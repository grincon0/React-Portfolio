import React, { Component } from "react";
import { Button } from "../Buttons/index";
import FlexBox from "../Flexbox/index";
import { ProjectOverlay } from "../OverlayBlock/index";
import "./styles/ButtonList.css";

import { Route, Redirect } from "react-router-dom";

export class ButtonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            move:false,
            animationComplete : {
                title: false,
                buttons : false,
                blocks: false
            },
            filter: "",
            projects: [
                {
                    name: "Ad-Vision",
                    link:"advision",
                    count: 1,
                    skill: ["React Native", "NodeJS", "Augmented Reality", "JavaScript"],
                },
                {
                    name: "Pixel-Smash",
                    link:"pixelsmash",
                    count: 2,
                    skill: ["NodeJS", "Game Design", "JavaScript", "BackEnd", "Sockets.io"]
                },
                {
                    name: "Pet-Perfect",
                    link:"petperfect",
                    count: 3,
                    skill: ["FrontEnd", "JavaScript", "Web Design"]
                },
                {
                    name: "Mongo Scraper",
                    link:"mongoscraper",
                    count: 4,
                    skill: ["FrontEnd", "BackEnd", "MongoDB", "NodeJS"]
                },
                {
                    name: "Bamazon",
                    link:"bamazon",
                    count: 5,
                    skill: ["BackEnd", "SQL", "NodeJS", "JavaScript"]
                },
                {
                    name: "React-Books",
                    link:"reactbooks",
                    count: 6,
                    skill: ["FrontEnd","BackEnd","MongoDB", "ReactJS", "NodeJS", "JavaScript"]
                },
            ],
            content: [{ name: "ALL", key: 1 }, { name: "ReactJS", key: 2 }, { name: "NodeJS", key: 3 }, { name: "FrontEnd", key: 5 }, { name: "BackEnd", key: 6 }, { name: "MongoDB", key: 7 }, { name: "SQL", key: 8 },
            { name: "Game Design", key: 9 }, { name: "Augmented Reality", key: 10 }, { name: "React Native", key: 11 }, { name: "Sockets.io", key: 12 }]
        }
    }
/* 
    componentDidMount = () => {

 

        let newState = {...this.state};
        newState.animate = true;
        this.setState(newState);
    } */
    handleButtonClick = (event) => {
        /* const { value } = event.target; */
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
    handleProjectClick = async (event, history, link) => {
        const value = link;
      

        
        await setTimeout(() => {
            history.push(`/${value}`);
        }, 300);
    }
    dumpListItems = () => {
        if(!this.state.move){
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
       
            return filteredList.map((item, i) => <Route key={i} render={({ history }) => (<ProjectOverlay onClick={(event) => this.handleProjectClick(event, history, item.link)} blockID={`p-${i}`} id={item.count} count={item.count}key={item.count} value={item.link} name={item.name} /> )} />);

        } else {


            let projectData = [...this.state.projects];
            return projectData.map((item, i) => <Route key={i} render={({ history }) =>  (<ProjectOverlay onClick={(event) => this.handleProjectClick(event, history, item.link)} blockID={`p-${i}`} id={item.count} count={item.count} key={item.count} value={item.link} name={item.name} /> )} /> );
        }

    }

    render = () => {
        let dumpList;
        let dumpProjects;
        if(!this.state.move){
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
    }
}