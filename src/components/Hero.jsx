import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const roles = [
  "Full Stack Developer",
  "Creative Coder",
  "Building modern web experiences",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, 100);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length - 1));
      }, 50);
    } else if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className='relative w-full min-h-screen mx-auto pb-16'>
      <div className={`max-w-7xl mx-auto ${styles.paddingX} pt-[120px]`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Harshiya</span>
          </h1>

          <p className='mt-4 text-secondary text-[22px] sm:text-[28px] font-medium'>
            {text}
            <span className='animate-pulse'>|</span>
          </p>
        </div>

        <div className='mt-10 flex flex-col-reverse min-[1024px]:flex-row gap-4 md:gap-6 min-[1024px]:gap-12 items-stretch'>
          <div className='w-full min-[1024px]:flex-1 h-[600px] lg:h-[400px] rounded-2xl overflow-hidden'>
            <ComputersCanvas />
          </div>

          <div className='w-full min-[1024px]:flex-1 h-[300px] lg:h-[300px] rounded-2xl overflow-hidden'>
            <video
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-full object-cover'
            >
              <source src='/video.webm' type='video/webm' />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;