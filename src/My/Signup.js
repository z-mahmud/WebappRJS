import React, { Component } from "react";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      fnumber: "",
    };
  }

  onChangeHandler = (event) => {
    var inputname = event.target.name;
    var inputvalue = event.target.value;

    this.setState({ [inputname]: inputvalue });
  };

  render() {
    return (
      <div>
        <form>
          <p>
            First Name: {this.state.fname}, Last Name: {this.state.lname}{" "}
          </p>
          <p>Email:{this.state.email} </p>
          <p>Phone Number:{this.state.fnumber} </p>
          <input
            onChange={this.onChangeHandler}
            name="fname"
            type="text"
            placeholder="First Name"
          ></input>
          <input
            onChange={this.onChangeHandler}
            name="lanem"
            type="test"
            placeholder="Last Name"
          ></input>
          <br></br>
          <input
            onChange={this.onChangeHandler}
            name="email"
            type="email"
            placeholder="Email"
          ></input>
          <input
            onChange={this.onChangeHandler}
            name="fnumber"
            type="number"
            placeholder="Phone number"
          ></input>
          <br></br>
          <input name="submit" type="submit" value="save now"></input>
        </form>
      </div>
    );
  }
}
