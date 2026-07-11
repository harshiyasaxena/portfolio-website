import { motion } from "framer-motion";
import Planet from "./Planet";

const CategoryGalaxy = ({ title, color, skills }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Galaxy Container with Responsive Sizing */}
      <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] [--radius:100px] sm:[--radius:130px]">
        
        {/* Orbit Ring */}
        <div
          className="absolute left-1/2 top-1/2 w-[calc(var(--radius)*2)] h-[calc(var(--radius)*2)] rounded-full border border-white/5 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Sun (Category Title) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div
            className="w-[70px] h-[70px] sm:w-[78px] sm:h-[78px] rounded-full flex items-center justify-center text-center border border-white/10 backdrop-blur-xl"
            style={{
              background: "rgba(20,20,25,.85)",
              boxShadow: `0 0 20px ${color}50, inset 0 0 20px rgba(255,255,255,.05)`,
            }}
          >
            <span
              className="text-[9px] sm:text-[11px] font-semibold uppercase leading-4 tracking-[0.12em]"
              style={{ color }}
            >
              {title}
            </span>
          </div>
        </motion.div>

        {/* Planets */}
        {skills.map((skill, index) => {
          const angle = ((Math.PI * 2) / skills.length) * index - Math.PI / 2;

          // Trigonometric placement ratios
          const cos = Math.cos(angle).toFixed(4);
          const sin = Math.sin(angle).toFixed(4);

          return (
            <div
              key={skill.name}
              className="absolute left-1/2 top-1/2 z-10"
              style={{
                // Explicitly offsets half of the parent dimension along with the calculated orbit trajectory
                transform: `translate(calc(${cos} * var(--radius) - 50%), calc(${sin} * var(--radius) - 50%))`,
              }}
            >
              <Planet
                skill={skill.name}
                size={skill.size}
                color={color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGalaxy;