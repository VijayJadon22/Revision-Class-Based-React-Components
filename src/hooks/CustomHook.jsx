import React, { useEffect, useState } from "react";

const CustomHook = () => {
  const [name, setName] = useState(
    localStorage.getItem("username") ? localStorage.getItem("username") : ""
  );

  useEffect(() => {
    localStorage.setItem("username", name);
  }, [name]);
  return (
    <div>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <h2>Hello {name}!</h2>
    </div>
  );
};

export default CustomHook;
