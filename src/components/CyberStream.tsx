import React from "react";
import { motion } from "framer-motion";

export const CyberStream = () => {
  const lines = [
    "Initializing core systems...",
    "Bypassing firewall [Proxy_8080]...",
    "Injecting payload: <Neon_V2.exe>...",
    "Access granted. Welcome user.",
    "Decrypting user data...",
    "Rendering 3D assets...",
    "Optimization complete.",
    "Connecting to neural link...",
    "Download: 99% complete...",
    "System unstable. Rerouting power...",
  ];

  return (
    <div className="w-full max-w-sm h-64 bg-black rounded-lg border border-slate-800 p-4 font-mono text-xs overflow-hidden relative group hover:border-green-500/50 transition-colors">
      <div className="absolute top-0 left-0 w-full h-6 bg-slate-900 border-b border-slate-800 flex items-center px-2 gap-2 z-20">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <span className="text-[10px] text-slate-500 ml-2">
          bash — neon_terminal
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-1 h-full">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: [0, 1, 0.5], x: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
              repeatDelay: 2,
            }}
            className="flex gap-2"
          >
            <span className="text-green-500">➜</span>
            <span
              className={`${line.includes("granted") ? "text-green-400 font-bold" : "text-green-500/80"}`}
            >
              {line}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 flex items-center gap-1 z-10">
        <span className="text-green-500">root@neon:~$</span>
        <span className="w-2 h-4 bg-green-500 animate-pulse"></span>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[size:100%_2px,3px_100%] pointer-events-none"></div>
    </div>
  );
};
