export default function Dashboard() {
  return (
    <div>
      <h1>Benvenuto nella tua Dashboard </h1>
      <ul>
        <li>
          <Link to="Profile"></Link>
        </li>
        <li>
          <Link to="Settings"></Link>
        </li>
      </ul>
    </div>
  );
}
