import PlaneIcon from "./PlaneIcon";
import RunwayLights from "./RunwayLights";
import Milestones from "./Milestones";

const Runway = ({ lightsRef, planeRef, activeMilestone, vertical = false }) => {
  return (
    <div className='relative'>
      <div className='absolute top-0 h-px w-full bg-white/10' />

      <div
        className={`relative mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-transparent ${
          vertical ? "h-[700px] w-[120px] mx-auto" : "h-36 w-full"
        }`}
      >
        <RunwayLights ref={lightsRef} vertical={vertical} />

        {/* Center line */}
        {!vertical ? (
          <div className='absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-[repeating-linear-gradient(to_right,white_0_30px,transparent_30px_60px)] opacity-30' />
        ) : (
          <div className='absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,white_0_30px,transparent_30px_60px)] opacity-30' />
        )}

        {/* Plane sits exactly on center line */}
        <div
  ref={planeRef}
  className='absolute z-30'
  style={{
    opacity: 0,
    top: vertical ? "0" : "50%",
    left: vertical ? "50%" : "0",
    transform: vertical
      ? "translateX(-50%)"
      : "translateY(-50%)",
  }}
>
  <PlaneIcon />
</div>
        <Milestones activeMilestone={activeMilestone} vertical={vertical} />
      </div>

      <div className='absolute bottom-0 h-px w-full bg-white/10' />
    </div>
  );
};

export default Runway;