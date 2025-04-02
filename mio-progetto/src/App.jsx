import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="Welcome">Yo</Link>
        </li>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/"></Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Welcome name={"Franco"}></Welcome>} />
        <Route path="/" element={<NotFound />} />
        <Route path="/" element={<ShowGithubUser />} />
      </Routes>
    </>
  );
}

export default App;
