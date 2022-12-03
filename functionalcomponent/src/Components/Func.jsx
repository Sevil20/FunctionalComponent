import React, { Component } from "react";

class Func extends Component {
  state = {
    user: {
      name: "",
      lastName: "",
      age: 0,
    },
  }
  handleName = () => {
    this.setState({ user:{...this.state.user,name:"Tural Sevil"} });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1></h1>
        <button onClick={this.handleName}>change</button>
      </div>
    );
  }
}
export default Func;
