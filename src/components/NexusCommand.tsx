import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Command,
  Home,
  Hash,
  Rocket,
  Settings,
  LogOut,
  ArrowRight,
} from "lucide-react";

export const NexusCommand = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const commands = [
    {
      id: "home",
      label: "Go to Dashboard",
      icon: <Home size={18} />,
      category: "NAVIGATION",
    },
    {
      id: "projects",
      label: "Search Projects",
      icon: <Hash size={18} />,
      category: "NAVIGATION",
    },
    {
      id: "deploy",
      label: "Deploy to Production",
      icon: <Rocket size={18} />,
      category: "ACTIONS",
      color: "text-pink-500",
    },
    {
      id: "settings",
      label: "System Settings",
      icon: <Settings size={18} />,
      category: "SYSTEM",
    },
    {
      id: "logout",
      label: "Terminate Session",
      icon: <LogOut size={18} />,
      category: "SYSTEM",
      color: "text-red-500",
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="relative w-full max-w-2xl h-[500px] flex flex-col items-center justify-center bg-slate-950/50 rounded-xl border border-slate-800 overflow-hidden">
      <div className="text-center space-y-4">
        <p className="text-slate-500 text-xs font-mono">
          PRESS THE BUTTON TO INITIALIZE
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-700 rounded-xl hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 relative z-10"
        >
          <Command
            size={20}
            className="text-slate-400 group-hover:text-cyan-400"
          />
          <span className="text-slate-300 text-sm">Type a command...</span>
          <span className="ml-4 text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-500 font-mono group-hover:text-cyan-400 group-hover:bg-cyan-950">
            CTRL + K
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="absolute inset-0 z-50 flex items-start justify-center pt-20 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[400px]"
            >
              <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-800">
                <Command size={20} className="text-cyan-500" />
                <input
                  autoFocus
                  placeholder="Type a command..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActiveIndex(0);
                  }}
                  className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none text-lg font-medium"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-400 hover:text-white transition-colors"
                >
                  ESC
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, idx) => (
                    <div
                      key={cmd.id}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => setIsOpen(false)}
                      className={`relative flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-colors duration-200 ${
                        activeIndex === idx
                          ? "bg-cyan-500/10 border border-cyan-500/30"
                          : "border border-transparent hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg bg-slate-800 ${activeIndex === idx ? "text-cyan-400" : "text-slate-400"} ${(cmd as any).color || ""}`}
                        >
                          {cmd.icon}
                        </div>
                        <div className="flex flex-col">
                          <span
                            className={`text-sm font-medium ${activeIndex === idx ? "text-white" : "text-slate-300"}`}
                          >
                            {cmd.label}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                            {cmd.category}
                          </span>
                        </div>
                      </div>
                      {activeIndex === idx && (
                        <ArrowRight size={16} className="text-cyan-500" />
                      )}
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center text-slate-500 text-sm">
                    No results found.
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
