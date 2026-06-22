import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export const QuantumTestimonial = () => {
  const testimonials = [
    {
      name: "Sarah Connor",
      role: "Security Chief",
      text: "Bu sistem savunma protokollerimizi tamamen değiştirdi. İnanılmaz hızlı.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Neo Anderson",
      role: "Software Architect",
      text: "Matrix'in kodlarını yeniden yazmak gibi. Arayüz akışkanlığı kusursuz.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Deckard Cain",
      role: "Lore Keeper",
      text: "Geleceğin teknolojisi bugünden elimizde. Neon efektleri büyüleyici.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md p-8">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl rounded-full"></div>
      <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 min-h-[200px] flex flex-col items-center text-center group hover:border-cyan-500/30 transition-colors duration-500">
        <div className="absolute -top-4 left-6 bg-slate-900 border border-slate-700 p-2 rounded-full text-cyan-500">
          <Quote size={20} className="fill-current" />
        </div>

        <div className="w-16 h-16 mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-[2px]"></div>
          <img
            key={active}
            src={testimonials[active].img}
            alt="User"
            className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full object-cover border-2 border-slate-900"
          />
        </div>

        <div className="flex gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={12} className="text-yellow-500 fill-current" />
          ))}
        </div>

        <motion.p
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-slate-300 text-sm mb-4 italic"
        >
          "{testimonials[active].text}"
        </motion.p>

        <motion.div
          key={`info-${active}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-white font-bold text-sm tracking-wide">
            {testimonials[active].name}
          </h4>
          <span className="text-xs text-cyan-500 font-mono">
            {testimonials[active].role}
          </span>
        </motion.div>

        <div className="absolute bottom-0 left-0 h-1 bg-slate-800 w-full rounded-b-2xl overflow-hidden">
          <motion.div
            key={active}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
          />
        </div>
      </div>
    </div>
  );
};
