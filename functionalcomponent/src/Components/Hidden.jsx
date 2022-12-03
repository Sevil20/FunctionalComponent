import React, { PureComponent } from "react";
import Visible from "./Visible";

class Hidden extends React.PureComponent {
  state = {
    isActive: false,
  };
  hiddenClick = () => {
    this.setState({
      isActive: true,
    });
  };
  clickShow = () => {
    this.setState({
      isActive: false,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.hiddenClick}>Show</button>
        {this.state.isActive ? (
          <Visible/>
        ) : null}

        {/* <button onClick={this.clickShow}>Hide</button> */}
        <button className="visible" onClick={this.clickShow}>
          {this.state.isActive ? "Hide" : null }
        </button>
        {/* style={display:'none'} */}
      </>
    );
  }
}
export default Hidden;
