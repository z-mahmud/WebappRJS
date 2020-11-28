import React, { Component } from "react";

export default class Select extends Component {
  constructor() {
    super();
    this.state = {
      city1: "Dhaka",
      city2: "Bangkok",
      city3: "Katmondu",
      city4: "New York",
      newcity: "",
    };
  }

  onChangeHandler = (event) => {
    var Newselectv = event.target.value;
    this.setState({ newcity: Newselectv });
  };

  render() {
    return (
      <div>
        <p>{this.state.newcity}</p>
        <select onChange={this.onChangeHandler} value={this.state.newcity}>
          <option>{this.state.city1}</option>
          <option>{this.state.city2}</option>
          <option>{this.state.city3}</option>
          <option>{this.state.city4}</option>
        </select>
      </div>
    );
  }
}
