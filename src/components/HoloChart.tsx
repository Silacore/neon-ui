import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";

export const HoloChart = () => {
  const data = [
    { label: "MON", value: 45 },
    { label: "TUE", value: 70 },
    { label: "WED", value: 30 },
    { label: "THU", value: 90 },
    { label: "FRI", value: 65 },
    { label: "SAT", value: 50 },
    { label: "SUN", value: 80 },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-md h-64 bg-slate-950 rounded-2xl border border-slate-800 p-6 flex flex-col overflow-hidden group hover:border-cyan-500/30 transition-colors">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      <motion.div
        animate={{ left: ["-10%", "110%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 w-[2px] h-full bg-cyan-400/30 shadow-[0_0_15px_#22d3ee] z-0 blur-[1px]"
      />
      <div className="flex justify-between items-start mb-6 z-10">
        <div>
          <h3 className="text-white font-bold text-sm flex items-center gap-2">
            <BarChart3 size={16} className="text-cyan-400" />
            NETWORK TRAFFIC
          </h3>
          <p className="text-[10px] text-slate-500 font-mono">
            LIVE DATA STREAM
          </p>
        </div>
        <div className="flex items-center gap-1 text-green-400 bg-green-900/20 px-2 py-1 rounded border border-green-500/30">
          <TrendingUp size={14} />
          <span className="text-xs font-bold">+24%</span>
        </div>
      </div>

      <div className="flex-1 flex items-end justify-between gap-2 relative z-10">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex-1 flex flex-col items-center gap-2 relative"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === idx && (
              <div className="absolute -top-8 bg-slate-900 border border-cyan-500 text-cyan-400 text-[10px] font-bold px-2 py-1 rounded pointer-events-none">
                {item.value}%
              </div>
            )}
            <div className="w-full relative flex items-end h-32 rounded-t-sm overflow-hidden bg-slate-900/50">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${item.value}%` }}
                transition={{ duration: 1, delay: idx * 0.1, type: "spring" }}
                className={`w-full bottom-0 absolute transition-all duration-300 ${
                  hoveredIndex === idx
                    ? "bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                    : "bg-cyan-500/40"
                }`}
              />
            </div>
            <span
              className={`text-[9px] font-mono transition-colors ${hoveredIndex === idx ? "text-white" : "text-slate-600"}`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
