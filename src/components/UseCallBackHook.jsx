import React, { useState } from "react";

const allUsers = ["Aman", "Ravi", "Jay", "Tub"];

const UseCallBackHook = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = (e) => {
    const value = e.target.value;
    const result = allUsers.filter((user) =>
      user.toLowerCase().includes(value)
    );
    setUsers(result);
  };

  return (
    <div style={{ padding: "10rem" }}>
      <input type="text" onChange={handleSearch} />
      <h2>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </h2>
    </div>
  );
};

export default UseCallBackHook;
