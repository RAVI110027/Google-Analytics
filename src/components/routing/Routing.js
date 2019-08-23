import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import User from "../user/User";

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
            </ul>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/about" component={About} />
        </Router>
      </div>
    );
  }
}

export default Routing;
