const TerminalHeader = () => {
  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-[#111827] px-4 py-3 sm:px-5 sm:py-4">
      {/* Window Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500" />
        <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-400" />
        <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500" />
      </div>

      {/* Center Shell Info - Responsive layout sizing */}
      <div
        className="text-[11px] sm:text-xs md:text-sm text-center px-2 truncate max-w-[70%] sm:max-w-none"
        style={{ fontFamily: "JetBrains Mono" }}
      >
        <span className="text-green-400 font-medium">harshiya@portfolio</span>
        <span className="mx-1.5 sm:mx-2 text-white/60">➜</span>
        <span className="text-sky-400 font-medium">~/experience</span>
      </div>

      {/* Status Badge - Hidden on super small devices to prioritize path visibility */}
      <span
        className="hidden xs:inline-block text-[9px] sm:text-xs text-slate-500 font-semibold tracking-wider shrink-0"
        style={{ fontFamily: "JetBrains Mono" }}
      >
        ACTIVE
      </span>
    </div>
  );
};

export default TerminalHeader;