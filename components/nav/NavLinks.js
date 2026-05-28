import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLinks({ link, onCloseNavbar }) {
  const router = useRouter();

  // Guard: stop if link is missing
  if (!link || !link.path) return null;

  const isActive = router.pathname === link.path;

  return (
    <li className='cursor-pointer' onClick={onCloseNavbar}>
      <Link href={link.path}>
        <span className='group relative flex items-center px-4 py-3 text-sm uppercase tracking-[0.18em] transition-all duration-300'>
          {/* Text + underlines */}
          <span className='relative'>
            <span
              className={`
                transition-colors duration-300
                ${isActive ? 'text-red-500' : 'text-zinc-500 dark:text-zinc-300 hover:text-red-500'}
              `}
            >
              {link.name}
            </span>

            {/* Hover underline (always present, animated) */}
            <span
              className='
                absolute left-0 -bottom-1 h-[2px] w-full
                bg-red-500
                scale-x-0 group-hover:scale-x-100
                origin-left transition-transform duration-300
              '
            />

            {/* Active underline (always visible when active) */}
            {isActive && (
              <span
                className='
                  absolute left-0 -bottom-1 h-[2px] w-full
                  bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]
                '
              />
            )}
          </span>

          {/* Hover glow background */}
          <span
            className='
              absolute inset-0 rounded-lg
              bg-red-500/0 group-hover:bg-red-500/5
              transition-colors duration-300
            '
          />
        </span>
      </Link>
    </li>
  );
}
