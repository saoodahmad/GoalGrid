import { ReactNode } from "react";

interface TaskPanelProps {
  title: string;
  version?: string;
  children: ReactNode;
}

export default function TaskPanel({ title, version = "v1.0 Alpha", children }: TaskPanelProps) {
  return (
    <div className="bg-[#1F2435]/90 border border-[#2A2F41] rounded-xl shadow-xl p-6 hover:bg-[#262B3C] transition text-slate-100">
      <h1 className="text-3xl font-bold mb-6 tracking-tight flex items-center gap-2">
        {title}
        <span className="text-sm bg-indigo-600 px-2 py-1 rounded-md shadow-inner">
          {version}
        </span>
      </h1>
      {children}
    </div>
  );
}
