import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";

import Terminal from "./Terminal";

const Experience = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>Career Journey</p>

        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="mt-12">
        <Terminal />
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");