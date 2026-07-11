import { motion } from "framer-motion";
import Planet from "./Planet";

const CategoryGalaxy = ({ title, color, skills }) => {
  const radius = 130;

  return (
    <div className="flex flex-col items-center">


      {/* Galaxy */}

      <div className="relative w-[320px] h-[320px]">

        {/* Orbit */}

        <div
          className="absolute left-1/2 top-1/2 w-[260px] h-[260px] rounded-full border border-white/5 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Sun */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
absolute
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
"
        >

          <div
            className="
    w-[78px]
    h-[78px]
    rounded-full
    flex
    items-center
    justify-center
    text-center
    border
    border-white/10
    backdrop-blur-xl
    "
            style={{
              background: "rgba(20,20,25,.85)",
              boxShadow: `
      0 0 20px ${color}50,
      inset 0 0 20px rgba(255,255,255,.05)
      `,
            }}
          >

            <span
              className="text-[11px] font-semibold uppercase leading-4 tracking-[0.12em]"
              style={{
                color,
              }}
            >
              {title}
            </span>

          </div>

        </motion.div>

        {/* Planets */}

        {skills.map((skill, index) => {
          const angle =
            ((Math.PI * 2) / skills.length) * index - Math.PI / 2;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={skill.name}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
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