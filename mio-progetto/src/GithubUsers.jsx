import { useState } from "react";

export default function GithubUsers() {
  const [something, setSomething] = useState("");
  const [users, setUsers] = useState([]);
 

  function handleSubmit(event) {
    event.preventDefault();
    setUsers([...users, something]);
    setSomething("");
  }
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
          onChange={(event) => setUsername(event.target.value)}
        />
        <button>bottone</button>
      </form>
    </>
  );
}
