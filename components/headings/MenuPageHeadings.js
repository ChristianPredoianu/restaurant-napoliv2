import { forwardRef } from 'react';

export default forwardRef(function MenuPageHeadings({}, ref) {
  return (
    <div
      className="flex flex-col items-center justify-center pt-10 pb-24 md:mt-32 md:pb-40"
      ref={ref.current.headingContainerRef}
    >
      <h1
        className="animated-heading text-3xl md:text-6xl drop-shadow-2xl uppercase text-center tracking-wide"
        ref={ref.current.headingRef}
      >
        Välkommen till restaurang{' '}
        <span className="test drop-shadow-3xl tracking-widest font-bold">
          Napoli
        </span>
      </h1>

      <h2 className="animated-heading mt-4 text-xl md:text-4xl">
        För beställningar:{' '}
        <span className="animated-heading animate-pulse drop-shadow-3xl">
          0454-917 01
        </span>
      </h2>
    </div>
  );
});
