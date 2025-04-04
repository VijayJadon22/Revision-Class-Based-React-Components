import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [],
    };
    console.log("Inside component A constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Inside component A getDerivedStateFromProps fucntion");
    return null;
  }

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    this.setState({
      entries: data,
    });
    console.log("Inside component A componentDidMount fucntion");
  }
  render() {
    console.log("Inside component A render method");
    // return <ComponentB />;
    return (
      <>
        <ul>
          {this.state.entries?.map((entry, index) => (
            <li key={index}>
              {entry.name}   -   {entry.email}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ComponentA;
