import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVersion } from "@tauri-apps/api/app";
import clsx from "clsx";
import {
  LayoutDashboard,
  CheckSquare,
  Target,
} from "lucide-react";


const navItems = [
  { path: "/", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { path: "/tasks", label: "Tasks", icon: <CheckSquare size={18} /> },
  { path: "/focus", label: "Focus Mode", icon: <Target size={18} /> },
];

export default function Sidebar() {
  const location = useLocation();
  const [version, setVersion] = useState("");

  useEffect(() => {
    getVersion().then(setVersion).catch(() => setVersion("v?"));
  }, []);

  return (
   <aside className="w-64 h-screen fixed top-0 left-0 bg-[#1A1F2E]/90 backdrop-blur-xl border-r border-white/20 shadow-xl flex flex-col px-5 py-6">


      {/* App Title */}
      <div className="flex items-center gap-2 mb-10">
        <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full shadow-sm"></div>
        <h1 className="text-2xl font-extrabold tracking-tight text-white">
          Goal<span className="text-blue-400">Grid</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
      {navItems.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className={clsx(
          "flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200",
          location.pathname === item.path
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            : "text-slate-300 hover:bg-slate-700 hover:text-white"
        )}
      >
        {item.icon}
        <span>{item.label}</span>
      </Link>
      ))}
      </nav>

      {/* Footer / Version */}
      <div className="text-xs text-gray-400 border-t border-gray-400 pt-5 mt-6">
        <p>{version || "v?"}</p>
        <p className="text-gray-400 mt-1 italic">Designed for Focus</p>
      </div>
    </aside>
  );
}
