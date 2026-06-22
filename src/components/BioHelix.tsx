import React from "react";
import { motion } from "framer-motion";
import { Dna } from "lucide-react";

export const BioHelix = () => {
  return (
    <div className="relative w-64 h-80 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center justify-center overflow-hidden group hover:border-green-500/30 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)]"></div>

      <div className="absolute top-4 left-4 flex items-center gap-2 text-green-500">
        <Dna size={16} />
        <span className="text-[10px] font-bold tracking-widest font-mono">
          GENOME_SEQUENCE
        </span>
      </div>

      <div className="relative h-48 w-32 flex justify-between items-center px-8">
        <div className="flex flex-col gap-3 items-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`left-${i}`}
              animate={{
                x: [0, 20, 0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
              className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]"
            />
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center opacity-20 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`line-${i}`}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
              className="h-[1px] bg-green-500"
            />
          ))}
        </div>

        <div className="flex flex-col gap-3 items-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`right-${i}`}
              animate={{
                x: [0, -20, 0, 20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
              className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 w-full text-center">
        <span className="text-[9px] text-slate-500 font-mono">
          REPLICATING...
        </span>
      </div>
    </div>
  );
};
