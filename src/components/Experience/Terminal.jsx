import { useState } from "react";

import TerminalHeader from "./TerminalHeader";
import FileExplorer from "./FileExplorer";
import TerminalOutput from "./TerminalOutput";

import { experienceData } from "./experienceData";

const Terminal = () => {
  const [activeFolder, setActiveFolder] = useState(experienceData[0]);

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-black-100 shadow-card">
      <TerminalHeader />

      <div className="flex h-[500px]">
        <FileExplorer
          data={experienceData}
          activeFolder={activeFolder}
          setActiveFolder={setActiveFolder}
        />

        <div className="flex-1 overflow-y-auto">
          <TerminalOutput folder={activeFolder} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;