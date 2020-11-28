import React, { Component } from "react";

export default class List extends Component {
  Mydatachild = (listdata) => {
    return <li>{listdata}</li>;
  };
  render() {
    const country = ["Bangladesh", "Nepal", "Vutan", "Maloyshia"];
    const dataitem = country.map(this.Mydatachild);
    // const dataitem= country.map((mydata)=>{
    //     return <li>{mydata}</li>
    // });
    const data = [
      {
        city: "Dhaka",
        zip: "1243",
      },
      {
        city: "Nepal",
        zip: "2646",
      },
      {
        city: "Vutan",
        zip: "1376",
      },
      {
        city: "Maloyshia",
        zip: "1a23",
      },
    ];
    const jcitydata = data.map((citydata) => {
      return <option>{citydata.city}</option>;
    });

    const jzipdata = data.map((zipdata) => {
      return <option>{zipdata.zip}</option>;
    });

    return (
      <div>
        <ol>{dataitem}</ol>
        <select>{jcitydata}</select>
        <select>{jzipdata}</select>
      </div>
    );
  }
}
