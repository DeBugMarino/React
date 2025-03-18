export default function Welcome({ name }) {
  return (
    <div>
      <p>Welcome, {name}</p>
      <input value={name}></input>
    </div>
  );
}
