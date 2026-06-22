import React, { useState } from "react";
import { Unlock, ChevronsRight } from "lucide-react";

export const SlideToHack = () => {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="w-full max-w-xs p-8 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center gap-4">
      <div className="text-center space-y-1">
        <h3 className="text-white font-bold tracking-widest text-sm">
          SYSTEM_LOCKED
        </h3>
        <p className="text-[10px] text-slate-500 font-mono">
          ENCRYPTION LEVEL: MAX
        </p>
      </div>

      <div
        className={`relative w-full h-14 bg-slate-900 rounded-full border overflow-hidden cursor-pointer group select-none transition-all duration-500 ${
          unlocked
            ? "border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            : "border-slate-700 hover:border-cyan-500/50"
        }`}
        onClick={() => setUnlocked(!unlocked)}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center text-xs font-bold tracking-widest transition-opacity duration-300 ${
            unlocked ? "opacity-0" : "text-slate-600 animate-pulse"
          }`}
        >
          SLIDE TO HACK
        </div>

        <div
          className={`absolute inset-0 flex items-center justify-center text-xs font-bold tracking-widest text-white transition-all duration-300 ${
            unlocked ? "opacity-100" : "opacity-0 scale-50"
          }`}
        >
          ACCESS GRANTED
        </div>

        <div
          className={`absolute top-1 bottom-1 w-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ease-out ${
            unlocked
              ? "left-[calc(100%-3.5rem)] bg-green-500 text-slate-900"
              : "left-1 bg-cyan-500 text-white group-hover:shadow-[0_0_15px_#22d3ee]"
          }`}
        >
          {unlocked ? (
            <Unlock size={18} />
          ) : (
            <ChevronsRight size={20} className="animate-pulse" />
          )}
        </div>

        <div
          className={`absolute top-0 left-0 h-full bg-cyan-500/20 transition-all duration-500 ${
            unlocked ? "w-full bg-green-500/20" : "w-12"
          }`}
        ></div>
      </div>
    </div>
  );
};
