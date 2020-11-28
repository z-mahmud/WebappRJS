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

    if (inputname === "fname") {
      var namePattern = /^([a-zA-Z ]){2,30}$/;
      if (!namePattern.test(inputvalue)) {
        this.setState({ fname: "Wrong!!!" });
      }
    }
    if (inputname === "lname") {
      namePattern = /^([a-zA-Z ]){2,30}$/;
      if (!namePattern.test(inputvalue)) {
        this.setState({ lname: "Wrong!!!" });
      }
    }
    if (inputname === "email") {
      var emailPattern = /\S+@\S+\./;
      if (!emailPattern.test(inputvalue)) {
        this.setState({ email: "Wrong!!!" });
      }
    }
    if (inputname === "fnumber") {
      if (!Number(inputvalue)) {
        this.setState({ fnumber: "Wrong!!!" });
      }
    }
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
            name="lname"
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
