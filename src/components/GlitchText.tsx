import React from "react";

export const GlitchText = () => (
  <div className="relative group cursor-pointer inline-block p-4">
    <h1 className="text-5xl font-black text-white relative z-10 group-hover:text-transparent transition-colors duration-100">
      GLITCH
    </h1>
    <h1 className="absolute top-4 left-4 text-5xl font-black text-pink-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-[3px] animate-pulse select-none blur-[1px]">
      GLITCH
    </h1>
    <h1 className="absolute top-4 left-4 text-5xl font-black text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-[3px] group-hover:translate-y-[2px] animate-bounce select-none blur-[1px]">
      GLITCH
    </h1>
  </div>
);
