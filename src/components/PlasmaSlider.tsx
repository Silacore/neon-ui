import React, { useState } from "react";
import { AlertOctagon, Gauge } from "lucide-react";

export const PlasmaSlider = () => {
  const [value, setValue] = useState(50);

  const getStatus = (val: number) => {
    if (val < 60) return { text: "STABLE", hex: "#06b6d4" };
    if (val < 90) return { text: "HIGH_VOLTAGE", hex: "#a855f7" };
    return { text: "CRITICAL", hex: "#ef4444" };
  };

  const status = getStatus(value);

  return (
    <div className="w-full max-w-sm p-8 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center gap-6">
      <div className="w-full flex justify-between items-end font-mono">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 font-bold tracking-widest mb-1">
            ENERGY OUTPUT
          </span>
          <div
            className="flex items-center gap-2"
            style={{ color: status.hex }}
          >
            {value > 85 ? (
              <AlertOctagon size={18} className="animate-pulse" />
            ) : (
              <Gauge size={18} />
            )}
            <span className="text-xl font-black tracking-widest">{value}%</span>
          </div>
        </div>
        <div
          className="text-[10px] px-2 py-1 rounded border"
          style={{
            color: status.hex,
            borderColor: status.hex,
            backgroundColor: `${status.hex}20`,
          }}
        >
          {status.text}
        </div>
      </div>

      <div className="relative w-full h-12 flex items-center">
        <div className="absolute w-full h-2 bg-slate-800 rounded-full overflow-hidden"></div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer z-20"
        />
        <div
          className="absolute h-2 rounded-full pointer-events-none transition-all duration-75"
          style={{
            width: `${value}%`,
            backgroundColor: status.hex,
            boxShadow: `0 0 20px ${status.hex}`,
          }}
        ></div>
        <div
          className="absolute h-6 w-6 rounded-full border-2 bg-slate-900 z-10 pointer-events-none flex items-center justify-center transition-all duration-75"
          style={{
            left: `calc(${value}% - 12px)`,
            borderColor: status.hex,
            boxShadow: `0 0 15px ${status.hex}`,
          }}
        >
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
      </div>

      <p className="text-[10px] text-slate-600 text-center">
        DİKKAT: %90 üzeri değerler sistem kararlılığını bozabilir.
      </p>
    </div>
  );
};
