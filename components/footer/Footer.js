import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavLogo from '@/components/nav/NavLogo';
import GMap from '@/components/ui/GMap';

export default function Footer() {
  return (
    <footer className="bg-dark-mode-blue py-20 dark:border-t border-amber-600">
      <div className="container mx-auto w-24 pb-10">
        <NavLogo />
      </div>
      <GMap />
      <div className="container mx-auto border-b border-amber-600 mt-10"></div>
      <div className="text-gray-200 text-2xl container mx-auto flex justify-center items-center mt-16">
        <a
          href="https://www.facebook.com/NapoliRestaurang"
          rel="noreferrer nofollow"
          target="_blank"
          className="hover:scale-105 hover:text-amber-600"
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
          className="hover:scale-105 hover:text-amber-600"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="ml-5 cursor-pointer transition duration-150 ease-in-out"
          />
        </a>
        <a
          href="mailto:musti_076@napoli.com"
          className="hover:scale-105 hover:text-amber-600"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="ml-5 cursor-pointer transition duration-150 ease-in-out"
          />
        </a>
      </div>
    </footer>
  );
}
