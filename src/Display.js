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
    makeempty(){
        this.setState(
            {
                data:"",
            }
        )
    }
    render() {
        return (
            <>
                <div style={{ display: "flex", height: "50vh" }}>
                    Enter name:
                    <div style={{padding:"20px"}}>
                    <div style={{ height: "fit-content", width: "fit-content", backgroundColor: "white", borderRadius: "40px", paddingLeft: "10px",paddingRight:"10px", border: "1px solid", textAlign: "center", justifyContent: "center", }}>
                        <input type="text" onChange={(e) => { this.changeHandler(e) }} value={this.state.data}
                            style={{ border: "0px", outline: "none", padding: "10px" }}>
                        </input>
                    </div>
                    </div>
                    <button className='btn btn-outline-dark' onClick={()=>{this.props.nameHandle(this.state.data)
                    this.makeempty()}}>Add name</button>
                </div>
                
            </>
        )
    }
}
