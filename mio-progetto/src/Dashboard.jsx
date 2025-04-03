import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    alert("hai effettuato il logout");
    navigate("/");
  }
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
      <Outlet />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
