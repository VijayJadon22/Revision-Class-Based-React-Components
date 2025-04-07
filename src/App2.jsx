import React from "react";
import HooksUse from "./components/HooksUse";
import UseRefHook from "./components/useRefHook";
import UseMemoHook from "./components/UseMemoHook";
import LearnUseMemo from "./components/LearnUseMemo";
import LearnUseCallBackHook from "./components/LearnUseCallBackHook";

const App2 = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        padding: "auto",
        textAlign: "center",
      }}
    >
      {/* <HooksUse /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}
      {/* <LearnUseMemo /> */}
      <LearnUseCallBackHook />
    </div>
  );
};

export default App2;
