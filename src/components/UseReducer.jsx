import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = {
    age: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { age: state.age + 1 };
      }
      case "decrease": {
        return { age: state.age == 0 ? state.age : state.age - 1 };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ padding: "10rem" }}>
      <button onClick={() => dispatch({ type: "increase" })}>Increment</button>
      <h1>Age is {state.age}</h1>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrement</button>
    </div>
  );
};

export default UseReducer;
