import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Dashboard from "./pages/Dashboard";
import Focus from "./pages/Focus";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/focus" element={<Focus />} />
      </Routes>
    </Router>
  );
}
