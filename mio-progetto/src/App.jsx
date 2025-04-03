import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
