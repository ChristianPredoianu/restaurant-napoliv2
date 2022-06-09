import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const upArrow = <FontAwesomeIcon icon={faChevronUp} />;

  function scrollToTopHandler() {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    function toggleVisibility() {
      window.scrollY > 1500 ? setIsVisible(true) : setIsVisible(false);
    }

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-2 right-4 text-4xl text-amber-600 p-2 border border-amber-800  cursor-pointer"
          onClick={scrollToTopHandler}
        >
          {upArrow}
        </div>
      )}
    </>
  );
}
