import { useState } from "react";

import { projectData } from "./projectData";

import Sidebar from "./Sidebar";
import Editor from "./Editor";
import RightPanel from "./RightPanel";

const VSCode = () => {
  const [activeProject, setActiveProject] = useState(projectData[0]);
  const [activeTab, setActiveTab] = useState(
  projectData[0].files[0]
);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1E1E1E] shadow-2xl">

      {/* VS Code Title Bar */}

      <div className="flex h-10 items-center border-b border-white/10 bg-[#181818] px-4">

        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>

        <div className="mx-auto text-sm text-slate-400">
          projects — Visual Studio Code
        </div>

      </div>

      {/* Workspace */}

      <div className="flex h-[700px]">

        <Sidebar
  projects={projectData}
  activeProject={activeProject}
  setActiveProject={setActiveProject}
  activeTab={activeTab}
  setActiveTab={setActiveTab}
/>

        <div className="flex flex-1 flex-col">

  {/* Open File Tab */}
  <div className="flex h-10 items-center border-b border-white/10 bg-[#2D2D30] px-4">

    <span className="text-sm text-slate-300">
      {activeTab.name}
    </span>

  </div>

  <Editor
    project={activeProject}
    activeTab={activeTab}
  />

</div>

        <RightPanel project={activeProject} />

      </div>

    </div>
  );
};

export default VSCode;