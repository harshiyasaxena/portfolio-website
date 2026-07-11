import { useState } from "react";

import { projectData } from "./projectData";

import Sidebar from "./Sidebar";
import Editor from "./Editor";

const VSCode = () => {
  const [activeProject, setActiveProject] = useState(projectData[0]);
  const [activeTab, setActiveTab] = useState(projectData[0].files[0]);

  const handleProjectChange = (newProject) => {
    setActiveProject(newProject);
    setActiveTab(newProject.files[0] || { id: "readme", name: "README.md", type: "markdown" });
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1E1E1E] shadow-2xl w-full max-w-6xl mx-auto">
      
      {/* VS Code Title Bar */}
      <div className="flex h-10 items-center border-b border-white/10 bg-[#181818] px-4 justify-between sm:justify-start">
        <div className="flex gap-2 shrink-0">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>

        <div className="sm:mx-auto text-xs sm:text-sm text-slate-400 font-mono pl-4 sm:pl-0 truncate max-w-[75%]">
          {activeProject.id} — Visual Studio Code
        </div>
      </div>

      {/* Workspace Framing */}
      <div className="flex flex-col lg:flex-row min-h-[550px] lg:h-[680px]">
        
        <Sidebar
          projects={projectData}
          activeProject={activeProject}
          setActiveProject={handleProjectChange}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Center Workspace Editor */}
        <div className="flex flex-1 flex-col overflow-hidden">
          
          {/* File Tab Indicator Header */}
          <div className="flex h-10 items-center border-b border-white/10 bg-[#2D2D30] px-4 justify-between">
            <span className="text-xs sm:text-sm text-slate-300 font-mono font-medium flex items-center gap-2 truncate">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
              {activeTab.name}
            </span>
            
            {/* Integrated Project Role Context Badge */}
            <span className="text-[10px] sm:text-xs bg-[#915EFF]/10 border border-[#915EFF]/20 text-[#B794F6] px-2.5 py-0.5 rounded-md font-mono truncate max-w-[50%]">
              {activeProject.role}
            </span>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#1E1E1E]">
            <Editor project={activeProject} activeTab={activeTab} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default VSCode;