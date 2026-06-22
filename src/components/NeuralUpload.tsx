import React, { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, FileCode, CheckCircle2, ScanLine } from "lucide-react";

export const NeuralUpload = () => {
  const [status, setStatus] = useState<"idle" | "scanning" | "complete">(
    "idle",
  );

  const handleClick = () => {
    if (status !== "idle") return;
    setStatus("scanning");
    setTimeout(() => {
      setStatus("complete");
      setTimeout(() => setStatus("idle"), 3000);
    }, 2500);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative w-full max-w-md h-64 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all duration-500 group ${
        status === "idle"
          ? "border-slate-700 bg-slate-900/50 hover:border-cyan-500/50"
          : ""
      } ${status === "scanning" ? "border-cyan-500 bg-cyan-950/20" : ""} ${
        status === "complete" ? "border-green-500 bg-green-950/20" : ""
      }`}
    >
      {status === "idle" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center text-center p-6"
        >
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-slate-700 group-hover:border-cyan-500">
            <UploadCloud
              size={32}
              className="text-slate-400 group-hover:text-cyan-400 transition-colors"
            />
          </div>
          <h3 className="text-white font-bold text-lg mb-1">INITIATE UPLOAD</h3>
          <p className="text-slate-500 text-xs font-mono">
            DRAG DATA PACKET OR CLICK TO SCAN
          </p>
        </motion.div>
      )}

      {status === "scanning" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ top: 0 }}
            animate={{ top: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1 bg-cyan-400 shadow-[0_0_20px_#22d3ee] z-10"
          />
          <div className="w-20 h-24 border border-cyan-500/50 rounded-lg flex items-center justify-center bg-cyan-900/20 mb-4">
            <FileCode size={40} className="text-cyan-400 opacity-50" />
          </div>
          <h3 className="text-cyan-400 font-bold text-sm animate-pulse font-mono">
            ANALYZING STRUCTURE...
          </h3>
        </div>
      )}

      {status === "complete" && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
            <CheckCircle2 size={32} className="text-green-400" />
          </div>
          <h3 className="text-green-400 font-bold text-xl tracking-widest">
            UPLOAD SECURE
          </h3>
        </motion.div>
      )}

      <ScanLine
        size={20}
        className={`absolute top-4 right-4 transition-colors ${status === "scanning" ? "text-cyan-500 animate-spin" : "text-slate-800"}`}
      />
    </div>
  );
};
