import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";

export const HoloProductCard = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    setRotate({ x: (y - centerY) / 10, y: (centerX - x) / 10 });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <div className="perspective-1000 w-full max-w-sm flex justify-center p-4">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-72 h-96 bg-slate-900 rounded-2xl border border-slate-700 group cursor-pointer hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:border-cyan-500/50 transition-shadow duration-300"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        <div
          style={{ transform: "translateZ(50px)" }}
          className="absolute top-6 left-0 w-full h-48 flex items-center justify-center"
        >
          <div className="w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-2xl absolute opacity-40 animate-pulse"></div>
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80"
            alt="Cyber Gadget"
            className="w-40 h-40 object-cover rounded-xl border-2 border-white/20 relative z-10"
          />
        </div>

        <div
          style={{ transform: "translateZ(30px)" }}
          className="absolute bottom-20 left-6 right-6"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-white font-bold text-xl tracking-wide">
                NEON HEADSET
              </h3>
              <p className="text-cyan-500 text-xs font-mono">
                NEURAL LINK COMPATIBLE
              </p>
            </div>
            <div className="bg-slate-800 p-2 rounded-lg border border-slate-600">
              <Heart size={18} className="text-pink-500" />
            </div>
          </div>
        </div>

        <div
          style={{ transform: "translateZ(20px)" }}
          className="absolute bottom-6 left-6 right-6 flex items-center justify-between"
        >
          <div className="flex flex-col">
            <span className="text-slate-500 text-[10px] line-through">
              $299.00
            </span>
            <span className="text-white font-black text-2xl">
              $149<span className="text-sm align-top">.99</span>
            </span>
          </div>
          <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-4 py-2 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <ShoppingCart size={18} />
            <span className="text-sm">BUY</span>
          </button>
        </div>

        <div
          style={{ transform: "translateZ(40px)" }}
          className="absolute top-4 right-4 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg"
        >
          NEW ARRIVAL
        </div>
      </motion.div>
    </div>
  );
};
