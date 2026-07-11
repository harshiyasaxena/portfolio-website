import { motion, AnimatePresence } from "framer-motion";
import FeatureFlow from "./Flow/FeatureFlow";

const Editor = ({ project, activeTab }) => {
  const renderMarkdown = () => {
    const lines = project.readme.trim().split("\n");

    return (
      <div className="font-mono text-[15px] leading-8">

        {lines.map((line, index) => (
          <div key={index} className="flex">

            {/* Line Number */}

            <div className="w-12 select-none text-right pr-5 text-[#6A737D]">
              {index + 1}
            </div>

            {/* Content */}

            <div className="flex-1">

              {line.startsWith("# ") && (
                <h1 className="text-4xl font-bold text-white">
                  {line.replace("# ", "")}
                </h1>
              )}

              {line.startsWith("## ") && (
                <h2 className="mt-6 text-2xl font-semibold text-[#C792EA]">
                  {line.replace("## ", "")}
                </h2>
              )}

              {line.startsWith("- ") && (
                <div className="flex gap-3">

                  <span className="text-green-400">
                    •
                  </span>

                  <span className="text-slate-300">
                    {line.replace("- ", "")}
                  </span>

                </div>
              )}

              {!line.startsWith("#") &&
                !line.startsWith("-") &&
                line !== "" && (
                  <p className="text-slate-300">
                    {line}
                  </p>
                )}

            </div>

          </div>
        ))}
      </div>
    );
  };

  const renderFeatures = () => (
    <div className="font-mono">

      <h2 className="mb-8 text-3xl font-bold text-white">
        Features.ts
      </h2>

      <div className="space-y-5">

        {project.features.map((feature, index) => (

          <div
            key={feature}
            className="flex rounded-lg border border-white/5 bg-[#252526] p-4"
          >

            <div className="w-10 text-[#6A737D]">
              {index + 1}
            </div>

            <div className="flex gap-3">

              <span className="text-green-400">
                ✓
              </span>

              <span className="text-slate-300">
                {feature}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );

  const renderJson = () => (
    <div className="font-mono">

      <div className="rounded-xl bg-[#252526] p-8">

        <div className="text-slate-500">
          {"{"}
        </div>

        {Object.entries(project.tech).map(
          ([key, value], index, arr) => (

            <div
              key={key}
              className="ml-8 flex"
            >

              <span className="w-52 text-sky-400">
                "{key}"
              </span>

              <span className="text-white">
                :
              </span>

              <span className="ml-3 text-green-400">
                "{value}"
              </span>

              {index !== arr.length - 1 && (
                <span>,</span>
              )}

            </div>

          )
        )}

        <div className="text-slate-500">
          {"}"}
        </div>

      </div>

    </div>
  );

  const renderGallery = () => (
    <div>

      <h2 className="mb-8 text-3xl font-bold text-white">
        Gallery
      </h2>

      <div className="grid grid-cols-2 gap-8">

        {project.screenshots.map((image) => (

          <motion.img
            whileHover={{
              scale: 1.02,
            }}
            key={image}
            src={image}
            className="rounded-xl border border-white/10"
          />

        ))}

      </div>

    </div>
  );

  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={activeTab.id}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 0.3,
        }}
        className="flex-1 overflow-auto bg-[#1E1E1E] p-10"
      >

        {activeTab.type === "markdown" &&
          renderMarkdown()}

       {activeTab.type === "flow" && (
    <FeatureFlow />
)}

        {activeTab.type === "json" &&
          renderJson()}

        {activeTab.type === "gallery" &&
          renderGallery()}

      </motion.div>

    </AnimatePresence>
  );
};

export default Editor;