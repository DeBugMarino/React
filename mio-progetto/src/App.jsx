import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard";
import Settings from "./settings";
import Profile from "./profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/dashboard"></Link>
        <Link to="/profile"></Link>
        <Link to="/settings"></Link>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
