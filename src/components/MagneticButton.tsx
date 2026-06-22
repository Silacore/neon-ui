import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Magnet } from "lucide-react";

export const MagneticButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.4);
    y.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="p-10 flex items-center justify-center">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className="relative cursor-pointer group"
      >
        <div className="absolute -inset-8 rounded-full z-0"></div>
        <div className="relative z-10 px-8 py-4 bg-slate-900 border border-slate-700 rounded-full flex items-center gap-3 transition-colors group-hover:border-purple-500/50 group-hover:bg-slate-800 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          <Magnet
            size={20}
            className="text-purple-400 group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="text-sm font-bold text-white tracking-wider">
            MAGNETIC UI
          </span>
        </div>
      </motion.div>
    </div>
  );
};
