// import React, { Component } from "react";
import ReactGA from "react-ga";

// class Tracking extends Component {
//   render() {
//     return <div />;
//   }
// }
export const initGA = () => {
  ReactGA.initialize("UA-146365365-1");
};

export const PageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};
// export default Tracking;
