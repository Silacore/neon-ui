import React from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export const HudCard = () => (
  <div className="relative w-72 h-48 bg-slate-900/80 border border-slate-700/50 p-6 overflow-hidden group hover:border-cyan-500/50 transition-colors duration-500">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500"></div>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>
    <motion.div
      animate={{ top: ["-10%", "110%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_10px_#22d3ee] z-0"
    />
    <div className="relative z-10 font-mono">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs text-cyan-500 animate-pulse">
          SYSTEM_READY
        </span>
        <Activity size={16} className="text-cyan-400" />
      </div>
      <h3 className="text-2xl text-white font-bold mb-1">DATA_CORE</h3>
      <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "85%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]"
        />
      </div>
      <div className="flex justify-between text-xs text-slate-400">
        <span>UPLINK</span>
        <span className="text-green-400">85% STABLE</span>
      </div>
    </div>
  </div>
);
