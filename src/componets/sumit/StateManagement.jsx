import React, { useState, useEffect } from "react";
import "./style.css";

class StateManagement extends React.Component {
     constructor(props){
        super(props);
        this.state = {date: new Date()};

     }
     componentDidMount(){
      //console.log("componentDidMOunt has mounted.");
      this.clockTImer = setInterval(()=>this.tick(),1000);
     }
     
     componentWillUnmount(){
      //console.log("componentWillUnmount component has mounted.");
      clearInterval(this.clockTImer);
     }
     tick(){
      this.setState({
        date: new Date(),
      });
     }

  render() {
    return (
      <h1 className="myclock">React time State Meanagement -{this.state.date.toLocaleTimeString(this.props.locale)}</h1>
    );
  }
}


export default StateManagement;
