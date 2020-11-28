import React, { Component } from "react";

export default class Textarea extends Component {
  constructor() {
    super();
    this.state = {
      desc: "ffffffffffffffffff",
      input: "",
    };
  }

  onChangeHandler = (event) => {
    var mytext = event.target.value;
    this.setState({ input: mytext });
  };

  render() {
    return (
      <div>
        <textarea
          onChange={this.onChangeHandler}
          placeholder="Fuck man!"
        ></textarea>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
