import React, { Component } from 'react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [],
      instructorID: props.match.params.instructorID
    };
  }

  render() {
    return (

      <div className="App">
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={900}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={Landing} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>

        )} />
      </div>
    );
  }
}

export default App;
