import React, { useState, useMemo } from "react";

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  //   const cubeNum = (num) => {
  //     console.log("Calculation done");
  //     return Math.pow(num, 3);
  //     // return num ** 3;
  //   };

  //   //   const result = cubeNum(number);
  //   const result = useMemo(() => cubeNum(number), [number]);

  const result = useMemo(() => {
    console.log("Calculation done");

    const cubeNum = (n) => {
      return Math.pow(n, 3);
    };

    return cubeNum(number);
  }, [number]);

  return (
    <>
      <input
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        type="number"
      />
      <h1>Cube of the number: {result}</h1>
      <div>
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Counter++
        </button>
        <h1>Counter : {counter}</h1>
      </div>
    </>
  );
};

export default UseMemoHook;
