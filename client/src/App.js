import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Wrapper from "./components/Wrapper";
import Test3D from "./pages/Test3D";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import{
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import "./App.css";



class App extends Component {

  render() {
    return (
      <Router>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Test3D} />
            {/*             <Route exact path="/about" component={About} /> */}
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Wrapper>
      </Router>

    );
  }
}

export default App;
