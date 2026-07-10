import { journeyData } from "./journeyData";

const JourneyCards = ({ activeMilestone }) => {
  return (
    <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5'>
      {journeyData.map((item, index) => (
        <div
          key={item.id}
          className={`
            rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl
            transition-all duration-700
            ${
              index <= activeMilestone
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-10 opacity-0 scale-95"
            }
          `}
        >
          <p className='text-xs uppercase tracking-widest text-blue-400'>
            {item.year}
          </p>
          <h3 className='mt-3 text-xl font-semibold text-white'>{item.title}</h3>
          <p className='mt-2 text-sm text-slate-400'>{item.subtitle}</p>
          <p className='mt-4 text-sm leading-6 text-slate-500'>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default JourneyCards;