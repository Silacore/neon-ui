import React, { useState } from "react";
import { motion } from "framer-motion";

export const PlasmaToggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`w-20 h-10 flex items-center bg-slate-950 rounded-full p-1 cursor-pointer border-2 transition-all duration-300 ${
        isOn
          ? "border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)] justify-end"
          : "border-slate-700 justify-start"
      }`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`h-7 w-7 rounded-full shadow-md ${
          isOn
            ? "bg-green-400 shadow-[0_0_15px_rgba(74,222,128,1)]"
            : "bg-slate-500"
        }`}
      />
    </div>
  );
};
