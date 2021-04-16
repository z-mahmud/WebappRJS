import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class mynav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink activeStyle={{ color: "green" }} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "green" }} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "green" }} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
