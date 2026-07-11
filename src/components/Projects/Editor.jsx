import { motion, AnimatePresence } from "framer-motion";
import FeatureFlow from "./Flow/FeatureFlow";

const Editor = ({ project, activeTab }) => {
  const renderMarkdown = () => {
    const lines = project.readme.trim().split("\n");

    // Helper function to safely catch and style inline code blocks like `JWT`
    const formatInlineCode = (text) => {
      const parts = text.split(/(`[^`]+`)/g);
      return parts.map((part, index) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={index} className="mx-1 px-1.5 py-0.5 rounded bg-[#2D2D30] text-[#E5C07B] text-xs sm:text-sm font-mono border border-white/5">
              {part.slice(1, -1)}
            </code>
          );
        }
        return part;
      });
    };

    return (
      <div className="font-mono text-xs sm:text-[15px] leading-7 sm:leading-8 select-text">
        {lines.map((line, index) => {
          const isEmpty = line.trim() === "";
          
          return (
            <div key={index} className={`flex ${isEmpty ? "h-4 sm:h-6" : "min-h-[1.75rem] sm:min-h-[2rem]"}`}>
              {/* Line Numbers */}
              <div className="w-10 sm:w-12 select-none text-right pr-4 sm:pr-5 text-[#6A737D] text-xs sm:text-sm pt-0.5">
                {index + 1}
              </div>

              {/* Dynamic Line Content Content */}
              <div className="flex-1 pl-1 pr-2 overflow-x-auto scrollbar-none">
                {line.startsWith("# ") && (
                  <h1 className="text-xl sm:text-3xl font-bold text-white border-b border-white/5 pb-2 mb-2 mt-1">
                    {line.replace("# ", "")}
                  </h1>
                )}

                {line.startsWith("## ") && (
                  <h2 className="mt-4 sm:mt-6 mb-2 text-base sm:text-2xl font-semibold text-[#C792EA]">
                    {line.replace("## ", "")}
                  </h2>
                )}

                {line.startsWith("- ") && (
                  <div className="flex gap-2 items-start">
                    <span className="text-[#915EFF] font-bold select-none">•</span>
                    <span className="text-slate-300">
                      {formatInlineCode(line.replace("- ", ""))}
                    </span>
                  </div>
                )}

                {!line.startsWith("#") && !line.startsWith("-") && !isEmpty && (
                  <p className="text-slate-300">
                    {formatInlineCode(line)}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

 const renderJson = () => {
    // Generates glowing accents depending on the technical layer of the asset
    const getLayerStyle = (key) => {
      const category = key.toLowerCase();
      if (category.includes("language") || category.includes("backend") || category.includes("frontend")) {
        return { text: "text-[#E06C75]", tag: "bg-rose-500/10 text-rose-400 border-rose-500/20" }; // Core Engineering
      }
      if (category.includes("security") || category.includes("protocol")) {
        return { text: "text-[#C792EA]", tag: "bg-purple-500/10 text-purple-400 border-purple-500/20" }; // Security Gates
      }
      if (category.includes("database") || category.includes("visualization") || category.includes("routing") || category.includes("design") || category.includes("api")) {
        return { text: "text-[#61AFEF]", tag: "bg-sky-500/10 text-sky-400 border-sky-500/20" }; // Layer Modules
      }
      return { text: "text-[#98C379]", tag: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" }; // Infrastructure / DevOps
    };

    return (
      <div className="font-mono text-xs sm:text-[14px] select-text">
        <div className="rounded-xl bg-[#252526]/50 backdrop-blur-md p-5 sm:p-8 border border-white/5 shadow-2xl relative overflow-hidden">
          
          {/* Subtle tech background brand glow accent */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#915EFF]/5 blur-3xl pointer-events-none" />
          
          {/* JSON Object Definition */}
          <div className="text-slate-500 font-semibold mb-3 select-none">{"{"}</div>
          
          {Object.entries(project.tech).map(([key, value], index, arr) => {
            const styles = getLayerStyle(key);
            
            // Intelligently splits strings by '+' to break tools into multiple cleanly isolated badges
            const tokens = value.split("+").map(t => t.trim());

            return (
              <div key={key} className="ml-4 sm:ml-8 my-4.5 flex flex-col md:flex-row md:items-start gap-1 md:gap-0 leading-relaxed">
                
                {/* JSON Configuration Key Name */}
                <span className={`w-full md:w-56 font-medium shrink-0 ${styles.text}`}>
                  "{key}"
                </span>
                
                {/* Assignment Operator Accent */}
                <span className="hidden md:inline text-slate-400 mx-3">:</span>
                
                {/* Value Value Segment Array Generator */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-slate-600 select-none">"</span>
                  
                  {tokens.map((token, tokenIdx) => (
                    <span key={tokenIdx} className="flex items-center">
                      <span className={`px-2.5 py-0.5 rounded-md text-xs font-medium border transition-all duration-300 shadow-sm ${styles.tag}`}>
                        {token}
                      </span>
                      {tokenIdx !== tokens.length - 1 && (
                        <span className="text-slate-500 text-xs font-sans font-bold mx-1.5">+</span>
                      )}
                    </span>
                  ))}
                  
                  <span className="text-slate-600 select-none">"</span>
                  {index !== arr.length - 1 && <span className="text-slate-400 ml-0.5">,</span>}
                </div>

              </div>
            );
          })}
          
          <div className="text-slate-500 font-semibold mt-3 select-none">{"}"}</div>
        </div>
      </div>
    );
  };
  
  const renderGallery = () => (
    <div className="font-mono text-xs sm:text-sm select-none max-w-4xl mx-auto">
      {/* Gallery Title Header */}
      <div className="mb-6 border-b border-white/5 pb-3">
        <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
          // Project Screenshots
        </h2>
      </div>

      {/* Massive Vertical Image Stack with Expanded Gaps */}
      <div className="space-y-16 sm:space-y-20">
        {project.screenshots.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
            className="rounded-xl border border-white/10 bg-[#1e1e1f]/40 overflow-hidden shadow-2xl"
          >
            {/* Minimal App Window Shell Titlebar */}
            <div className="bg-[#181819] px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/10" />
                <span className="text-slate-400 text-xs font-medium">
                  {index === 0 ? "screenshot_01.png" : "screenshot_02.png"}
                </span>
              </div>
            </div>

            {/* High-Impact Image Viewport */}
            <div className="relative bg-[#111] overflow-hidden flex items-center justify-center">
              <img
                src={image}
                alt={`${project.name} preview frame ${index + 1}`}
                className="w-full h-auto object-contain max-h-[600px] mx-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab.id + "-" + project.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.2 }}
        className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10"
      >
        {activeTab.type === "markdown" && renderMarkdown()}
        {activeTab.type === "flow" && <FeatureFlow flowData={project.flowData} />}
        {activeTab.type === "json" && renderJson()}
        {activeTab.type === "gallery" && renderGallery()}
      </motion.div>
    </AnimatePresence>
  );
};

export default Editor;