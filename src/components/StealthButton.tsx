import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Power, CheckCircle2 } from "lucide-react";

export const StealthButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLaunched, setIsLaunched] = useState(false);

  const handleLaunch = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isOpen) {
      setIsOpen(true);
      return;
    }
    setIsLaunched(true);
    setTimeout(() => {
      setIsLaunched(false);
      setIsOpen(false);
    }, 2000);
  };

  return (
    <div className="relative w-72 h-40 bg-[#1a1c23] rounded-xl border border-slate-800 shadow-2xl flex flex-col items-center justify-center p-6 group">
      <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#f59e0b,#f59e0b_10px,#000_10px,#000_20px)] rounded-t-xl opacity-50"></div>

      <div className="relative w-24 h-24">
        <motion.div
          onClick={() => !isLaunched && setIsOpen(!isOpen)}
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          style={{ transformOrigin: "top" }}
          className={`absolute inset-0 z-20 bg-red-600/20 backdrop-blur-sm border-2 border-red-500/50 rounded-lg flex items-center justify-center cursor-pointer ${isOpen ? "pointer-events-none" : ""}`}
        >
          <ShieldAlert className="text-red-200 drop-shadow-md" size={32} />
          <span className="absolute bottom-1 text-[8px] font-black text-red-200 tracking-widest">
            DANGER
          </span>
        </motion.div>

        <button
          onClick={handleLaunch}
          disabled={!isOpen || isLaunched}
          className={`w-full h-full bg-slate-800 rounded-lg border-b-4 border-slate-950 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center shadow-inner ${
            isLaunched
              ? "bg-green-500 shadow-[0_0_30px_#22c55e]"
              : "hover:bg-red-600 hover:shadow-[0_0_20px_#ef4444]"
          }`}
        >
          {isLaunched ? (
            <CheckCircle2 size={40} className="text-white animate-bounce" />
          ) : (
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg border-2 border-red-400 flex items-center justify-center ${isOpen ? "animate-pulse" : ""}`}
            >
              <Power size={24} className="text-white" />
            </div>
          )}
        </button>
      </div>

      <div className="mt-4 text-xs font-mono text-slate-500 text-center">
        {isLaunched
          ? "SEQUENCE INITIATED"
          : isOpen
            ? "ARMED & READY"
            : "SAFETY LOCKED"}
      </div>
    </div>
  );
};
