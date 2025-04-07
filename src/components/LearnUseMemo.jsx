import React, { useMemo, useState } from "react";
import { initialItems } from "../utils/data.js";

const LearnUseMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);
  // const selectedItem = items.find((item) => item.isSelected);
  const selectedItem = useMemo(() => {
    return items.find((item) => item.isSelected);
  }, [items]);

  function cubeNum(num) {
    console.log("Calculation Done");
    return Math.pow(num, 3);
  }

  const [number, setNumber] = useState(0);
  // const result = cubeNum(count);
  const result = useMemo(() => cubeNum(number), [number]);

  return (
    <>
      <h1>LearnUseMemo</h1>
      <p>SelectedItem: {selectedItem?.id}</p>
      <h2>{count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
  
      <h1>Cube of number is: {result}</h1>
      <button onClick={() => setNumber((number) => number + 1)}>
        Number++
      </button>
    </>
  );
};

export default LearnUseMemo;
