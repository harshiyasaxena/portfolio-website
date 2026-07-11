const RightPanel = ({ project }) => {
  return (
    <div className="w-72 border-l border-white/10 bg-[#252526]">

      <div className="border-b border-white/10 p-5">

        <h3 className="text-lg font-semibold text-white">
          Project Info
        </h3>

      </div>

      <div className="space-y-6 p-5">

        <div>

          <p className="text-xs uppercase tracking-widest text-slate-500">
            Name
          </p>

          <p className="mt-2 text-white">
            {project.name}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-widest text-slate-500">
            Role
          </p>

          <p className="mt-2 text-white">
            {project.role}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-widest text-slate-500">
            Technologies
          </p>

          <div className="mt-4 flex flex-wrap gap-2">

            {Object.values(project.tech).map((tech) => (

              <span
                key={tech}
                className="rounded-full bg-[#915EFF]/20 px-3 py-1 text-sm text-[#B794F6]"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default RightPanel;