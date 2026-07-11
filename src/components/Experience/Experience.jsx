import { motion } from "framer-motion";
import { useState } from "react";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";

import Terminal from "./Terminal";

const Experience = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    // Wrap everything in a single wrapper to track the viewport presence of the whole section
    <motion.div
      initial="hidden"
      whileInView="show"
      // margin prevents triggering a refresh if you slightly scroll up or down within the block
      viewport={{ once: false, amount: 0.15, margin: "-100px 0px -100px 0px" }}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      className="w-full"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        <p className={styles.sectionSubText}>Career Journey</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="mt-12">
        {isInView ? (
          <Terminal />
        ) : (
          <div className="h-[380px] sm:h-[450px] md:h-[550px] w-full bg-[#090d13] rounded-3xl border border-white/5" />
        )}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Experience, "work");