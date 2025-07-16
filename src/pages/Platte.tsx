export default function ThemePalette() {
  return (
    <div className="min-h-screen bg-[#0E1117] text-white p-10 space-y-10 font-sans">
      <h1 className="text-3xl font-bold text-white mb-2">🎨 FocusForge Theme Palette</h1>

      <div className="p-4 border border-[#2A2F41] rounded-xl shadow-inner bg-[#1F2435]/90">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Background Layers */}
          <ColorCard name="Background Base" className="bg-[#0E1117]" hex="#0E1117" />
          <ColorCard name="Sidebar Background" className="bg-[#1A1F2E]" hex="#1A1F2E" />
          <ColorCard name="Panel/Card Background" className="bg-[#1F2435]" hex="#1F2435" />
          <ColorCard name="Hover Layer" className="bg-[#262B3C]" hex="#262B3C" />

          {/* Borders & Shadows */}
          <ColorCard name="Border Soft" className="bg-[#2A2F41]" hex="#2A2F41" />
          <ColorCard name="Border Glow" className="bg-[#3F4A5B]" hex="#3F4A5B" />
          <ColorCard name="Light Border" className="bg-white/30 border border-white/30" hex="white/30" />

          {/* Text */}
          <ColorCard name="Text Primary" className="bg-[#0E1117] text-slate-100 border border-slate-600" label="Aa" />
          <ColorCard name="Text Muted" className="bg-[#0E1117] text-slate-400 border border-slate-700" label="Aa" />

          {/* Accent Colors */}
          <ColorCard name="Accent Primary" className="bg-indigo-500" hex="#6366F1" />
          <ColorCard name="Accent Secondary" className="bg-violet-600" hex="#8B5CF6" />
          <ColorCard name="Accent Gradient" className="bg-gradient-to-r from-indigo-500 to-violet-600" label="→" />
        </div>
      </div>
    </div>
  );
}

function ColorCard({
  name,
  className,
  hex,
  label,
}: {
  name: string;
  className: string;
  hex?: string;
  label?: string;
}) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-slate-800">
      <div className={`h-24 flex items-center justify-center text-2xl ${className}`}>
        {label || ""}
      </div>
      <div className="bg-[#0E1117] px-4 py-2 border-t border-slate-800">
        <div className="text-sm text-slate-300 font-semibold">{name}</div>
        {hex && <div className="text-xs text-slate-500">{hex}</div>}
      </div>
    </div>
  );
}
