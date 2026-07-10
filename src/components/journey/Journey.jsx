import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

import Runway from "./Runway";
import JourneyCards from "./JourneyCards";
import { useJourney } from "./useJourney";

const Journey = () => {
  const sectionRef = useRef(null);
  const lightsRef = useRef(null);
  const planeRef = useRef(null);

  const [activeMilestone, setActiveMilestone] = useState(-1);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const [vertical, setVertical] = useState(false);

  useEffect(() => {
    const check = () => setVertical(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useJourney({
    isInView,
    planeRef,
    lightsRef,
    onMilestone: setActiveMilestone,
    vertical,
  });

  return (
    <section ref={sectionRef} className='relative py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 sm:px-16'>
        <div className='mb-14 text-center'>
          <p className='mb-4 text-sm uppercase tracking-[0.4em] text-blue-400'>
            My Journey
          </p>
          <h2 className='text-4xl font-bold text-white sm:text-5xl'>
            Every Flight
            <br />
            Begins Somewhere.
          </h2>
        </div>

        <Runway
          lightsRef={lightsRef}
          planeRef={planeRef}
          activeMilestone={activeMilestone}
          vertical={vertical}
        />

        <JourneyCards activeMilestone={activeMilestone} />

        <div className='absolute bottom-0 left-0 h-px w-full bg-white/10' />
      </div>
    </section>
  );
};

export default Journey;