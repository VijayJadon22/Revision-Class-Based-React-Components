import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const inputRef = useRef();

  const btnClicked = () => {
    console.log(inputRef.current.value);
    inputRef.current.style.background = "violet";
    inputRef.current.click();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={btnClicked}>Click Here</button>
    </div>
  );
};

export default UseRefHook;
