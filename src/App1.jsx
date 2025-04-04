import React, { Component } from "react";
import ComponentA from "./components/ComponentA";
import Timer1 from "./components/Timer1";

export default class App1 extends Component {
  constructor() {
    super();
    this.state = {
      timerOn: false,
    };
  }
  render() {
    return (
      <div>
        {/* <ComponentA /> */}
        <Timer1 timerOn={this.state.timerOn} />
        <button onClick={() => this.setState({ timerOn: !this.state.timerOn })}>
          {this.state.timerOn ? "Stop Timer" : "Start Timer"}
        </button>
      </div>
    );
  }
}
