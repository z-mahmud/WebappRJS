import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Domedemo extends Component {
  myfun() {
    var jekhane_change_korbo = document.getElementById("h2id");
    var element = <h2>from react dom</h2>;
    var calback = function () {
      alert("Call back");
    };
    ReactDOM.render(element, jekhane_change_korbo, calback);
  }

  render() {
    return (
      <div>
        <button onClick={this.myfun}>Change</button>
        <h2 id="h2id">Name</h2>
      </div>
    );
  }
}
