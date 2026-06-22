import React from "react";
import { CreditCard } from "lucide-react";

export const GlassCard = () => (
  <div className="relative w-full max-w-xs h-48 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col justify-between p-6 overflow-hidden group hover:bg-white/10 transition-colors">
    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -translate-y-10 translate-x-10 group-hover:bg-purple-500/30 transition-colors"></div>
    <div className="relative z-10">
      <CreditCard className="text-white/80 mb-4" size={32} />
      <span className="font-mono text-white/80 text-xl tracking-widest">
        **** 4242
      </span>
    </div>
    <div className="relative z-10 flex justify-between items-end">
      <div>
        <p className="text-xs text-white/40">Card Holder</p>
        <p className="text-sm text-white/90">NEON USER</p>
      </div>
      <span className="font-bold text-white/90 italic">VISA</span>
    </div>
  </div>
);
