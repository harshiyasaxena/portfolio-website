import {
  ReactFlow,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import FeatureNode from "./FeatureNode";
import CustomEdge from "./CustomEdge";

import { nodes, edges } from "./workforgeFlowData";

const nodeTypes = {
  feature: FeatureNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

export default function FeatureFlow() {
  return (
    <div className="h-[1100px] w-full rounded-xl overflow-hidden">

      <ReactFlow
        nodes={nodes}
        edges={edges}

        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}

        fitView

        fitViewOptions={{
          padding: 0.25,
        }}

        nodesDraggable={false}
        nodesConnectable={false}

        elementsSelectable={true}

        panOnDrag={false}
        panOnScroll={false}

        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}

        preventScrolling={true}

        proOptions={{
          hideAttribution: true,
        }}
      />

    </div>
  );
}