import { journeyData } from "./journeyData";

const Milestones = ({ activeMilestone, vertical = false }) => {
  return (
    <div
      className={`absolute inset-0 ${
        vertical
          ? "flex flex-col items-center justify-between py-10"
          : "flex items-center justify-between px-10"
      }`}
    >
      {journeyData.map((item, index) => (
        <div
          key={item.id}
          className={`flex ${
            vertical ? "flex-row items-center gap-4" : "flex-col items-center"
          }`}
        >
          <div
            className={`h-5 w-5 rounded-full border-4 border-[#050816] transition-all duration-500 ${
              index <= activeMilestone
                ? "bg-white shadow-[0_0_35px_rgba(79,140,255,.9)] scale-125"
                : "bg-slate-500"
            }`}
          />
          <div className={vertical ? "text-left" : "text-center"}>
            <span className='block text-sm font-semibold tracking-widest text-white'>
              {item.short}
            </span>
            <span className='block text-xs text-slate-400'>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Milestones;