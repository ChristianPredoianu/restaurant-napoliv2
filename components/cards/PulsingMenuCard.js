const brandRed = '#991b1b';

export default function PulsingMenuCard({ content }) {
  return (
    <div
      className='
        relative

        w-full sm:w-2/3 md:w-2/5 lg:w-1/3

        p-8 md:p-10

        text-center

        rounded-2xl

        bg-white/5 dark:bg-black/30
        backdrop-blur-md

        border border-white/10

        shadow-xl

        transition-all duration-300

        hover:scale-[1.02]
        hover:shadow-2xl
      '
    >
      {/* glow ring */}
      <div
        className='
          absolute inset-0 rounded-2xl
          opacity-0 hover:opacity-100
          transition-opacity duration-300
        '
        style={{
          boxShadow: `0 0 35px ${brandRed}`,
        }}
      />

      {/* CONTENT */}
      <div className='relative z-10'>
        {/* TOP TEXT */}
        <p
          className='
            text-sm md:text-base
            uppercase
            tracking-[0.25em]
            text-zinc-500 dark:text-zinc-400
          '
        >
          {content.paragraph1}
        </p>

        {/* MAIN TEXT */}
        <p
          className='
            mt-3
            text-xl md:text-2xl lg:text-3xl
            font-bold
            text-zinc-900 dark:text-white
          '
        >
          {content.paragraph2}
        </p>

        {/* accent line */}
        <div
          className='
            mx-auto mt-5
            h-[2px] w-16
            rounded-full
          '
          style={{ backgroundColor: brandRed }}
        />
      </div>

      {/* subtle animated dot (instead of full pulse text) */}
      <div
        className='
          absolute top-4 right-4
          w-2 h-2 rounded-full
          animate-ping opacity-40
        '
        style={{ backgroundColor: brandRed }}
      />
    </div>
  );
}
