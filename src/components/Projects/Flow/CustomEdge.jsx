import { BaseEdge, getBezierPath } from "@xyflow/react";

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
}) => {
  const [path] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    curvature: 0.45,
  });

  return (
    <>
      {/* Background Glow Path Layer */}
      <path
        id={`${id}-bg`}
        d={path}
        fill="none"
        stroke="#915EFF"
        strokeWidth={4}
        opacity={0.12}
        className="pointer-events-none"
      />

      {/* Main Vector Connection Base Edge */}
      <BaseEdge
        id={id}
        path={path}
        markerEnd={markerEnd}
        style={{
          stroke: "#915EFF",
          strokeWidth: 2,
          strokeDasharray: "6, 6",
          animation: "flowAnimation 30s linear infinite",
        }}
      />

      {/* Global CSS style block injected dynamically to drive the continuous path flow loop */}
      <style>{`
        @keyframes flowAnimation {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CustomEdge;