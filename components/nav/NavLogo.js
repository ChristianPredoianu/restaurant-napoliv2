import Link from 'next/link';
import Logo from '@/assets/images/napoli-logo.png';

export default function NavLogo() {
  return (
    <Link href="/">
      <a className="text-black font-bold dark:text-gray-300 md:mr-4 w-16 sm:w-20 md:w-24">
        <img src={Logo.src} alt="Logo" />
      </a>
    </Link>
  );
}
