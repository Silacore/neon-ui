import React, { useState } from "react";
import { motion } from "framer-motion";
import { Power, Snowflake, Wind } from "lucide-react";

export const CryoSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative p-8 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center gap-4 group hover:border-blue-500/30 transition-colors">
      <div className="flex justify-between w-full font-mono text-[10px] tracking-[0.2em] mb-2">
        <span className="text-slate-500">SYSTEM STATUS</span>
        <span
          className={isActive ? "text-blue-400 font-bold" : "text-slate-600"}
        >
          {isActive ? "ONLINE" : "STANDBY"}
        </span>
      </div>

      <div
        onClick={() => setIsActive(!isActive)}
        className={`relative w-64 h-16 bg-slate-900 rounded-full border-2 cursor-pointer overflow-hidden transition-all duration-500 shadow-inner ${
          isActive
            ? "border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            : "border-slate-700"
        }`}
      >
        {isActive && (
          <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
        )}

        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`absolute top-1 bottom-1 w-24 rounded-full flex items-center justify-center gap-2 z-10 shadow-lg border border-white/10 ${
            isActive
              ? "right-1 bg-gradient-to-r from-blue-600 to-cyan-500"
              : "left-1 bg-gradient-to-r from-slate-700 to-slate-600"
          }`}
        >
          {isActive ? (
            <Power size={20} className="text-white" />
          ) : (
            <Snowflake size={20} className="text-slate-400" />
          )}
        </motion.div>

        <div className="absolute inset-0 flex justify-between items-center px-6 font-bold text-xs pointer-events-none select-none">
          <span
            className={`transition-opacity duration-300 ${isActive ? "opacity-0" : "text-slate-600"}`}
          >
            ENGAGE
          </span>
          <span
            className={`transition-opacity duration-300 ${isActive ? "text-blue-300" : "opacity-0"}`}
          >
            ACTIVE
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
        <Wind
          size={12}
          className={isActive ? "animate-spin text-blue-400" : ""}
        />
        <span>COOLING SYSTEMS: {isActive ? "100%" : "OFFLINE"}</span>
      </div>
    </div>
  );
};
