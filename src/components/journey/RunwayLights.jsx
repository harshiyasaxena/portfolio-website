import { forwardRef } from "react";

const RunwayLights = forwardRef(function RunwayLights(
  { count = 24, vertical = false },
  ref
) {
  return (
    <div ref={ref} className='absolute inset-0 pointer-events-none'>
      {!vertical ? (
        <>
          {/* Top border lights */}
          <div className='absolute left-0 right-0 top-0 flex justify-between px-4 -translate-y-1/2'>
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={`top-${index}`}
                className='runway-light h-2 w-2 rounded-full'
              />
            ))}
          </div>

          {/* Bottom border lights */}
          <div className='absolute left-0 right-0 bottom-0 flex justify-between px-4 translate-y-1/2'>
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={`bottom-${index}`}
                className='runway-light h-2 w-2 rounded-full'
              />
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Left border lights */}
          <div className='absolute top-0 bottom-0 left-0 flex flex-col justify-between py-4 -translate-x-1/2'>
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={`left-${index}`}
                className='runway-light h-2 w-2 rounded-full'
              />
            ))}
          </div>

          {/* Right border lights */}
          <div className='absolute top-0 bottom-0 right-0 flex flex-col justify-between py-4 translate-x-1/2'>
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={`right-${index}`}
                className='runway-light h-2 w-2 rounded-full'
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
});

export default RunwayLights;