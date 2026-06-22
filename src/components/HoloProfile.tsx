import React from "react";
import { motion } from "framer-motion";

export const HoloProfile = () => (
  <div className="relative group w-64 h-80 rounded-xl overflow-hidden bg-slate-900/40 border border-cyan-500/30 backdrop-blur-sm shadow-2xl transform transition-transform hover:scale-[1.02]">
    <motion.div
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 w-full h-1 bg-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20"
    />
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSIyIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')",
      }}
    ></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
      <div className="w-24 h-24 rounded-full border-2 border-cyan-500/50 p-1 mb-4 relative group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all bg-slate-800">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
          alt="Avatar"
          className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <h3 className="text-xl font-bold text-white tracking-widest font-mono">
        CYBER_USER
      </h3>
      <p className="text-xs text-cyan-400/70 mt-1">LVL 99 NETRUNNER</p>
    </div>
  </div>
);
