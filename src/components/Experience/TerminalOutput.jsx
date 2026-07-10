import { useEffect, useState } from "react";

const TerminalOutput = ({ folder }) => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    let timeout;

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

    setLines([]);

    output.forEach((line, i) => {
      timeout = setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, i * 180);
    });

    return () => clearTimeout(timeout);
  }, [folder]);

  return (
    <div
      className="space-y-2 p-8 text-[15px] leading-7"
      style={{
        fontFamily: "JetBrains Mono",
      }}
    >
      {lines.map((line, index) => {
        // command
        if (line.startsWith("$")) {
          const parts = line.split(" ");

          return (
            <div key={index}>

              <span className="text-green-400">$</span>

              <span className="ml-2 text-purple-300">
                {parts[1]}
              </span>

              <span className="ml-2 text-yellow-300">
                {parts.slice(2).join(" ")}
              </span>

            </div>
          );
        }

        // headings
        if (line.startsWith("#")) {
          return (
            <div
              key={index}
              className="pt-4 pb-2 text-xl font-semibold text-cyan-300"
            >
              {line}
            </div>
          );
        }

        // json
        if (
          line.includes(":") &&
          line.includes('"')
        ) {
          const [key, value] = line.split(":");

          return (
            <div key={index} className="ml-8">

              <span className="text-sky-400">
                {key}:
              </span>

              <span className="text-green-300">
                {value}
              </span>

            </div>
          );
        }

        // bullets
        if (
          line.startsWith("✔") ||
          line.startsWith("•")
        ) {
          return (
            <div
              key={index}
              className="ml-6 flex gap-3"
            >
              <span className="text-green-400">
                ├──
              </span>

              <span className="text-slate-300">
                {line.substring(1)}
              </span>

            </div>
          );
        }

        return (
          <div
            key={index}
            className="text-slate-500"
          >
            {line}
          </div>
        );
      })}

      <div className="pt-6">
        <span className="animate-pulse text-green-400">
          █
        </span>
      </div>
    </div>
  );
};

export default TerminalOutput;