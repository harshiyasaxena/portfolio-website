const FileExplorer = ({ data, activeFolder, setActiveFolder }) => {
  return (
    <div className="w-64 border-r border-white/10 bg-[#0D1117]">

      <div
        className="border-b border-white/10 px-5 py-4 text-xs uppercase tracking-widest text-slate-400"
        style={{ fontFamily: "JetBrains Mono" }}
      >
        Explorer
      </div>

      <div className="py-2">

        {data.map((folder) => (

          <button
            key={folder.id}
            onClick={() => setActiveFolder(folder)}
            className={`flex w-full items-center gap-3 px-5 py-3 transition-all

            ${
              activeFolder.id === folder.id
                ? "bg-[#1F2937] text-white"
                : "text-slate-400 hover:bg-white/5"
            }`}
            style={{ fontFamily: "JetBrains Mono" }}
          >
            <span className="text-yellow-300">
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