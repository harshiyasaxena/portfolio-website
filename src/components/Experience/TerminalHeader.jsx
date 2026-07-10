const TerminalHeader = () => {
  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-[#111827] px-5 py-4">

      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <div
        className="text-sm"
        style={{ fontFamily: "JetBrains Mono" }}
      >
        <span className="text-green-400">
          harshiya@portfolio
        </span>

        <span className="mx-2 text-white">
          ➜
        </span>

        <span className="text-sky-400">
          ~/experience
        </span>
      </div>

      <span
        className="text-xs text-secondary"
        style={{ fontFamily: "JetBrains Mono" }}
      >
        ACTIVE
      </span>

    </div>
  );
};

export default TerminalHeader;