const FileExplorer = ({ data, activeFolder, setActiveFolder }) => {
  return (
    <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 bg-[#0D1117] flex flex-col shrink-0">
      {/* Title block hides completely on mobile layout viewports */}
      <div
        className="hidden md:block border-b border-white/10 px-5 py-4 text-xs uppercase tracking-widest text-slate-400"
        style={{ fontFamily: "JetBrains Mono" }}
      >
        Explorer
      </div>

      {/* Horizontal layout container switches row directions seamlessly */}
      <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible py-1 md:py-2 scrollbar-none">
        {data.map((folder) => (
          <button
            key={folder.id}
            onClick={() => setActiveFolder(folder)}
            className={`flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 transition-all whitespace-nowrap text-xs sm:text-sm md:w-full ${
              activeFolder.id === folder.id
                ? "bg-[#1F2937] text-white border-b-2 border-sky-400 md:border-b-0"
                : "text-slate-400 hover:bg-white/5"
            }`}
            style={{ fontFamily: "JetBrains Mono" }}
          >
            <span className="text-sm sm:text-base">
              {activeFolder.id === folder.id ? "📂" : "📁"}
            </span>
            <span>{folder.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;