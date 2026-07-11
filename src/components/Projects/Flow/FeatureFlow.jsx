import { useEffect, useState } from "react";
import { ReactFlow, Background, BackgroundVariant } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import FeatureNode from "./FeatureNode";
import CustomEdge from "./CustomEdge";

const nodeTypes = { feature: FeatureNode };
const edgeTypes = { custom: CustomEdge };

export default function FeatureFlow({ flowData }) {
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport changes to snap layout grid configurations dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial trigger run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!flowData) return <div className="text-slate-500 p-4 font-mono">// Void workspace</div>;

  // Process and rewrite coordinates on mobile viewports dynamically
  const layoutNodes = flowData.nodes.map((node, index) => {
    if (!isMobile) return node; // Keep your great desktop layout intact

    // Mobile: Stack everything perfectly straight down the center (X:0) with 140px spacing
    return {
      ...node,
      position: { x: 0, y: index * 140 },
    };
  });

  return (
    <div className="h-[520px] w-full rounded-xl overflow-hidden bg-[#141415] border border-white/5 relative">
      <ReactFlow
        nodes={layoutNodes}
        edges={flowData.edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ 
          padding: isMobile ? 0.1 : 0.2 
        }}
        
        // --- TOTAL CANVAS LOCKS ---
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        
        // Locks the background from being dragged around
        panOnDrag={false} 
        
        // Stops React Flow from capturing page wheel interactions
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false} 
        
        panActivationKeyCode={""}
        selectionKeyCode={""}
        // ----------------------------------------------------

        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={18} size={1} color="#33294d" opacity={0.6} />
      </ReactFlow>
    </div>
  );
}