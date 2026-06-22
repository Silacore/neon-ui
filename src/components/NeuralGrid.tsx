import React, { useState } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export const NeuralGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cells = Array.from({ length: 64 });

  return (
    <div className="relative w-64 h-64 bg-black rounded-xl border border-slate-800 overflow-hidden flex flex-wrap content-start group">
      <div className="absolute inset-0 bg-cyan-900/5 pointer-events-none"></div>

      {cells.map((_, i) => (
        <motion.div
          key={i}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative w-8 h-8 border-[0.5px] border-slate-900/50 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: hoveredIndex === i ? 1 : 0,
              scale: hoveredIndex === i ? 1.5 : 0,
              backgroundColor: hoveredIndex === i ? "#22d3ee" : "transparent",
            }}
            transition={{ duration: 0.2 }}
            className="w-full h-full bg-cyan-500 blur-md absolute inset-0 z-10"
          />
          <motion.div
            animate={{
              scale: hoveredIndex === i ? 1.5 : 1,
              backgroundColor: hoveredIndex === i ? "#fff" : "#1e293b",
            }}
            className="w-1 h-1 rounded-full transition-colors duration-300"
          />
        </motion.div>
      ))}

      <div className="absolute bottom-4 left-4 pointer-events-none z-20">
        <div className="flex items-center gap-2 text-cyan-400">
          <Activity size={14} className="animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest font-mono">
            NEURAL_LINK_ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
};
