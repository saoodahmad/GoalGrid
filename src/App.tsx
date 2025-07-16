import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Focus from "./pages/Focus";
import Sidebar from "./components/SideBar";
import ThemePalette from "./pages/Platte";

function App() {
  return (
    <Router>
   <div className="flex h-screen bg-[#0E1117] text-white font-sans">
        <Sidebar />
         
   <main className="scrollbar-custom overflow-y-auto ml-64 w-full p-4">
          <Routes>
            <Route path="/" element={<ThemePalette />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/focus" element={<Focus />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
