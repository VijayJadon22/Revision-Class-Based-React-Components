import React, { Component } from "react";

export default class Timer1 extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    this.timer = null;
    console.log("Timer constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Inside getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    if (this.props.timerOn) {
      this.timer = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
    }
    console.log("Timer componentDidMount");
  }

  getSnapshotBeforeUpdate() {
    console.log("Timer getSnapshotBeforeUpdate");
    return null;
  }

  shouldComponentUpdate(props, state) {
    if (!this.props.timerOn) {
      clearInterval(this.timer);
    }

    console.log("Timer shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("Timer componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Timer componentWillUnmount");
  }
  render() {
    console.log("Timer render");
    return (
      <h1>
        Timer : {new Date(this.state.time * 1000).toISOString().slice(11, 19)}{" "}
      </h1>
    );
  }
}
