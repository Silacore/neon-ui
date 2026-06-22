import React from "react";

export const PortalButton = () => (
  <button className="relative group w-64 h-14 bg-transparent overflow-hidden rounded-lg">
    <div className="absolute inset-0 w-full h-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_90deg,#8b5cf6_180deg,transparent_270deg,transparent_360deg)] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_1s_linear_infinite] opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
    <div className="absolute inset-[2px] bg-slate-900 rounded-lg z-10 flex items-center justify-center">
      <span className="text-purple-400 font-bold text-lg tracking-widest group-hover:text-white transition-colors z-20 font-mono whitespace-nowrap">
        OPEN_RIFT
      </span>
    </div>
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="absolute top-0 left-1/2 w-0 h-[1px] bg-white group-hover:w-full group-hover:left-0 transition-all duration-300 shadow-[0_0_10px_white]"></div>
    <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-white group-hover:w-full group-hover:left-0 transition-all duration-300 shadow-[0_0_10px_white]"></div>
  </button>
);
