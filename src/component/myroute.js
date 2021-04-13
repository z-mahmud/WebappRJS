import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";

export default class myroute extends Component {
  render() {
    return (
      <div>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}
