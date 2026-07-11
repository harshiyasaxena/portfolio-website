import { useEffect, useState } from "react";

const TerminalOutput = ({ folder }) => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // 1. Maintain an isolated reference pool for this specific execution cycle
    const activeTimeouts = [];

    const output = [
      "$ cd " + folder.name,
      "",
      "$ cat impact.md",
      "",
      ...folder.files["impact.md"],
      "",
      "$ cat achievements.txt",
      "",
      ...folder.files["achievements.txt"],
      "",
      "$ cat tech-stack.json",
      "",
      ...folder.files["tech-stack.json"],
    ];

    // 2. Wipe existing state instantly before queueing fresh lines
    setLines([]);

    // 3. Queue line prints safely
    output.forEach((line, i) => {
      const id = setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, i * 80); // Quick snap execution for high-fidelity response layout
      
      activeTimeouts.push(id);
    });

    // 4. Cleanup explicitly handles cancellation of all running timers
    return () => {
      activeTimeouts.forEach((id) => clearTimeout(id));
    };
  }, [folder]); // re-runs freshly whenever active folder updates

  return (
    <div
      className="space-y-2 p-4 sm:p-6 md:p-8 text-[12px] sm:text-[14px] md:text-[15px] leading-6 md:leading-7"
      style={{ fontFamily: "JetBrains Mono" }}
    >
      {lines.map((line, index) => {
        // Command syntax parser
        if (line.startsWith("$")) {
          const parts = line.split(" ");
          return (
            <div key={index} className="flex flex-wrap items-center text-slate-200">
              <span className="text-green-400">$</span>
              <span className="ml-2 text-purple-400">{parts[1]}</span>
              <span className="ml-2 text-yellow-300 break-all">
                {parts.slice(2).join(" ")}
              </span>
            </div>
          );
        }

        // Title/Header parser
        if (line.startsWith("#")) {
          return (
            <div key={index} className="pt-3 pb-1 text-sm sm:text-base md:text-lg font-semibold text-cyan-400">
              {line}
            </div>
          );
        }

        // JSON block styling parser
        if (line.includes(":") && line.includes('"')) {
          const [key, ...valueParts] = line.split(":");
          const value = valueParts.join(":");
          return (
            <div key={index} className="ml-4 sm:ml-6 md:ml-8 break-all">
              <span className="text-sky-400">{key}:</span>
              <span className="text-green-300">{value}</span>
            </div>
          );
        }

        // Bullet point trees syntax alignment formatting
        if (line.trim().startsWith("✔") || line.trim().startsWith("•")) {
          const cleanLine = line.trim();
          return (
            <div key={index} className="ml-2 sm:ml-4 md:ml-6 flex items-start gap-1.5 sm:gap-2">
              <span className="text-green-400 shrink-0 select-none">├──</span>
              <span className="text-slate-300 break-words">{cleanLine.substring(1).trim()}</span>
            </div>
          );
        }

        // Catch brackets, clean lines and spacing braces
        return (
          <div 
            key={index} 
            className={line.trim() === "{" || line.trim() === "}" ? "text-slate-400" : "text-slate-500"}
          >
            {line}
          </div>
        );
      })}

      {/* Pulsing Terminal Block cursor indicator */}
      <div className="pt-4">
        <span className="animate-pulse text-green-400 text-sm sm:text-base">█</span>
      </div>
    </div>
  );
};

export default TerminalOutput;