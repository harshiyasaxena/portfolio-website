import { useEffect } from "react";
import gsap from "gsap";

export function useJourney({
  isInView,
  planeRef,
  lightsRef,
  onMilestone,
  vertical = false,
}) {
  useEffect(() => {
    // If the component is not in view, don't trigger
    if (!isInView) return;
    if (!planeRef.current || !lightsRef.current) return;

    const lights = lightsRef.current.querySelectorAll(".runway-light");
    const tl = gsap.timeline();

    // Reset initial state to ensure it starts from scratch every time
    gsap.set(planeRef.current, { opacity: 0, x: 0, y: 0 });
    gsap.set(lights, {
      backgroundColor: "rgba(255,255,255,.12)",
      boxShadow: "none",
      scale: 1,
    });

    // Animation Sequence
    tl.to(lights, {
      backgroundColor: "#ffffff",
      boxShadow: "0 0 14px #4F8CFF",
      scale: 1.25,
      stagger: 0.04,
      duration: 0.08,
    });

    tl.to({}, { duration: 0.25 });
    tl.to(planeRef.current, { opacity: 1, duration: 0.4 });

    const positions = vertical
      ? [60, 190, 320, 450, 580]
      : [80, 320, 560, 820, 1080];

    positions.forEach((pos, index) => {
      tl.to(planeRef.current, {
        ...(vertical ? { y: pos } : { x: pos }),
        duration: 0.9,
        ease: "power2.inOut",
        onComplete: () => onMilestone(index),
      });
      tl.to({}, { duration: 0.2 });
    });

    // CLEANUP: Kill the timeline when scrolling away
    return () => {
      tl.kill();
      onMilestone(-1); // Resets cards and milestones immediately
    };
  }, [isInView, planeRef, lightsRef, onMilestone, vertical]);
}