import React, { Component } from "react";
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
          onClick={() =>
            Event("PRODUCT", "Product added to cart", "PRODUCT_PAGE")
          }
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

export default App;
