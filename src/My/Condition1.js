import React, { Component } from "react";

class Condition1 extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
    };
    this.refreshN = this.refreshN.bind(this);
  }
  refreshN() {
    this.forceUpdate();
  }

  render() {
    //if else condition , can not use if else into the return function
    // if (this.state.login === true) {
    //   return <button>Logout</button>;
    // } else {
    //   return <button>Login</button>;
    // }
    //Element condition
    //return this.state.login ? <button>Logout</button> : <button>Login</button>;
    //force update mathode
    return (
      <div>
        <button onClick={this.refreshN}>Refresh</button>
        <h2>{Math.random()}</h2>
      </div>
    );
  }
}

export default Condition1;
