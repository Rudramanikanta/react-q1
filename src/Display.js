import React, { Component } from 'react'

export default class Display extends Component {
    state = {
        data: "",
    }
    changeHandler(event) {
        event.preventDefault();
        this.setState({
            data: event.target.value
        })
    }
    render() {
        return (
            <div>
                
                <div style={{ height: "fit-content", width: "fit-content", backgroundColor: "white", borderRadius: "40px", padding: "10px", border: "1px solid", textAlign: "center", justifyContent: "center", }}>
                    <input type="text" onChange={(e) => { this.changeHandler(e) }}
                        style={{ border: "0px", outline: "none", padding: "10px" }}>
                    </input>
                </div>
                <div style={{ textAlign: "center", justifyContent: "center", padding: "10px" }}>
                    {this.state.data}
                </div>
            </div>
        )
    }
}
