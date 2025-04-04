import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [value, setValue] = useState(0);
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     setCount((count) => count + 1);
  //   }, [value]);

  //using useRef
  const count = useRef(0);
  console.log(count);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <button onClick={() => setValue((value) => value + 1)}>+1</button>
      <h1>{value}</h1>
      <button onClick={() => setValue((value) => value - 1)}>-1</button>
      <h2>Render Count:{count.current}</h2>
    </div>
  );
};

export default UseRefHook;
