import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Wrapper from "./components/Wrapper";
import Test3D from "./pages/Test3D";
import About from "./pages/sections/About";
import Contact from "./pages/Contact";
import "./App.css";



class App extends Component {

  render() {
    return (
      <Router>
        <Wrapper>
          <Switch>
            {/*             <Route exact path="/" component={Test3D} /> */}
            {/*             <Route exact path="/about" component={About} /> */}
            <Route exact path="/" component={Contact} />

          </Switch>
          {/* <Test3D  /> */}

          {/* <About /> */}
        </Wrapper>
      </Router>

    );
  }
}

export default App;
