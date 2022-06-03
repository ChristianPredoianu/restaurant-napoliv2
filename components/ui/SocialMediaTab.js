import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default forwardRef(function SocialMediaTab({ props }, ref) {
  return (
    <div
      className="flex flex-col gap-4 bg-amber-600 text-white text-2xl py-4 px-2 rounded-l-lg shadow-xl"
      ref={ref}
    >
      <FontAwesomeIcon
        icon={faFacebook}
        className="transition duration-150 ease-in-out cursor-pointer "
      />
      <FontAwesomeIcon
        icon={faInstagram}
        className="transition duration-150 ease-in-out cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faEnvelope}
        className="transition duration-150 ease-in-out cursor-pointer"
      />
    </div>
  );
});
