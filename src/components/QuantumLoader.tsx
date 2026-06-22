import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const QuantumLoader = () => (
  <div className="relative flex items-center justify-center w-32 h-32">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute inset-2 rounded-full border-[3px] border-t-pink-500 border-r-transparent border-b-purple-500 border-l-transparent shadow-[0_0_15px_rgba(236,72,153,0.5)]"
    />
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute w-12 h-12 bg-cyan-400 rounded-full blur-md"
    />
    <div className="absolute w-8 h-8 bg-white rounded-full z-10 shadow-[0_0_20px_rgba(34,211,238,1)] flex items-center justify-center">
      <Zap size={16} className="text-cyan-900" />
    </div>
  </div>
);
