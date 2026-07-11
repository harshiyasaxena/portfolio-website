import { Handle, Position } from "@xyflow/react";

const handleStyle = {
  width: 8,
  height: 8,
  background: "#915EFF",
  border: "2px solid #1E1E1E",
  opacity: 0,
};

const FeatureNode = ({ data, selected }) => {
  return (
    <>
     <Handle
    type="target"
    position={Position.Left}
    style={handleStyle}
/>

      <div
        className={`
          w-[210px]
          rounded-2xl
          border
          transition-all
          duration-300
          backdrop-blur-xl
          overflow-hidden
          ${
            selected
              ? "border-[#915EFF] bg-[#2B214B] shadow-[0_0_35px_rgba(145,94,255,.55)] scale-[1.03]"
              : "border-white/10 bg-[#252526] hover:border-[#915EFF]/50 hover:-translate-y-1"
          }
        `}
      >
        {/* Header */}

        <div className="flex items-center gap-3 border-b border-white/5 px-5 py-4">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-[#915EFF]/15
              text-2xl
            "
          >
            {data.icon}
          </div>

          <div>

            <h3 className="text-white font-semibold text-[15px]">
              {data.title}
            </h3>

            <p className="text-xs text-slate-400 mt-1">
              {data.subtitle}
            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="flex items-center justify-between px-5 py-3">

          <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Module
          </span>

          <div className="flex gap-1">

            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="h-2 w-2 rounded-full bg-green-400" />

          </div>

        </div>
      </div>

      <Handle
    type="source"
    position={Position.Right}
    style={handleStyle}
/>
    </>
  );
};

export default FeatureNode;