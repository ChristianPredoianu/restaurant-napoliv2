import { forwardRef } from 'react';
import useScrollToSection from '@/hooks/useScrollToSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default forwardRef(function ScrollArrow({ arrowDirection }, ref) {
  const [scrollToSection] = useScrollToSection();

  let arrow;

  arrowDirection === 'up' ? (arrow = faArrowUp) : (arrow = faArrowDown);

  function scrollToSectionHandler() {
    scrollToSection(ref);
  }

  return (
    <div
      className="border-2 border-amber-600 inline-block animate-bounce py-3 px-4 rounded-full"
      onClick={scrollToSectionHandler}
    >
      <FontAwesomeIcon
        icon={arrow}
        className="text-4xl cursor-pointer dark:text-amber-600"
      />
    </div>
  );
});
