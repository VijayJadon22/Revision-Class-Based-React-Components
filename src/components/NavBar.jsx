import React from "react";

const NavBar = ({ adjective, getAdjective }) => {
  console.log("Navrbar is rendered");
  return <h1>This is a {adjective} adjective</h1>;
};

export default React.memo(NavBar);
