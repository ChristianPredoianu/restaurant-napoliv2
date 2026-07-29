import { useState } from 'react';
import useDarkMode from 'hooks/useDarkMode';

export default function DarkModeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colorTheme, setTheme] = useDarkMode(isDarkMode);

  function toggleDarkModeHandler() {
    setIsDarkMode(!isDarkMode);
    setTheme(colorTheme);
  }

  return (
    <div className='flex items-center gap-4 ml-4 select-none'>
      {/* Structural High-Contrast Status Text */}
      <div className='flex flex-col text-left uppercase tracking-[0.2em] font-black text-[10px] leading-none space-y-1'>
        <span className='text-zinc-400'>Tema</span>
        <span className={isDarkMode ? 'text-red-500' : 'text-zinc-900'}>
          {isDarkMode ? 'Mörkt' : 'Ljust'}
        </span>
      </div>

      {/* Frame Button: Zero-border structural background layout */}
      <button
        type='button'
        onClick={toggleDarkModeHandler}
        aria-checked={isDarkMode}
        role='switch'
        aria-label='Växla mörkt läge'
        className='relative w-14 h-8 flex items-center rounded-full p-1 cursor-pointer outline-none transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-zinc-900 text-white border-2 border-zinc-800 dark:bg-black dark:text-white dark:border-zinc-700 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'
      >
        {/* The Morphing Canvas Indicator */}
        <div
          className={`w-5 h-5 rounded-full relative transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isDarkMode ? 'translate-x-6 bg-transparent' : 'bg-white'}`}
          style={{
            // When light mode: standard circle sun. When dark mode: drops a shadow mask to create a perfect moon crescent
            boxShadow: isDarkMode
              ? 'inset -6px -2px 0px 0px #ef4444'
              : '0 0 10px #fbbf24',
          }}
        >
          {/* Sun Rays (Only visible, scaling out, and rotating when in Light Mode) */}
          <div
            className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out ${isDarkMode ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
          >
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className='absolute top-1/2 left-1/2 w-1 h-1 bg-amber-400 rounded-full -translate-x-1/2 -translate-y-1/2'
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-8px)`,
                }}
              />
            ))}
          </div>
        </div>
      </button>
    </div>
  );
}
