const brandRed = '#991b1b';
const PHONE = '0454-917 01';
const PHONE_HREF = 'tel:+4645491701';
const DESCRIPTION =
  'Pizza, pasta och grillrätter lagade med färska råvaror i hjärtat av Olofström.';

export default function MenuPageHeadings({ headingRef, headingContainerRef }) {
  return (
    <div
      ref={headingContainerRef}
      className='flex flex-col items-center justify-center text-center pt-20 md:pt-28 pb-14 md:pb-20 max-w-3xl mx-auto'
    >
      {/* Small label */}
      <p className='animated-heading text-sm md:text-base tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-400 mb-4'>
        Restaurang Napoli
      </p>

      {/* Main heading */}
      <h1
        ref={headingRef}
        className='animated-heading text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-zinc-900 dark:text-white tracking-tight'
      >
        Välkommen till{' '}
        <span className='relative inline-block' style={{ color: brandRed }}>
          Napoli
          <span
            aria-hidden='true'
            className='absolute left-0 -bottom-2 w-full h-[3px] rounded-full opacity-60'
            style={{ backgroundColor: brandRed }}
          />
        </span>
      </h1>

      {/* Sub heading */}
      <h2 className='animated-heading mt-6 text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 font-medium'>
        För beställningar:{' '}
        <a
          href={PHONE_HREF}
          className='font-bold transition-colors hover:opacity-80'
          style={{ color: brandRed }}
        >
          {PHONE}
        </a>
      </h2>

      <p className='animated-heading mt-5 text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-md'>
        {DESCRIPTION}
      </p>
    </div>
  );
}
