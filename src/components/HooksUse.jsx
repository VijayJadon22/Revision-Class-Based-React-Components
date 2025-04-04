import React, { useEffect, useState } from "react";

const HooksUse = () => {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCount((prevCount) => {
  //         if (prevCount < 10) {
  //           return prevCount + 1;
  //         } else {
  //           clearInterval(timer);
  //           return prevCount;
  //         }
  //       });
  //     }, 2000);
  //   }, []);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  return <h1>I have rendered {count} times</h1>;
};

export default HooksUse;
