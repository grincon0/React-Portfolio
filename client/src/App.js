import React, { Component } from 'react';
import Landing from "./pages/Landing";
import Test3D from "./pages/Test3D";
import Wrapper from "./components/Wrapper";
import "./App.css";



class App extends Component {
  render() {
    return (
        <Wrapper>
          <Test3D />
        </Wrapper>
      
    );
  }
}

export default App;
