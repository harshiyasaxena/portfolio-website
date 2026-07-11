import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";

import SkillGalaxy from "./SkillGalaxy";

const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>
          Technologies I work with
        </p>

        <h2 className={styles.sectionHeadText}>
          Skills.
        </h2>

        <p className="mt-5 max-w-3xl text-secondary text-[17px] leading-8">
          My technical toolkit organized into categories. Hover over each
          technology to explore where I've used it.
        </p>
      </motion.div>

      <SkillGalaxy />
    </>
  );
};

export default SectionWrapper(Skills, "skills");