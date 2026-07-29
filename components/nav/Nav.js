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
  ];

  function fadeInNav() {
    if (navLinksRef.current && !gsap.isTweening(navLinksRef.current)) {
      gsap.fromTo(
        navLinksRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
      );
    }
  }

  function toggleNavbarHandler() {
    setIsNavbarOpen((prev) => !prev);
    // Delay fadeIn until after the menu is visible
    setTimeout(() => fadeInNav(), 10);
  }

  function closeNavbarHandler() {
    setIsNavbarOpen(false);
  }

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm'>
      <nav className='container mx-auto px-4 md:px-6 py-3'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <NavLogo />

          {/* Right side: Dark mode toggler + Hamburger */}
          <div className='flex items-center gap-3'>
            <DarkModeToggler />
            <Hamburger isNavbarOpen={isNavbarOpen} onToggleNavbar={toggleNavbarHandler} />
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`fixed lg:static top-0 left-0 w-full h-screen lg:h-auto bg-black/95 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none transition-all duration-300 ease-in-out z-40 ${isNavbarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        >
          <ul
            ref={navLinksRef}
            className='flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-6 lg:gap-8 h-full w-full px-4 py-20 lg:py-0'
          >
            {navLinks.map((link) => (
              <NavLinks key={link.name} link={link} onCloseNavbar={closeNavbarHandler} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
