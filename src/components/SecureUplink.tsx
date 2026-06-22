import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Wifi, Scan, Send, ShieldCheck } from "lucide-react";

export const SecureUplink = () => {
  const [formState, setFormState] = useState<"idle" | "encrypting" | "sent">(
    "idle",
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("encrypting");
    setTimeout(() => setFormState("sent"), 2500);
  };

  return (
    <div className="relative w-full max-w-md bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex flex-col">
      <div className="bg-slate-900/80 p-3 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Lock size={14} className="text-green-500" />
          <span className="text-[10px] text-green-500 font-mono tracking-widest">
            ENCRYPTED CONNECTION // TLS_1.3
          </span>
        </div>
        <Wifi size={14} className="text-slate-600 animate-pulse" />
      </div>

      <div className="p-6 relative">
        {formState === "sent" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10 text-center"
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 border border-green-500/50">
              <ShieldCheck size={32} className="text-green-400" />
            </div>
            <h3 className="text-white font-bold text-xl mb-1">
              TRANSMISSION COMPLETE
            </h3>
            <button
              onClick={() => setFormState("idle")}
              className="mt-6 text-xs text-cyan-500 hover:text-cyan-400 underline"
            >
              Yeni Mesaj
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              required
              type="text"
              placeholder="Identity (Name)"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all placeholder-slate-600"
            />
            <input
              required
              type="email"
              placeholder="Frequency (Email)"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all placeholder-slate-600"
            />
            <textarea
              required
              rows={3}
              placeholder="Data Packet (Message)"
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all placeholder-slate-600 resize-none"
            />
            <button
              disabled={formState === "encrypting"}
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {formState === "encrypting" ? (
                <>
                  <Scan size={18} className="animate-spin" />
                  <span>ENCRYPTING...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>INITIALIZE UPLINK</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
