import React, { useState } from "react";
import { Delete } from "lucide-react";

export const SecurityKeypad = () => {
  const [pin, setPin] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const CORRECT_PIN = "1234";

  const handlePress = (num: string) => {
    if (status === "success") return;
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === 4) {
        if (newPin === CORRECT_PIN) {
          setStatus("success");
        } else {
          setStatus("error");
          setTimeout(() => {
            setPin("");
            setStatus("idle");
          }, 1000);
        }
      }
    }
  };

  const handleDelete = () => {
    if (status !== "success") setPin((prev) => prev.slice(0, -1));
  };

  return (
    <div
      className={`relative w-64 bg-slate-950 rounded-2xl border-2 p-6 flex flex-col items-center gap-6 transition-colors duration-300 ${
        status === "idle" ? "border-slate-800" : ""
      } ${status === "success" ? "border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.2)]" : ""} ${
        status === "error"
          ? "border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]"
          : ""
      }`}
    >
      <div className="w-full h-12 bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center gap-2 mb-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              i < pin.length
                ? status === "success"
                  ? "bg-green-500 scale-125"
                  : status === "error"
                    ? "bg-red-500"
                    : "bg-cyan-400"
                : "bg-slate-700"
            }`}
          ></div>
        ))}
      </div>

      <div className="text-[10px] font-mono text-slate-500 -mt-4">
        {status === "idle" && "ENTER PASSCODE (1234)"}
        {status === "success" && (
          <span className="text-green-500 font-bold">UNLOCKED</span>
        )}
        {status === "error" && (
          <span className="text-red-500 font-bold">INVALID PIN</span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handlePress(num.toString())}
            className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 text-white font-mono text-lg font-bold hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 active:scale-95 transition-all mx-auto flex items-center justify-center"
          >
            {num}
          </button>
        ))}
        <div className="w-12 h-12"></div>
        <button
          onClick={() => handlePress("0")}
          className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 text-white font-mono text-lg font-bold hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 active:scale-95 transition-all mx-auto flex items-center justify-center"
        >
          0
        </button>
        <button
          onClick={handleDelete}
          className="w-12 h-12 rounded-full bg-slate-900/50 border border-slate-800 text-red-400 hover:bg-red-900/20 hover:border-red-500/30 active:scale-95 transition-all mx-auto flex items-center justify-center"
        >
          <Delete size={20} />
        </button>
      </div>
    </div>
  );
};
