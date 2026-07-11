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

    // increase = more curve
    curvature: 0.42,
  });

  return (
    <BaseEdge
      id={id}
      path={path}
      markerEnd={markerEnd}
      style={{
        stroke: "#915EFF",
        strokeWidth: 2.8,
        strokeLinecap: "round",
      }}
    />
  );
};

export default CustomEdge;