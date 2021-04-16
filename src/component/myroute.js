import React, { Component } from "react";
//import { Route } from "react-router-dom";
import { Route } from "react-router-dom";
import Mainpage from "./pages/mainpage.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
//import NotFound from "./pages/notfound.js";
import Login from "./pages/login.js";

export default class myroute extends Component {
  render() {
    return (
      <div>
        <switch>
          <Route path="/login" component={Login} />
          <Route exact path="/home" component={Mainpage} />
          <Route path="/about" component={About} />
          <Route path="/contact/:username" component={Contact} />
          {/* <Route component={NotFound} /> */}
        </switch>
      </div>
    );
  }
}
