import React, { useState } from "react";
import { motion } from "framer-motion";
import { Music, Pause, Play } from "lucide-react";

export const SonicVisualizer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const bars = Array.from({ length: 12 }).map((_, i) => i);

  return (
    <div className="relative w-full max-w-xs bg-slate-950 rounded-3xl border border-slate-800 p-6 flex flex-col items-center gap-6 group hover:border-pink-500/50 transition-colors duration-500">
      <div
        className={`absolute inset-0 bg-pink-500/5 blur-2xl rounded-3xl transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-0"}`}
      ></div>

      <div className="w-full flex justify-between items-center z-10">
        <div className="flex items-center gap-2 text-pink-500">
          <Music size={18} />
          <span className="text-xs font-bold tracking-widest font-mono">
            NEON_BEATS
          </span>
        </div>
        <div
          className={`w-2 h-2 rounded-full ${isPlaying ? "bg-green-500 animate-pulse" : "bg-slate-700"}`}
        ></div>
      </div>

      <div className="flex items-end justify-center gap-1.5 h-24 w-full z-10">
        {bars.map((i) => (
          <motion.div
            key={i}
            initial={{ height: "20%" }}
            animate={{
              height: isPlaying ? ["20%", "80%", "30%", "100%", "40%"] : "20%",
              backgroundColor: isPlaying
                ? ["#ec4899", "#a855f7", "#ec4899"]
                : "#334155",
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.1,
            }}
            className="w-3 rounded-full bg-slate-700"
          />
        ))}
      </div>

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg ${
          isPlaying
            ? "bg-slate-900 border-2 border-pink-500 text-pink-500"
            : "bg-pink-600 text-white hover:scale-110"
        }`}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
      </button>

      <p className="text-[10px] text-slate-500 font-mono">
        {isPlaying ? "ANALYZING FREQUENCY..." : "WAITING FOR INPUT"}
      </p>
    </div>
  );
};
