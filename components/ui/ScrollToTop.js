import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const brandRed = '#991b1b';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function scrollToTopHandler() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    function toggleVisibility() {
      setIsVisible(window.scrollY > 400);
    }

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTopHandler}
      aria-label='Scroll to top'
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
    >
      <FontAwesomeIcon
        icon={faChevronUp}
        className='text-lg'
        style={{ color: brandRed }}
      />
    </button>
  );
}
