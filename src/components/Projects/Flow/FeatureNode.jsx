// Change Left to Top at the very top of your file
import { Handle, Position } from "@xyflow/react";

const handleStyle = {
  width: 10,
  height: 10,
  background: "#915EFF",
  border: "2px solid #1E1E1E",
  opacity: 0, 
};

const FeatureNode = ({ data, selected }) => {
  return (
    <>
      {/* 1. Change position to Top */}
      <Handle type="target" position={Position.Top} style={handleStyle} />

      <div className={`w-[240px] rounded-xl border transition-all duration-300 ease-out select-none overflow-hidden ${
        selected
          ? "border-[#915EFF] bg-[#1a142e]/90 shadow-[0_0_25px_rgba(145,94,255,0.4)] animate-pulse"
          : "border-white/10 bg-[#252526]/80 backdrop-blur-md hover:border-[#915EFF]/40"
      }`}>
        <div className={`h-[2px] w-full ${selected ? "bg-[#915EFF]" : "bg-transparent"}`} />
        <div className="flex items-center gap-3.5 px-4.5 py-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#915EFF]/10 border border-[#915EFF]/20 text-xl">
            {data.icon}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-semibold tracking-wide text-white font-mono">{data.title}</h3>
            <p className="truncate text-[11px] text-slate-400 font-mono mt-0.5">{data.subtitle}</p>
          </div>
        </div>
      </div>

      {/* 2. Change position to Bottom */}
      <Handle type="source" position={Position.Bottom} style={handleStyle} />
    </>
  );
};

export default FeatureNode;