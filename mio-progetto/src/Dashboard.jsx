import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Benvenuto nella tua Dashboard </h1>
      <ul>
        <li>
          <Link to="Profile">Vai al Profilo</Link>
        </li>
        <li>
          <Link to="Settings">Vai alle Impostazioni</Link>
        </li>
      </ul>
    </div>
  );
}
