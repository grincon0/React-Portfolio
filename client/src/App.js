import React, { Component } from 'react';
import Slider from "./components/Slider/index";
import ProjectBlock from "./components/ProjectBlock/index";
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (

      <div className="App">
        <Slider />

        <ProjectBlock />

      </div>
    );
  }
}

export default App;
