import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import { nanoid } from "nanoid";
import TaskPanel from "../components/TaskPanel";
import { Circle } from "lucide-react";

export default function Tasks() {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);

  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      id: nanoid(),
      title,
      completed: false,
      createdAt: Date.now(),
    });

    setTitle("");
  };

  return (
    <TaskPanel title="My Tasks">
      {/* Task Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 bg-[#1F2435] border border-[#2A2F41] text-slate-100 placeholder:text-slate-500 p-3 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition-all duration-150"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-5 py-2 rounded-full shadow hover:scale-[1.03] active:scale-95 transition-transform duration-150 ease-out font-medium"
        >
          Add
        </button>
      </form>

      {/* Task List */}
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="px-5 py-4 rounded-xl bg-[#1F2435]/90 border border-[#2A2F41] shadow-md hover:bg-[#262B3C] hover:scale-[1.01] transition duration-150 ease-out flex items-center justify-between"
          >
            <span className="text-slate-100 text-base">{task.title}</span>
            <div className="text-indigo-400">
              <Circle size={18} />
            </div>
          </li>
        ))}
      </ul>
    </TaskPanel>
  );
}
