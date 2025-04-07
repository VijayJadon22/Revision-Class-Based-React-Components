import React, { useCallback, useState } from "react";
import Header from "./Header";

const LearnUseCallBackHook = () => {
  const [count, setCounter] = useState(0);

  const newFn = useCallback(() => {
    console.log("Mounted one time");
  }, []);
  return (
    <div>
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCounter((count) => count + 1)}>
        Click Here
      </button>
    </div>
  );
};

export default LearnUseCallBackHook;
