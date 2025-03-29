import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [something, setSomething] = useState("");
  const [users, setUsers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setUsers([...users, something]);
    setSomething("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onSubmit={handleSubmit}
          type="text"
          name="form"
          id="form"
          value={username}
          onChange={(event) => setSomething(event.target.value)}
        />
        <button type="submit">bottone</button>
      </form>
      {users &&
        users.map((x, index) => (
          <GithubUser key={index} username={x}></GithubUser>
        ))}
    </>
  );
}
