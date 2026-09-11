import * as React from "react";

type Props = {
  title: string;
  subtitle: string;
  accent: "gold" | "blue" | "red" | "violet" | "emerald" | "cyan";
  href?: string;
  status?: string;
};

const accentMap: Record<Props["accent"], { border: string; line: string; glow: string; arrow: string }> = {
  gold:   { border: "border-[#c9a86a]/20 hover:border-[#c9a86a]/40", line: "bg-[#c9a86a]", glow: "from-[#c9a86a]/15", arrow: "text-[#c9a86a]" },
  blue:   { border: "border-[#3aa6ff]/20 hover:border-[#3aa6ff]/40", line: "bg-[#3aa6ff]", glow: "from-[#3aa6ff]/15", arrow: "text-[#3aa6ff]" },
  red:    { border: "border-[#ff3b3b]/20 hover:border-[#ff3b3b]/40", line: "bg-[#ff3b3b]", glow: "from-[#ff3b3b]/15", arrow: "text-[#ff3b3b]" },
  violet: { border: "border-[#a78bfa]/20 hover:border-[#a78bfa]/40", line: "bg-[#a78bfa]", glow: "from-[#a78bfa]/15", arrow: "text-[#a78bfa]" },
  emerald:{ border: "border-[#34d399]/20 hover:border-[#34d399]/40", line: "bg-[#34d399]", glow: "from-[#34d399]/15", arrow: "text-[#34d399]" },
  cyan:   { border: "border-[#22d3ee]/20 hover:border-[#22d3ee]/40", line: "bg-[#22d3ee]", glow: "from-[#22d3ee]/15", arrow: "text-[#22d3ee]" },
};

export default function ProjectCard({ title, subtitle, accent, href = "/projects", status }: Props) {
  const a = accentMap[accent];
  return (
    <a
      href={href}
      className={`group relative flex items-stretch bg-[#0a0f14]/70 backdrop-blur-md border ${a.border} overflow-hidden transition-all duration-300 hover:bg-[#0e141c]/80`}
    >
      {/* accent line top */}
      <div className={`absolute top-0 left-12 right-8 h-[1px] ${a.line} opacity-60 group-hover:opacity-100 transition`} />
      {/* background glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${a.glow} to-transparent opacity-0 group-hover:opacity-100 transition`} />
      
      {/* left visual */}
      <div className="w-[88px] shrink-0 relative overflow-hidden bg-black/20 flex items-center justify-center">
        {/* placeholder wireframe vibe */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition">
          <svg viewBox="0 0 100 80" className="w-full h-full" preserveAspectRatio="none">
            {accent === "gold" && <path d="M0 60 L20 35 L40 50 L60 20 L80 40 L100 30" fill="none" stroke="#c9a86a" strokeWidth="0.9" />}
            {accent === "blue" && <><circle cx="50" cy="40" r="28" fill="none" stroke="#3aa6ff" strokeWidth="0.6" opacity="0.5"/><path d="M20 30 L50 10 L80 30 L60 65 L20 55 Z" fill="none" stroke="#3aa6ff" strokeWidth="0.7"/></>}
            {accent === "red" && <><circle cx="50" cy="40" r="26" fill="none" stroke="#ff3b3b" strokeWidth="0.6"/><path d="M20 40 Q50 5 80 40 Q50 75 20 40" fill="none" stroke="#ff3b3b" strokeWidth="0.6"/></>}
            {(accent === "violet" || accent === "emerald" || accent === "cyan") && <path d="M10 70 L30 15 L50 45 L70 10 L90 70" fill="none" stroke="currentColor" strokeWidth="0.7" />}
          </svg>
        </div>
        <div className={`relative w-14 h-14 rounded-full border border-white/10 flex items-center justify-center ${a.arrow} opacity-60`}>
          <span className="text-[8px] tracking-[0.2em] font-mono">◆</span>
        </div>
      </div>

      <div className="flex-1 py-4 px-4 pr-3 flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-2">
          <div className={`h-[1px] w-6 ${a.line} opacity-70`} />
          <div className="text-[10px] tracking-[0.22em] font-mono text-white/85 truncate">{title}</div>
          {status && <span className="ml-auto text-[7px] tracking-[0.16em] font-mono px-1.5 py-0.5 rounded border border-white/10 text-white/35">{status}</span>}
        </div>
        <div className="mt-2 text-[10px] leading-[1.5] tracking-[0.02em] font-mono text-white/45 whitespace-pre-line">{subtitle}</div>
        <div className={`mt-3 inline-flex items-center gap-1.5 text-[11px] ${a.arrow} opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all`}>
          <span>→</span>
        </div>
      </div>
    </a>
  );
}
