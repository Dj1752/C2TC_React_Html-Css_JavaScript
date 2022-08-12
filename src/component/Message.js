import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message: "hello m17 student"
        }
    }
changeMessage(){
    this.setState(
        {
            message:'you are placed at cg'
        }
    )
}

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>click me</button>
            </div>
        )
    }
}

export default Message;