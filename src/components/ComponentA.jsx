import React from "react";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
    };
    console.log("Inside component A constructor");
  }
  render() {
    console.log("Inside component A render method");
    return <h1>Component A</h1>;
  }
}

export default ComponentA;
