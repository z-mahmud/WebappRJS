import React, {Component} from 'react'

class State extends Component{
    constructor(){
        super()

        var obj={
            name:"State constructor",
            path:"My folder"
        }
        this.state=obj
    }

    render(){
        return <div>
            I am from {this.state.name} through {this.state.path}
        </div>
    }
}
export default State
