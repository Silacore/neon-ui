import React from "react";

export const CyberInput = () => (
  <div className="relative group w-full max-w-xs">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
    <div className="relative">
      <input
        type="text"
        placeholder="Enter Matrix..."
        className="w-full bg-slate-900 text-white px-4 py-3 rounded-lg border-none focus:ring-0 focus:outline-none placeholder-slate-500 relative z-10"
      />
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-500 z-20 group-hover:w-full"></div>
    </div>
  </div>
);
