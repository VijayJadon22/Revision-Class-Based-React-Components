import React, { useCallback, useState } from "react";
import NavBar from "./NavBar";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");
  const getAdjective = useCallback(() => {
    return "another";
  }, []);
  return (
    <div style={{ padding: "10rem" }}>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>count++</button>
      <NavBar adjective={adjective} getAdjective={getAdjective} />
      <div>useCallBack</div>
    </div>
  );
};

export default UseCallBack;
