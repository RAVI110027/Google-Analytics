import React, { Component } from "react";
import ReactGA from "react-ga";
import Routing from "./components/routing/Routing";
import { initGA } from "./components/tracking/Tracking";

class App extends Component {
  componentDidMount() {
    initGA();
  }

  render() {
    return (
      <div className="App">
        <Routing />
        <button
          onClick={() => {
            ReactGA.event({
              category: "PRODUCT",
              action: "Product added to cart",
              label: "PRODUCT_PAGE"
            });
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

export default App;
