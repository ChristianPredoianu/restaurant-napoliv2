import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default forwardRef(function SocialMediaTab({ props }, ref) {
  return (
    <div
      className="flex flex-col gap-y-4 items-center bg-amber-600 text-white text-2xl py-4 px-2 rounded-l-lg shadow-xl"
      ref={ref}
    >
      <a
        href="https://www.facebook.com/NapoliRestaurang"
        rel="noreferrer nofollow"
        target="_blank"
        className="hover:scale-105 hover:text-black"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className="cursor-pointer transition duration-150 ease-in-out"
        />
      </a>
      <a
        href="https://www.instagram.com/napoli_restaurang/"
        rel="noreferrer nofollow"
        target="_blank"
        className="hover:scale-105 hover:text-black"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="transition duration-150 ease-in-out cursor-pointer"
        />
      </a>
      <a
        href="mailto:musti_076@napoli.com"
        className="hover:scale-105 hover:text-black"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="transition duration-150 ease-in-out cursor-pointer"
        />
      </a>
    </div>
  );
});
