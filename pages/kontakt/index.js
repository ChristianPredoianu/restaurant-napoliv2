import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import Footer from '@/components/footer/Footer';
import HamburgerImg from '@/assets/images/hamburger3.png';

export default function Kontakt() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  const openHoursData = [
    { days: 'Mån–Tors', summer: '11:00–22:00', winter: '11:00–21:00' },
    { days: 'Fre–Lör', summer: '11:00–23:00', winter: '11:00–22:00' },
    { days: 'Sön', summer: '11:00–22:00', winter: '11:00–21:00' },
  ];

  return (
    <>
      <Head>
        <title>Restaurang Napoli | Kontakt</title>
      </Head>

      {/* SOCIAL */}
      <div className='hidden md:block fixed right-0 top-40 z-50'>
        <SocialMediaTab />
      </div>

      <main className='container mx-auto px-4 md:px-16 pt-28 md:pt-44 pb-28 space-y-32'>
        {/* HERO */}
        <section className='grid lg:grid-cols-2 gap-16 items-center' ref={sectionRef}>
          {/* TEXT */}
          <div className='space-y-6'>
            <p className='text-xs tracking-[0.35em] uppercase text-zinc-500 dark:text-zinc-400'>
              Kontakt & Event
            </p>

            <h1 className='text-5xl md:text-6xl font-extrabold leading-tight text-zinc-900 dark:text-zinc-100'>
              Napoli i <span className='text-red-600 dark:text-red-500'>Olofström</span>
            </h1>

            <p className='text-lg leading-relaxed max-w-xl text-zinc-700 dark:text-zinc-300'>
              Vi skapar allt från mindre middagar till större event — student, företag
              eller födelsedag.
            </p>

            <p className='text-red-500 font-semibold text-lg'>
              Välkomna önskar Napoli med personal!
            </p>

            {/* TAGS */}
            <div className='flex flex-wrap gap-2 pt-2'>
              {['Event', 'Catering', 'Födelsedagar', 'Företag'].map((item) => (
                <span
                  key={item}
                  className='px-3 py-1 rounded-full text-sm bg-zinc-100 border border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* IMAGE CARD */}
          <div className='relative'>
            <div className='rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl'>
              <img
                src={HamburgerImg.src}
                alt='Hamburgare'
                className='w-full h-[420px] object-cover'
              />
            </div>

            {/* subtle glow */}
            <div className='absolute -inset-2 rounded-3xl bg-gradient-to-r from-red-500/10 to-transparent blur-2xl -z-10' />
          </div>
        </section>

        {/* OPEN HOURS */}
        <section className='max-w-5xl mx-auto space-y-10'>
          <div className='text-center space-y-2'>
            <h2 className='text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100'>
              Öppettider
            </h2>
            <p className='text-zinc-500 dark:text-zinc-400'>
              Sommar & vintertider beroende på säsong
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-5'>
            {openHoursData.map((item) => (
              <div
                key={item.days}
                className='group rounded-2xl p-6 space-y-4 bg-white border border-zinc-200 dark:bg-zinc-900/60 dark:border-zinc-800 hover:border-red-500/40 transition-all duration-300'
              >
                <h3 className='text-lg font-semibold text-zinc-900 dark:text-zinc-100'>
                  {item.days}
                </h3>

                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between text-zinc-500 dark:text-zinc-400'>
                    <span>Sommar</span>
                    <span className='text-zinc-800 dark:text-zinc-200'>
                      {item.summer}
                    </span>
                  </div>

                  <div className='flex justify-between text-zinc-500 dark:text-zinc-400'>
                    <span>Vinter</span>
                    <span className='text-zinc-800 dark:text-zinc-200'>
                      {item.winter}
                    </span>
                  </div>
                </div>

                <div className='h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent' />
              </div>
            ))}
          </div>

          {/* PHONE CTA */}
          <div className='flex justify-center pt-6'>
            <div className='flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 shadow-md'>
              <span className='text-zinc-500 dark:text-zinc-400'>Ring oss</span>

              <div className='flex items-center gap-2 text-red-500 font-bold text-lg'>
                <FontAwesomeIcon icon={faPhone} />
                0454-917 01
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
