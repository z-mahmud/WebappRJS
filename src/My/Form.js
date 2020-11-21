import React, { Component } from "react";

export default class From extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  onChangeHandler = (event) => {
    var newValue = event.target.value;
    var newName = event.target.name;
    this.setState({ [newName]: newValue });
  };

  onSubmitHandler = () => {
    alert(this.state.username);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <p>My form</p>
          <p>Hi {this.state.username}, your div name</p>
          <input
            name="username"
            onChange={this.onChangeHandler}
            type="text"
            placeholder="Name"
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
