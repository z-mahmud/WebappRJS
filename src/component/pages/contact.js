import React, { Component } from "react";

export default class contact extends Component {
  constructor({ match }) {
    super();
    this.state = {
      myname: match.params.username,
    };
  }

  render() {
    return (
      <div>
        <h1>Contact {this.state.myname}</h1>
      </div>
    );
  }
}
