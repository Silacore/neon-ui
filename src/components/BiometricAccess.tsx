import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fingerprint, ScanFace, CheckCircle2 } from "lucide-react";

export const BiometricAccess = () => {
  const [status, setStatus] = useState<
    "idle" | "scanning" | "granted" | "denied"
  >("idle");

  const handleScan = () => {
    if (status !== "idle") return;
    setStatus("scanning");
    setTimeout(() => {
      const isGranted = Math.random() > 0.2;
      setStatus(isGranted ? "granted" : "denied");
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <div
        onClick={handleScan}
        className={`relative w-64 h-80 bg-slate-950 rounded-3xl border-2 flex flex-col items-center justify-between p-8 cursor-pointer overflow-hidden transition-all duration-500 shadow-2xl group ${
          status === "idle" ? "border-slate-800 hover:border-cyan-500/50" : ""
        } ${status === "scanning" ? "border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]" : ""} ${
          status === "granted"
            ? "border-green-500 shadow-[0_0_50px_rgba(34,197,94,0.5)]"
            : ""
        } ${status === "denied" ? "border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.5)]" : ""}`}
      >
        <div className="z-10 text-center">
          <h3
            className={`text-xs font-bold tracking-[0.2em] mb-1 transition-colors ${
              status === "idle" ? "text-slate-500" : ""
            } ${status === "scanning" ? "text-blue-400 animate-pulse" : ""} ${
              status === "granted" ? "text-green-400" : ""
            } ${status === "denied" ? "text-red-400" : ""}`}
          >
            {status === "idle" && "SYSTEM LOCKED"}
            {status === "scanning" && "SCANNING ID..."}
            {status === "granted" && "ACCESS GRANTED"}
            {status === "denied" && "ACCESS DENIED"}
          </h3>
        </div>

        <div className="relative z-10 my-auto">
          {status === "scanning" && (
            <>
              <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-ping"></div>
              <div
                className="absolute inset-0 rounded-full border border-blue-400/50 animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </>
          )}
          <Fingerprint
            size={80}
            strokeWidth={1}
            className={`transition-all duration-300 ${
              status === "idle"
                ? "text-slate-600 group-hover:text-cyan-400"
                : ""
            } ${status === "scanning" ? "text-blue-500 opacity-50" : ""} ${
              status === "granted" ? "text-green-400 scale-110" : ""
            } ${status === "denied" ? "text-red-500" : ""}`}
          />
          {status === "scanning" && (
            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-blue-400 shadow-[0_0_15px_#60a5fa] z-20"
            />
          )}
        </div>

        <div className="z-10 flex items-center gap-2 text-[10px] text-slate-600 font-mono">
          <ScanFace size={14} />
          <span>BIOMETRIC_V4.2</span>
        </div>

        {status === "granted" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute inset-0 z-30 bg-green-500/10 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="bg-slate-900 border border-green-500 p-4 rounded-full shadow-[0_0_50px_rgba(34,197,94,0.5)]">
              <CheckCircle2 size={40} className="text-green-500" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
