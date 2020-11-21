import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Domedemonode extends Component {
  fun() {
    var imgid = document.getElementById("iid");
    ReactDOM.findDOMNode(imgid).src = "";
  }
  render() {
    return (
      <div>
        <button onClick={this.fun}>Change</button>
        <br></br>
        <img
          id="iid"
          src="https://static.asiachan.com/Nancy.600.195773.jpg"
        ></img>
      </div>
    );
  }
}
