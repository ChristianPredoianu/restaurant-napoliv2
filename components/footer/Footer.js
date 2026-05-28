import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faEnvelope } from '@fortawesome/free-brands-svg-icons';

import NavLogo from '@/components/nav/NavLogo';

export default function Footer() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/ui/LeafletMap'), {
        loading: () => (
          <div className='h-full w-full flex items-center justify-center text-zinc-400'>
            Laddar karta...
          </div>
        ),
        ssr: false,
      }),
    [],
  );

  return (
    <footer className='relative w-full overflow-hidden border-t border-white/10 bg-zinc-950 gray-900 dark:text-zink-200'>
      {/* ambient glow */}
      <div className='absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-red-500/10 blur-[140px]' />
      <div className='absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-amber-500/10 blur-[160px]' />

      <div className='relative max-w-7xl mx-auto px-6 py-20 space-y-16'>
        {/* TOP SECTION */}
        <div className='flex flex-col items-center text-center space-y-6'>
          <NavLogo />

          <p className='text-sm tracking-[0.25em] text-zinc-400 uppercase'>
            Restaurang Napoli • Olofström
          </p>
        </div>

        {/* GRID SECTION */}
        <div className='grid lg:grid-cols-3 gap-10 items-start'>
          {/* CONTACT */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Kontakt</h3>

            <p className=' text-sm leading-relaxed '>
              Östra Storgatan 5<br />
              293 34 Olofström
              <br />
              Sverige
            </p>

            <a
              href='mailto:musti_076@napoli.com'
              className='inline-flex items-center gap-2 text-sm  hover:text-red-400 transition'
            >
              <FontAwesomeIcon icon={faEnvelope} />
              E-maila oss
            </a>
          </div>

          {/* MAP */}
          <div className='rounded-2xl overflow-hidden border border-white/10 shadow-xl h-[280px]'>
            <Map posix={[56.278145, 14.522343]} />
          </div>

          {/* SOCIAL */}
          <div className='space-y-4 lg:text-right'>
            <h3 className='text-lg font-semibold mr-4'>Följ oss</h3>
            <div className='flex -ml-4 lg:ml-0 lg:justify-end gap-4 text-xl'>
              <a
                href='https://www.facebook.com/NapoliRestaurang'
                target='_blank'
                rel='noreferrer'
                className='p-3 rounded-full bg-white/5 hover:bg-white/10 transition hover:scale-105'
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href='https://www.instagram.com/napoli_restaurang/'
                target='_blank'
                rel='noreferrer'
                className='p-3 rounded-full bg-white/5 hover:bg-white/10 transition hover:scale-105'
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className='pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500'>
          <p>© {new Date().getFullYear()} Napoli Restaurang</p>

          <a
            href='https://github.com/ChristianPredoianu'
            target='_blank'
            rel='noreferrer'
            className='hover:text-red-400 transition'
          >
            Developed by Christian Predoianu
          </a>
        </div>
      </div>
    </footer>
  );
}
