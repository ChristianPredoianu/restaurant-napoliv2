import { useState, useRef } from 'react';
import gsap from 'gsap';
import NavLogo from '@/components/nav/NavLogo';
import DarkModeToggler from '@/components/nav/DarkModeToggler';
import NavLinks from '@/components/nav/NavLinks';
import Hamburger from '@/components/nav/Hamburger';

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const navLinksRef = useRef(null);

  const navLinks = [
    { name: 'Hem', path: '/' },
    { name: 'Meny', path: '/meny' },
    { name: 'Dagens Lunch', path: '/dagenslunch' },
    { name: 'Kontakta oss', path: '/kontakt' },
    { name: 'Logga In', path: '/loggain' },
    ,
  ];

  function fadeInNav() {
    if (!gsap.isTweening(navLinksRef.current)) {
      gsap.from(navLinksRef.current, {
        duration: 0.3,
        y: -100,
        opacity: 0,
        rotate: 10,
      });
    }
  }

  function toggleNavbarHandler() {
    setIsNavbarOpen(!isNavbarOpen);
    fadeInNav();
  }

  function closeNavbarHandler() {
    setIsNavbarOpen(false);
  }

  return (
    <>
      <header className='w-full dark:bg-dark-mode-blue dark:text-gray-200'>
        <nav className='min-h-15vh relative flex flex-wrap items-center justify-between'>
          <div className='container mx-auto flex flex-wrap items-center px-2 md:px-8 justify-between'>
            <NavLogo />
            <DarkModeToggler />
            <Hamburger
              isNavbarOpen={isNavbarOpen}
              onToggleNavbar={toggleNavbarHandler}
            />

            <div className='w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start'></div>
            <div
              className={`lg:flex flex-grow items-center 
             ${isNavbarOpen ? ' flex' : ' hidden'}`}
            >
              <ul
                className='w-full fixed z-30 lg:static top-0 left-0 h-screen lg:h-auto justify-center lg:w-auto flex flex-col items-center lg:flex-row list-none lg:ml-auto bg-amber-700 lg:bg-transparent py-10 px-2'
                ref={navLinksRef}
              >
                {navLinks.map((link) => (
                  <NavLinks
                    link={link}
                    key={link.name}
                    onCloseNavbar={closeNavbarHandler}
                  />
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
