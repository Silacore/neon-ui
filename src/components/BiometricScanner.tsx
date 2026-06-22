import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fingerprint, Scan } from "lucide-react";

export const BiometricScanner = () => {
  const [status, setStatus] = useState<"idle" | "scanning" | "granted">("idle");

  const handleScan = () => {
    if (status === "granted") {
      setStatus("idle");
      return;
    }
    if (status === "scanning") return;
    setStatus("scanning");
    setTimeout(() => setStatus("granted"), 2000);
  };

  return (
    <div
      onClick={handleScan}
      className={`relative w-full h-64 rounded-xl overflow-hidden border transition-all duration-500 cursor-pointer flex flex-col items-center justify-center group ${
        status === "idle"
          ? "bg-slate-900 border-red-500/30 hover:border-red-500"
          : ""
      } ${
        status === "scanning"
          ? "bg-slate-900 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          : ""
      } ${
        status === "granted"
          ? "bg-green-950/30 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
          : ""
      }`}
    >
      <div className="relative z-10 p-6 rounded-full border border-white/10 bg-white/5">
        <Fingerprint
          size={64}
          className={`transition-colors duration-300 ${
            status === "idle" ? "text-red-400 opacity-50" : ""
          } ${status === "scanning" ? "text-cyan-400" : ""} ${
            status === "granted" ? "text-green-400" : ""
          }`}
        />
        {status === "scanning" && (
          <motion.div
            initial={{ top: 0, opacity: 0 }}
            animate={{ top: "100%", opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_15px_#22d3ee] z-20"
          />
        )}
      </div>
      <div className="mt-6 font-mono text-center z-10">
        {status === "idle" && (
          <h3 className="text-red-400 font-bold tracking-widest text-lg">
            LOCKED
          </h3>
        )}
        {status === "scanning" && (
          <h3 className="text-cyan-400 font-bold tracking-widest text-lg animate-pulse">
            SCANNING...
          </h3>
        )}
        {status === "granted" && (
          <h3 className="text-green-400 font-bold tracking-widest text-lg">
            ACCESS GRANTED
          </h3>
        )}
      </div>
      <Scan
        className={`absolute top-4 right-4 w-6 h-6 ${status === "granted" ? "text-green-500" : "text-slate-700"}`}
      />
    </div>
  );
};
