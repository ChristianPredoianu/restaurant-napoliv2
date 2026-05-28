import { forwardRef } from 'react';

const brandRed = '#991b1b';

export default forwardRef(function MenuPageHeadings({}, ref) {
  return (
    <div
      ref={ref.current.headingContainerRef}
      className='
        flex flex-col items-center justify-center
        text-center

        pt-20 md:pt-28
        pb-14 md:pb-20

        max-w-3xl mx-auto
      '
    >
      {/* SMALL LABEL */}
      <p className='animated-heading text-sm md:text-base tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-400 mb-4'>
        Restaurang Napoli
      </p>

      {/* MAIN HEADING */}
      <h1
        ref={ref.current.headingRef}
        className='
          animated-heading

          text-4xl sm:text-5xl md:text-6xl

          font-black
          leading-tight

          text-zinc-900 dark:text-white

          tracking-tight
        '
      >
        Välkommen till{' '}
        <span
          className='relative inline-block font-extrabold'
          style={{ color: brandRed }}
        >
          Napoli
          <span
            className='
              absolute left-0 -bottom-2
              w-full h-[3px]
              rounded-full
              opacity-60
            '
            style={{ backgroundColor: brandRed }}
          />
        </span>
      </h1>

      {/* SUB TEXT */}
      <h2
        className='
          animated-heading
          mt-6
          text-lg sm:text-xl md:text-2xl
          text-zinc-600 dark:text-zinc-300
          font-medium
        '
      >
        För beställningar:{' '}
        <span
          className='
            font-bold
            transition-colors
          '
          style={{ color: brandRed }}
        >
          0454-917 01
        </span>
      </h2>

      {/* OPTIONAL SMALL DESCRIPTION (adds premium feel) */}
      <p className='animated-heading mt-5 text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-md'>
        Pizza, pasta och grillrätter lagade med färska råvaror i hjärtat av Olofström.
      </p>
    </div>
  );
});
