import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import NotFound from "./NotFound";
import Counter from "./Counter";
import GithubUsersList from "./GithubUserList";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Yo</Link>
        </li>
        <li>
          <Link to="/Counter">33</Link>
        </li>
        <li>
          <Link to="/users/:username">23</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Welcome name={"Franco"}></Welcome>} />
        <Route path="*" element={<NotFound />} />
        <Route path="counter" element={<Counter />} />
        <Route path="users" element={<GithubUsersList />} />
      </Routes>
    </>
  );
}

export default App;
