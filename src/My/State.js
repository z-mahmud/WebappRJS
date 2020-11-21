import React, {Component} from 'react'

class State extends Component{
    constructor(){
        super()

        var obj={
            name:"State constructor",
            path:"My folder",
            test: ["11","12","13","14"],
            tobj: {
                class1:"45K",
                class2:"20K",
                class3:"12K"
            }
        }
        this.state=obj
    }

    ChangeName(a){
        this.setState({name:a});
        alert ("Changed");
    }

    render(){
        return <div>
            I am from {this.state.name} through {this.state.path}
            {/* <h1>Test number {this.state.test[0]}</h1>
            <h1>Test obj {this.state.tobj.class3}</h1> */}
            <br/>
            <button onClick={this.ChangeName.bind(this, "Rain")}>Change name</button>
        </div>
    }
}
export default State
