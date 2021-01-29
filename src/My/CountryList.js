import React, { Component } from "react";
import axios from "axios";

export default class CountryList extends Component {
  constructor() {
    super();
    this.state = {
      mydata: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        this.setState({ mydata: response.data });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const mylist = this.state.mydata;

    const countryname = mylist.map((mylist) => {
      return <li>{mylist.name}</li>;
    });
    return (
      <div>
        <ul>{countryname}</ul>
      </div>
    );
  }
}
