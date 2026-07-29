import Link from 'next/link';

export default function NavLogo() {
  return (
    <Link
      href='/'
      className='flex flex-col transition-transform duration-300 hover:scale-105 outline-none select-none'
      aria-label='Napoli Home'
    >
      <div className='cursor-pointer'>
        {' '}
        {/* Add a wrapper */}
        <span className='font-sans font-black text-xl sm:text-2xl md:text-3xl tracking-wider text-red-800 uppercase leading-none'>
          Napoli
        </span>
        <span className='font-sans font-bold text-[9px] sm:text-[10px] md:text-xs tracking-[0.22em] text-zinc-500 uppercase mt-0.5 leading-none'>
          Restaurang
        </span>
      </div>
    </Link>
  );
}
