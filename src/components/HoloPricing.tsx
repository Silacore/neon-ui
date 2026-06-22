import React from "react";
import { CheckCircle2 } from "lucide-react";

export const HoloPricing = () => {
  const plans = [
    {
      name: "STARTER",
      price: "$29",
      features: ["Temel Erişim", "1 Proje", "Topluluk Desteği"],
      color: "border-slate-700",
      bg: "bg-slate-900/50",
      popular: false,
    },
    {
      name: "PRO",
      price: "$99",
      features: [
        "Tam Erişim",
        "Sınırsız Proje",
        "Öncelikli Destek",
        "AI Asistanı",
      ],
      color: "border-cyan-500",
      bg: "bg-slate-900/80",
      popular: true,
    },
    {
      name: "ENTERPRISE",
      price: "$299",
      features: ["Özel Çözümler", "7/24 Destek", "Gizli API", "Cloud Host"],
      color: "border-purple-500",
      bg: "bg-slate-900/50",
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-4xl p-4">
      {plans.map((plan, idx) => (
        <div
          key={idx}
          className={`relative flex flex-col p-6 rounded-2xl border ${plan.color} ${plan.bg} backdrop-blur-md transition-all duration-300 group cursor-default ${
            plan.popular
              ? "scale-110 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              : "hover:scale-105"
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-slate-900 text-[10px] font-bold rounded-full shadow-[0_0_15px_#22d3ee]">
              MOST POPULAR
            </div>
          )}
          <h3 className="text-slate-400 text-xs font-bold tracking-widest mb-2">
            {plan.name}
          </h3>
          <div className="flex items-end gap-1 mb-6">
            <span className="text-3xl font-black text-white">{plan.price}</span>
            <span className="text-slate-500 text-sm mb-1">/mo</span>
          </div>
          <div className="flex flex-col gap-3 mb-6 flex-1">
            {plan.features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <CheckCircle2
                  size={14}
                  className={plan.popular ? "text-cyan-400" : "text-slate-500"}
                />
                {f}
              </div>
            ))}
          </div>
          <button
            className={`w-full py-2 rounded-lg text-sm font-bold transition-all duration-300 border ${
              plan.popular
                ? "bg-cyan-500 text-slate-900 hover:bg-cyan-400 border-transparent shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                : "bg-transparent text-white border-slate-600 hover:border-white hover:bg-white/5"
            }`}
          >
            SATIN AL
          </button>
        </div>
      ))}
    </div>
  );
};
