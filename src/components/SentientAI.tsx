import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Wifi, Send } from "lucide-react";

export const SentientAI = () => {
  const [step, setStep] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-80 h-96 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col">
      <div className="h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50">
              <Cpu size={16} className="text-cyan-400" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-slate-900 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold font-mono">
              NEON_AI_V2
            </h4>
            <p className="text-[10px] text-cyan-500/70">SYSTEM_ONLINE</p>
          </div>
        </div>
        <Wifi size={16} className="text-slate-600" />
      </div>

      <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="self-start max-w-[85%] bg-slate-900 border border-slate-700 rounded-2xl rounded-tl-none p-3 z-10"
        >
          <p className="text-xs text-slate-300">
            Sistem analiz ediliyor... NeonDijital protokolleri aktif.
          </p>
        </motion.div>

        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="self-end max-w-[85%] bg-cyan-500/10 border border-cyan-500/30 rounded-2xl rounded-tr-none p-3 z-10"
          >
            <p className="text-xs text-cyan-100">Analiz sonucu nedir?</p>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="self-start flex gap-1 bg-slate-900 border border-slate-700 rounded-2xl rounded-tl-none p-4 w-16 items-center justify-center z-10"
          >
            <div
              className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="self-start max-w-[90%] bg-slate-900 border border-cyan-500/30 rounded-2xl rounded-tl-none p-3 z-10"
          >
            <p className="text-xs text-slate-300">
              Optimizasyon{" "}
              <span className="text-green-400 font-bold">%100</span> tamamlandı.
              🚀
            </p>
          </motion.div>
        )}
      </div>

      <div className="h-16 bg-slate-900 border-t border-slate-800 p-3 flex gap-2 z-20">
        <div className="flex-1 bg-slate-950 rounded-lg border border-slate-700 flex items-center px-3">
          <div className="w-1.5 h-4 bg-cyan-500 animate-pulse"></div>
        </div>
        <button className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-cyan-400 transition-colors">
          <Send size={18} className="text-slate-900" />
        </button>
      </div>
    </div>
  );
};
