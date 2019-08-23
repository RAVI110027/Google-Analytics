import React, { Component } from "react";
// import React from "react";
import Routing from "./components/routing/Routing";
import ReactGA from "react-ga";

class App extends Component {
  // function App() {
  componentDidMount() {
    ReactGA.initialize("UA-146365365-1");
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
