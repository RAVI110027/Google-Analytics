import React, { Component } from "react";
import Routing from "./components/routing/Routing";
import ReactGA from "react-ga";
import { PageView, initGA } from "./components/tracking/Tracking";

class App extends Component {
  componentDidMount() {
    ReactGA.initialize("UA-146365365-1");
    initGA("UA-146365365-1");
    PageView();
  }

  render() {
    return (
      <div className="App">
        <Routing />
      </div>
    );
  }
}

export default App;
