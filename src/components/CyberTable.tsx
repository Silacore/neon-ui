import React, { useState } from "react";
import {
  Server,
  Terminal,
  Filter,
  Activity,
  AlertCircle,
  MoreHorizontal,
} from "lucide-react";

export const CyberTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const logs = [
    { id: "SRV-8080", region: "US-EAST", status: "active", latency: "24ms" },
    {
      id: "SRV-9000",
      region: "EU-CENTRAL",
      status: "warning",
      latency: "120ms",
    },
    {
      id: "SRV-3000",
      region: "ASIA-PACIFIC",
      status: "active",
      latency: "85ms",
    },
    { id: "DB-CORE-1", region: "US-WEST", status: "offline", latency: "-" },
    { id: "AUTH-GATE", region: "GLOBAL", status: "active", latency: "12ms" },
  ];

  const filteredLogs = logs.filter(
    (log) =>
      log.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.region.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-full max-w-2xl bg-slate-950/80 rounded-xl border border-slate-800 overflow-hidden flex flex-col">
      <div className="p-4 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-900/50">
        <div className="flex items-center gap-2 text-cyan-500">
          <Server size={18} />
          <h3 className="font-bold text-sm tracking-wider">SYSTEM_LOGS</h3>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-48 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Terminal
                size={14}
                className="text-slate-500 group-focus-within:text-cyan-500 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-9 pr-3 py-1.5 border border-slate-700 rounded-lg bg-slate-900 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 sm:text-xs transition-all"
            />
          </div>
          <button className="p-1.5 border border-slate-700 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
            <Filter size={14} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-800">
          <thead className="bg-slate-900">
            <tr>
              {["Server ID", "Region", "Status", "Latency", "Action"].map(
                (h, i) => (
                  <th
                    key={i}
                    className={`px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono ${i === 4 ? "text-right" : "text-left"}`}
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className="bg-slate-950/30 divide-y divide-slate-800/50">
            {filteredLogs.map((log) => (
              <tr
                key={log.id}
                className="group hover:bg-cyan-500/5 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-2 w-2 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></div>
                    <div className="ml-4 text-xs font-mono font-medium text-white group-hover:text-cyan-400 transition-colors">
                      {log.id}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-xs text-slate-400 font-mono">
                    {log.region}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-[10px] leading-5 font-semibold rounded-full border ${
                      log.status === "active"
                        ? "bg-green-900/20 text-green-400 border-green-500/30"
                        : ""
                    } ${log.status === "warning" ? "bg-yellow-900/20 text-yellow-400 border-yellow-500/30 animate-pulse" : ""} ${
                      log.status === "offline"
                        ? "bg-red-900/20 text-red-400 border-red-500/30"
                        : ""
                    }`}
                  >
                    {log.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Activity
                      size={12}
                      className={
                        log.status === "active"
                          ? "text-green-500"
                          : "text-slate-600"
                      }
                    />
                    {log.latency}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-slate-600 hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredLogs.length === 0 && (
          <div className="p-8 text-center text-slate-500 text-xs font-mono border-t border-slate-800">
            <AlertCircle size={24} className="mx-auto mb-2 opacity-50" />
            NO_LOGS_FOUND matching query "{searchTerm}"
          </div>
        )}
      </div>

      <div className="bg-slate-900/50 px-4 py-2 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-600 font-mono">
        <span>TOTAL NODES: {logs.length}</span>
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          LIVE STREAM
        </div>
      </div>
    </div>
  );
};
