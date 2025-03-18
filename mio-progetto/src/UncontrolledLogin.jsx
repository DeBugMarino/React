export default function UncontrolledLogin() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };
    console.log(data);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input name="username" />
      <input name="password" type="password" />
      <input name="session" type="checkbox" />
      <button>Login</button>
    </form>
  );
}
