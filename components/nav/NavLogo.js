import Image from 'next/image';
import Logo from '@/assets/images/napoli-logo.png';

export default function NavLogo() {
  return (
    <a className="text-black font-bold dark:text-gray-300 md:mr-4">
      <Image
        src={Logo}
        alt="information on devices"
        width={100}
        height={100}
        priority
      />
    </a>
  );
}
