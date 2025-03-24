import { useState } from "react";

export default function Login({ setIsLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const userExist = users.find(
      (x) => x.email === email && x.password === password
    );
    if (userExist) {
      setMessage("Login effettuato con successo!");
      localStorage.setItem("UserLogged", JSON.stringify(userExist));
      setIsLogged(true);
    } else {
      setMessage("Credenziali errate!");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h6>Login</h6>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Inserisci la tua email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Inserisci la tua password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          style={{ backgroundColor: password.length < 8 ? "red" : "white" }}
          type="submit"
        >
          Login
        </button>
        {message && <p className="errate">{message}</p>}
      </form>
    </>
  );
}
