import React, { Component } from "react";
import { Button } from "../Buttons/index";
import FlexBox from "../Flexbox/index";
import { ProjectOverlay } from "../OverlayBlock/index";
import "./styles/ButtonList.css";

export class ButtonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: false,
            filter: "",
            projects: [
                {
                    name: "Ad-Vision",
                    count: 1,
                    skill: ["React Native", "NodeJS", "Augmented Reality", "JavaScript"],
                },
                {
                    name: "Pixel-Smash",
                    count: 2,
                    skill: ["NodeJS", "Game Design", "JavaScript", "BackEnd", "Sockets.io"]
                },
                {
                    name: "Pet-Perfect",
                    count: 3,
                    skill: ["FrontEnd", "JavaScript", "Web Design"]
                },
                {
                    name: "Space Scraper",
                    count: 4,
                    skill: ["FrontEnd", "BackEnd", "Mongodb", "NodeJS", "ReactJS"]
                },
                {
                    name: "Bamazon",
                    count: 5,
                    skill: ["BackEnd", "SQL", "NodeJS", "JavaScript"]
                },
                {
                    name: "Liri-Bot",
                    count: 6,
                    skill: ["BackEnd", "NodeJS", "JavaScript"]
                },
            ],
            content: [{ name: "ALL", key:1 }, { name: "ReactJS", key:2 }, { name: "NodeJS", key:3 }, { name: "JavaScript", key:4 }, { name: "FrontEnd", key:5 }, { name: "BackEnd", key:6 }, { name: "Mongodb", key:7 }, { name: "SQL", key:8 },
            { name: "Game Design", key:9}, { name: "Augmented Reality", key:10 }, { name: "React Native", key:11 }, { name: "Sockets.io", key:12 }]
        }
    }
    componentDidUpdate = () => {
     
    }
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
    dumpListItems = () => {
        return this.state.content.map((item) => <li ><Button onClick={(event) => this.handleButtonClick(event)} key={item.key} value={item.name} text={item.name} /></li>);

    }
    filterProjectItems = () => {
        /* If we have a string to filter by */
        if (this.state.filter !== "") {
            let filteredList = [];
            let data = [...this.state.projects];
            console.log('state', data);


            for (let elem of data) {
                
                if (elem.skill.includes(this.state.filter)) {
                    filteredList.push(elem);
                }
            }
            console.log('filtered',filteredList)
            return filteredList.map((item) => <ProjectOverlay key={item.count} name={item.name} />);

            /* this.mapProjectItems(filteredList); */

        } else {
          
            /* this.mapProjectItems(); */
            let projectData = [...this.state.projects];
            return projectData.map((item) => <ProjectOverlay key={item.count} name={item.name} />);
        }

    }
/*     mapProjectItems = (arr) => {
        if (typeof arr === 'undefined') {
            console.log('mapping')
            let projectData = [...this.state.projects];
            console.log(projectData)
            return projectData.map((item) => <ProjectOverlay key={item.count} name={item.name} />);
        } else {
            return arr.map((item) => <ProjectOverlay key={item.count} name={item.name} />);
        }

    } */
    render = () => {
        let dumpList = this.dumpListItems();
        let dumpProjects = this.filterProjectItems();
        console.log(dumpProjects);

        return (
            <section className="button-project-section">
                <ul className={`button-list`}>
                    {dumpList}
                </ul>
                <div className="flex">

                    <FlexBox
                        id="Items-one"
                        classes="proj-box"
                    >
                        {dumpProjects}
                        {/*  <ProjectOverlay
                        
                        />
                        <ProjectOverlay delay={100} /> */}
                    </FlexBox>
                    {/* 
                    <FlexBox
                        id="Items-two"
                        classes="proj-box"
                    >
                        <ProjectOverlay delay={200} />
                        <ProjectOverlay delay={300} />
                    </FlexBox>

                    <FlexBox
                        id="Items-three"
                        classes="proj-box"
                    >
                        <ProjectOverlay delay={400} />
                        <ProjectOverlay delay={500} />
                    </FlexBox> */}

                </div>
            </section>
        );
    }
}