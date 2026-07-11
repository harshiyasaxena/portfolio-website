import { useState } from "react";

import TerminalHeader from "./TerminalHeader";
import FileExplorer from "./FileExplorer";
import TerminalOutput from "./TerminalOutput";

import { experienceData } from "./experienceData";

const Terminal = () => {
  const [activeFolder, setActiveFolder] = useState(experienceData[0]);

  return (
    <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-black-100 shadow-card w-full max-w-5xl mx-auto">
      <TerminalHeader />

      {/* Shifts seamlessly from clean vertical stacking to responsive layout configurations */}
      <div className="flex flex-col md:flex-row min-h-[380px] sm:min-h-[450px] md:h-[550px]">
        <FileExplorer
          data={experienceData}
          activeFolder={activeFolder}
          setActiveFolder={setActiveFolder}
        />

        <div className="flex-1 overflow-y-auto bg-[#090d13] border-t md:border-t-0 border-white/5">
          <TerminalOutput folder={activeFolder} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;