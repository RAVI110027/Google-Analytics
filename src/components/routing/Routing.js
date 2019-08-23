import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import User from "../user/User";
import Career from "../career/Career";

class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/user">User</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
            </ul>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/about" component={About} />
          <Route path="/career" component={Career} />
        </Router>
      </div>
    );
  }
}

export default Routing;
