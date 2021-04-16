import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class home extends Component {
  Logout = () => {
    sessionStorage.removeItem("userName");
  };
  render() {
    if (sessionStorage.getItem("userName") == null) {
      return <Redirect to="/login"></Redirect>;
    } else {
      return (
        <div>
          <h1>This is home</h1>
          <button onClick={this.Logout}>logout</button>
        </div>
      );
    }
  }
}
