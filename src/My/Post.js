import React, { Component } from "react";
import axios from "axios";

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      postdata: [],
      postres: [],
    };
  }

  onChangeHandler = (event) => {
    var mydata = event.target.value;
    this.state({ postdata: mydata });
  };

  onClickHandler = () => {
    axios
      .post("http://ss.rabbil.com/test.php", this.state.postdata)
      .then((response) => {
        this.setState({ postres: response.data });
        alert(this.state.postres);
      })
      .catch((error) => {
        alert("Wrong!");
      });
  };

  render() {
    return (
      <div>
        <input type="Text" onChange={this.onChangeHandler}></input>
        <button onClick={this.onClickHandler}>Post</button>
      </div>
    );
  }
}
