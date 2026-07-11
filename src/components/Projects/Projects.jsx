import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";

import VSCode from "./VSCode";

const Projects = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>
          Featured Work
        </p>

        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className="mt-12">
        <VSCode />
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");