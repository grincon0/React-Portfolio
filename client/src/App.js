import React, { Component } from 'react';
import Landing from "./pages/Landing";
import Wrapper from "./components/Wrapper";
import "./App.css";



class App extends Component {
  render() {
    return (
      
        <Wrapper>
          <Landing />
        </Wrapper>
      
    );
  }
}

export default App;
