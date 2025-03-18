import React, { useState } from "react";

export default function LoginForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleResetForm = () => {
    setData({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Dai Loggati</h1>
      <input
        name="username"
        type="text"
        placeholder="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input type="checkbox" />
      <button>Login</button>
      <button onClick={handleResetForm}>Reset</button>
    </div>
  );
}
