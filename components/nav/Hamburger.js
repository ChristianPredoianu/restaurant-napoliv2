export default function Hamburger({ isNavbarOpen, onToggleNavbar }) {
  return (
    <button
      onClick={onToggleNavbar}
      aria-label='Toggle menu'
      className={`
        relative z-50 lg:hidden
        flex flex-col items-center justify-center
        w-12 h-12
        rounded-xl
        transition-all duration-300 ease-out
        hover:bg-black/5 dark:hover:bg-white/10
        active:scale-95
      `}
    >
      {/* TOP LINE */}
      <span
        className={`
          block h-[2px] w-7 rounded-full
          transition-all duration-300 ease-in-out
          bg-red-800 dark:bg-red-500

          ${isNavbarOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-[6px]'}
        `}
      />

      {/* MIDDLE LINE */}
      <span
        className={`
          block h-[2px] w-7 rounded-full
          transition-all duration-300 ease-in-out
          bg-red-800 dark:bg-red-500

          ${isNavbarOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}
        `}
      />

      {/* BOTTOM LINE */}
      <span
        className={`
          block h-[2px] w-7 rounded-full
          transition-all duration-300 ease-in-out
          bg-red-800 dark:bg-red-500

          ${isNavbarOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-[6px]'}
        `}
      />

      {/* glow when open */}
      {isNavbarOpen && (
        <span
          className='
          absolute inset-0 rounded-xl
          shadow-[0_0_20px_rgba(153,27,27,0.25)]
        '
        />
      )}
    </button>
  );
}
