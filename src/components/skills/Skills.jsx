import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { skillsData } from "../../constants/skillsData";

const SkillKey = ({ skill, active, onClick }) => {
  return (
    <div className='group relative [perspective:1000px]'>
      {/* base shadow */}
      <div className='absolute inset-0 translate-y-[10px] rounded-[20px] bg-[#090325] blur-[2px]' />

      <motion.button
        onClick={onClick}
        whileHover={{ y: -3, rotateX: 12, rotateY: -8, scale: 1.02 }}
        whileTap={{ y: 6, rotateX: 0, rotateY: 0, scale: 0.98 }}
        className={`
          relative z-10 min-w-[140px] sm:min-w-[170px]
          rounded-[20px] border border-white/10
          px-5 py-4 text-left font-semibold
          transition-all duration-200
          ${active ? "bg-[#915EFF] text-white" : "bg-black-200 text-secondary"}
          shadow-[0_8px_0_#050816,0_18px_30px_rgba(0,0,0,0.45)]
        `}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center bottom",
        }}
      >
        {/* top shine */}
        <div className='pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-70' />

        {/* front face */}
        <div className='relative z-10 flex items-center justify-between'>
          <span className='text-sm sm:text-base'>{skill.name}</span>
          <span className='text-[10px] uppercase tracking-[0.2em] text-white/40'>
            key
          </span>
        </div>
      </motion.button>
    </div>
  );
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.sectionSubText}>What I use</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className='mt-10 flex flex-col gap-8'>
        <div className='flex flex-wrap gap-5'>
          {skillsData.map((skill) => (
            <SkillKey
              key={skill.name}
              skill={skill}
              active={activeSkill.name === skill.name}
              onClick={() => setActiveSkill(skill)}
            />
          ))}
        </div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={activeSkill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className='rounded-2xl border border-white/10 bg-black-200 p-6 sm:p-8'
          >
            <h3 className='text-white text-[20px] sm:text-[24px] font-bold'>
              {activeSkill.name}
            </h3>

            <p className='mt-3 text-secondary text-[15px] sm:text-[17px] leading-7'>
              {activeSkill.description}
            </p>

            <div className='mt-5'>
              <p className='text-white font-semibold mb-3'>Used in:</p>
              <ul className='list-disc ml-5 space-y-2 text-secondary'>
                {activeSkill.projects.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");