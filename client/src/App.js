import React, { Component } from 'react';
import Landing from "./pages/Landing";
import Wrapper from "./components/Wrapper";
import Test3D from "./pages/Test3D";
import About from "./pages/sections/About";
import "./App.css";



class App extends Component {

  render() {
    return (
        <Wrapper>
         <Test3D  />
          
          {/* <About />  */}
        </Wrapper>
      
    );
  }
}

export default App;
