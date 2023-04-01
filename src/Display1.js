import React, { Component } from 'react'
import Display from './Display'

export default class Display1 extends Component {
    state={
        names:[]
    }

     nameHandler(name){
      this.setState(
        {
            names:[...this.state.names,name]
        }
      )
      console.log(this.state)
     }
    
    render() {
        return (
            <>
            <Display nameHandle={this.nameHandler.bind(this)}></Display>
                <div style={{ height: "50vh" ,textAlign:"center",justifyContent:"center"}}>
                     {
                        this.state.names.map((value)=>{
                            return(
                                <div style={{padding:"10px"}}>
                                    {value}
                                </div>
                            )
                        })
                    } 
                   
                </div>
            </>
        )
    }
}
