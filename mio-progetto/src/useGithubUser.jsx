import { useGithub } from "react";

export default function GithubUsers() {
  const [username, users] = useGithub();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Aggiungi</button>
      </form>

      {}
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}
