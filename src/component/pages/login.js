import React, { Component } from "react";

export default class login extends Component {
  Login = () => {
    sessionStorage.setItem("userName", "zam");
  };

  render() {
    return (
      <div>
        <button onClick={this.Login}>login</button>
      </div>
    );
  }
}
