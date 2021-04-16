import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class about extends Component {
  constructor() {
    super();
    this.state = {
      passData: "Bangladesh",
    };
  }
  render() {
    if (sessionStorage.getItem("userName") == null) {
      return <Redirect to="/login"></Redirect>;
    } else {
      var dataa = "/contact/" + this.state.passData;
      return (
        <div>
          <h1>About</h1>
          <button>
            <Link to={dataa}>Contact</Link>
            {""}
          </button>
        </div>
      );
    }
  }
}
