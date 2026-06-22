import React from "react";
import { Globe, Radar } from "lucide-react";

export const HoloRadar = () => {
  return (
    <div className="relative w-72 h-72 bg-slate-950 rounded-full border border-slate-800 flex items-center justify-center overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
      <div className="absolute inset-4 rounded-full border border-slate-800/50"></div>
      <div className="absolute inset-12 rounded-full border border-slate-800/50"></div>

      <div className="absolute inset-0 flex items-center justify-center opacity-20 text-cyan-500">
        <Globe size={180} strokeWidth={0.5} />
      </div>

      <div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
        <div className="w-full h-1/2 bg-gradient-to-l from-cyan-500/20 to-transparent border-r border-cyan-500/50 origin-bottom transform translate-y-full blur-[2px]"></div>
      </div>

      <div className="absolute top-1/3 left-1/3">
        <div className="relative">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full relative z-10"></div>
          <div className="absolute -top-6 -left-2 text-[8px] text-red-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
            TARGET_A
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 right-1/3">
        <div className="relative">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping absolute"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full relative z-10"></div>
          <div className="absolute -bottom-6 -right-2 text-[8px] text-yellow-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
            TARGET_B
          </div>
        </div>
      </div>

      <div className="absolute w-4 h-4 border-l border-t border-cyan-500/50 top-1/2 left-1/2 -translate-x-2 -translate-y-2"></div>
      <div className="absolute w-4 h-4 border-r border-b border-cyan-500/50 top-1/2 left-1/2 -translate-x-2 -translate-y-2"></div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700 text-[10px] text-cyan-400 font-mono backdrop-blur-sm flex items-center gap-2">
        <Radar size={12} className="animate-spin" />
        SCANNING SECTOR 7
      </div>
    </div>
  );
};
