import Link from 'next/link';

export default function NavLinks({ link }) {
  return (
    <li>
      <Link href={link.path}>
        <a className="px-3 py-4 flex items-center text-md uppercase  leading-snug text-white lg:text-black hover:opacity-75 transition-colors transition-duration: 150ms tracking-widest">
          {link.name}
        </a>
      </Link>
    </li>
  );
}
