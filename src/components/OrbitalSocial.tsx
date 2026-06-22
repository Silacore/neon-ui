import React, { useState } from "react";
import {
  Share2,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
} from "lucide-react";

export const OrbitalSocial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    {
      icon: <Github size={20} />,
      color: "hover:text-white",
      bg: "hover:bg-slate-800",
      label: "GitHub",
    },
    {
      icon: <Twitter size={20} />,
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-900/50",
      label: "Twitter",
    },
    {
      icon: <Linkedin size={20} />,
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-900/50",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={20} />,
      color: "hover:text-pink-500",
      bg: "hover:bg-pink-900/50",
      label: "Instagram",
    },
    {
      icon: <Globe size={20} />,
      color: "hover:text-cyan-400",
      bg: "hover:bg-cyan-900/50",
      label: "Website",
    },
  ];

  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <div className="absolute inset-0 border border-slate-800/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
      <div className="absolute inset-4 border border-dashed border-slate-700/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-20 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group ${
          isOpen
            ? "bg-slate-900 border-2 border-cyan-500"
            : "bg-cyan-500 hover:bg-cyan-400"
        }`}
      >
        <Share2
          size={24}
          className={`transition-transform duration-500 ${isOpen ? "text-cyan-500 rotate-180" : "text-slate-900"}`}
        />
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-30 animate-ping"></span>
        )}
      </button>

      {socials.map((item, index) => {
        const angle = index * (360 / socials.length) * (Math.PI / 180);
        const radius = 100;
        const x = isOpen ? Math.cos(angle) * radius : 0;
        const y = isOpen ? Math.sin(angle) * radius : 0;

        return (
          <div
            key={index}
            className="absolute z-10 transition-all duration-500 ease-out"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              opacity: isOpen ? 1 : 0,
              pointerEvents: isOpen ? "auto" : "none",
            }}
          >
            <button
              className={`w-12 h-12 rounded-full bg-slate-900 border border-slate-700 text-slate-400 flex items-center justify-center transition-all duration-300 shadow-lg group/icon ${item.color} ${item.bg} hover:scale-110`}
            >
              {item.icon}
              <span className="absolute -bottom-6 text-[10px] text-white opacity-0 group-hover/icon:opacity-100 transition-opacity bg-black/80 px-2 py-0.5 rounded pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </button>
          </div>
        );
      })}

      <div
        className={`absolute -bottom-8 text-[10px] font-mono tracking-widest transition-colors duration-300 ${isOpen ? "text-cyan-500" : "text-slate-600"}`}
      >
        {isOpen ? "SYSTEM_LINKED" : "OFFLINE"}
      </div>
    </div>
  );
};
