import React from "react";

export const ArcReactor = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse"></div>
    <div className="absolute inset-0 rounded-full border-4 border-slate-700 shadow-[0_0_20px_rgba(6,182,212,0.4)] bg-slate-900/90"></div>
    <div className="absolute inset-2 rounded-full border-[2px] border-transparent border-t-cyan-400 border-b-cyan-400 animate-[spin_3s_linear_infinite]"></div>
    <div className="absolute inset-4 rounded-full border-[2px] border-transparent border-l-cyan-300 border-r-cyan-300 animate-[spin_2s_linear_infinite_reverse]"></div>
    <div className="absolute w-12 h-12 rounded-full bg-white shadow-[0_0_30px_#22d3ee] animate-pulse z-10 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-cyan-100/50 backdrop-blur-sm border border-cyan-300"></div>
    </div>
    <div className="absolute top-0 w-1 h-4 bg-cyan-500 blur-[1px]"></div>
    <div className="absolute bottom-0 w-1 h-4 bg-cyan-500 blur-[1px]"></div>
    <div className="absolute left-0 w-4 h-1 bg-cyan-500 blur-[1px]"></div>
    <div className="absolute right-0 w-4 h-1 bg-cyan-500 blur-[1px]"></div>
  </div>
);
