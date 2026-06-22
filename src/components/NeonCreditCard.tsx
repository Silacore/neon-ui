import React, { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, User, Calendar, Lock, Wifi } from "lucide-react";

export const NeonCreditCard = () => {
  const [cardData, setCardData] = useState({
    number: "4242 4242 4242 4242",
    name: "NEON USER",
    expiry: "12/30",
    cvc: "123",
  });
  const [isFlipped, setIsFlipped] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-md p-4">
      <div
        className="relative w-80 h-48 perspective-1000 group cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="w-full h-full relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/30 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/30 blur-3xl rounded-full"></div>
            <div className="flex justify-between items-start relative z-10">
              <div className="w-10 h-8 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded-md border border-yellow-400/50"></div>
              <Wifi className="rotate-90 text-white/50" size={24} />
            </div>
            <div className="relative z-10 mt-2">
              <span className="font-mono text-xl text-white tracking-[0.15em]">
                {cardData.number || "#### #### #### ####"}
              </span>
            </div>
            <div className="flex justify-between items-end relative z-10">
              <div className="flex flex-col">
                <span className="text-[8px] text-slate-300 uppercase tracking-widest mb-1">
                  Card Holder
                </span>
                <span className="font-mono text-sm text-white font-bold uppercase">
                  {cardData.name || "FULL NAME"}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[8px] text-slate-300 uppercase tracking-widest mb-1">
                  Expires
                </span>
                <span className="font-mono text-sm text-white font-bold">
                  {cardData.expiry || "MM/YY"}
                </span>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 w-full h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="w-full h-10 bg-black mt-6"></div>
            <div className="mt-6 px-6">
              <div className="w-full h-8 bg-white flex items-center justify-end px-3 rounded text-slate-900 font-mono font-bold tracking-widest">
                {cardData.cvc || "123"}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full grid grid-cols-2 gap-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
        <div className="col-span-2 space-y-1">
          <label className="text-[10px] text-cyan-500 font-bold ml-1">
            CARD NUMBER
          </label>
          <div className="relative">
            <CreditCard
              size={16}
              className="absolute left-3 top-3 text-slate-500"
            />
            <input
              name="number"
              maxLength={19}
              placeholder="4242 4242 4242 4242"
              onChange={handleChange}
              onFocus={() => setIsFlipped(false)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-slate-700 font-mono"
            />
          </div>
        </div>
        <div className="col-span-2 space-y-1">
          <label className="text-[10px] text-cyan-500 font-bold ml-1">
            CARD HOLDER
          </label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-3 text-slate-500" />
            <input
              name="name"
              placeholder="NEON USER"
              onChange={handleChange}
              onFocus={() => setIsFlipped(false)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-slate-700 uppercase"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] text-cyan-500 font-bold ml-1">
            EXPIRY
          </label>
          <div className="relative">
            <Calendar
              size={16}
              className="absolute left-3 top-3 text-slate-500"
            />
            <input
              name="expiry"
              placeholder="MM/YY"
              maxLength={5}
              onChange={handleChange}
              onFocus={() => setIsFlipped(false)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder-slate-700 font-mono"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] text-purple-500 font-bold ml-1">
            CVC
          </label>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-3 text-slate-500" />
            <input
              name="cvc"
              placeholder="123"
              maxLength={3}
              type="password"
              onChange={handleChange}
              onFocus={() => setIsFlipped(true)}
              onBlur={() => setIsFlipped(false)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-slate-700 font-mono"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
