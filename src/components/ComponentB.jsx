import React, { Component } from "react";

export default class ComponentB extends Component {
  constructor() {
    super();
    this.state = {
      name: "componentB",
    };
    console.log("Inside component B constructor ");
  }

  static getDerivedStateFromProps() {
    console.log("Inside component B getDerivedStateFromProps fucntion");
    return null;
  }

  componentDidMount() {
    console.log("Inside component B componentDidMount fucntion");
  }
  render() {
    console.log("Inside component B render method");
    return <div>ComponentB</div>;
  }
}
