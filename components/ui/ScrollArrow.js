import { forwardRef } from 'react';
import useScrollToSection from '@/hooks/useScrollToSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const brandRed = '#991b1b';

export default forwardRef(function ScrollArrow({ arrowDirection }, ref) {
  const [scrollToSection] = useScrollToSection();

  const icon = arrowDirection === 'up' ? faArrowUp : faArrowDown;

  function scrollToSectionHandler() {
    scrollToSection(ref);
  }

  return (
    <button
      onClick={scrollToSectionHandler}
      className='group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 bg-black/30 dark:bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 hover:border-red-900/40'
      style={{
        boxShadow: `0 0 0px ${brandRed}`,
      }}
    >
      {/* glow ring */}
      <span
        className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        style={{
          boxShadow: `0 0 25px ${brandRed}`,
        }}
      />

      {/* icon */}
      <FontAwesomeIcon
        icon={icon}
        className='relative z-10 text-lg md:text-xl text-zinc-200 group-hover:text-white transition-colors duration-300'
      />

      {/* subtle pulse ring */}
      <span
        className='absolute inset-0 rounded-full animate-ping opacity-10'
        style={{ border: `1px solid ${brandRed}` }}
      />
    </button>
  );
});
