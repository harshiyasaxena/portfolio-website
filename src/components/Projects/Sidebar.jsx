import {
  VscFolder,
  VscFolderOpened,
  VscMarkdown,
  VscJson,
  VscFiles,
} from "react-icons/vsc";

const Sidebar = ({
  projects,
  activeProject,
  setActiveProject,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="w-72 border-r border-white/10 bg-[#252526]">

      <div className="border-b border-white/10 px-5 py-4 text-xs uppercase tracking-widest text-slate-400">
        Explorer
      </div>

      <div className="py-2">

        {projects.map((project) => (
          <div key={project.id}>

            <button
              onClick={() => {
                setActiveProject(project);
                setActiveTab(project.files[0]);
              }}
              className="flex w-full items-center gap-3 px-5 py-3 hover:bg-[#2A2D2E]"
            >

              {activeProject.id === project.id ? (
                <VscFolderOpened className="text-yellow-400" />
              ) : (
                <VscFolder className="text-yellow-400" />
              )}

              <span className="text-slate-200">
                {project.name}
              </span>

            </button>

            {activeProject.id === project.id && (

              <div className="ml-10">

                {project.files.map((file) => (

                  <button
                    key={file.id}
                    onClick={() => setActiveTab(file)}
                    className={`flex w-full items-center gap-2 px-2 py-2 text-sm

                    ${
                      activeTab.id === file.id
                        ? "text-white"
                        : "text-slate-400"
                    }`}
                  >

                    {file.type === "markdown" && (
                      <VscMarkdown />
                    )}

                    {file.type === "json" && (
                      <VscJson />
                    )}

                    {(file.type === "features" ||
                      file.type === "gallery") && (
                      <VscFiles />
                    )}

                    {file.name}

                  </button>

                ))}

              </div>

            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default Sidebar;