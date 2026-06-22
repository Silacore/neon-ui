import React from "react";

export const LiquidButton = () => (
  <button className="relative px-8 py-4 font-bold text-white rounded-full overflow-hidden group bg-slate-800 border border-slate-700 transform transition-transform active:scale-95">
    <span className="relative z-10 group-hover:text-slate-900 transition-colors duration-300">
      HOVER ME
    </span>
    <div className="absolute inset-0 h-full w-full bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
  </button>
);
