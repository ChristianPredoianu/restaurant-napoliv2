import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { getDatabase, ref, onValue } from 'firebase/database';
import useScrollReveal from '@/hooks/useScrollReveal';

import SocialMediaTab from '@/components/ui/SocialMediaTab';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import LunchList from '@/components/lunch-list/LunchList';
import Footer from '@/components/footer/Footer';

export default function DagensLunch() {
  const [lunchData, setLunchData] = useState(null);
  const [weekData, setWeekData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, { effect: 'fadeUp', offset: 60, duration: 1.2 });

  useEffect(() => {
    const db = getDatabase();
    const daysRef = ref(db, 'days');
    const weekRef = ref(db, 'week');

    const unsubDays = onValue(daysRef, (snap) => {
      setLunchData(snap.val());
      setIsLoading(false);
    });

    const unsubWeek = onValue(weekRef, (snap) => {
      setWeekData(snap.val());
    });

    return () => {
      unsubDays();
      unsubWeek();
    };
  }, []);

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center dark:bg-black'>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Restaurang Napoli | Dagens Lunch</title>
      </Head>

      <div className='min-h-screen py-10'>
        <div className='hidden md:block fixed top-40 right-0 z-50'>
          <SocialMediaTab />
        </div>

        <section
          className='container mx-auto px-4 md:px-16 relative border-b border-zinc-200/60 dark:border-white/10'
          ref={sectionRef}
        >
          {/* soft glow background for dark mode */}
          <div className='py-16 relative'>
            <div className='grid md:grid-cols-2 gap-10 items-center'>
              {/* TEXT */}
              <div>
                <p className='text-xs uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400'>
                  Dagens lunch
                </p>

                <h1 className='mt-4 text-4xl md:text-6xl font-extrabold leading-tight'>
                  Lunchbuffé <span className='text-red-700'>135:-</span>
                </h1>

                <p className='mt-5 text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed'>
                  Vecka{' '}
                  <span className='font-bold text-zinc-900 dark:text-white'>
                    {weekData?.week}
                  </span>{' '}
                  serverar vi hemlagad lunch med daglig variation i Olofström.
                </p>

                {/* INFO TAGS */}
                <div className='mt-6 flex flex-wrap gap-2 text-sm'>
                  {['🥗 Sallad', '🥖 Bröd', '☕ Kaffe', '🧃 Dryck'].map((item) => (
                    <span
                      key={item}
                      className='px-3 py-1 rounded-full bg-white/70 dark:bg-white/5 border border-zinc-200/60 dark:border-white/10 backdrop-blur text-zinc-700 dark:text-zinc-300'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* IMAGE */}
              <div className='relative'>
                <div className='rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-white/10 shadow-lg dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]'>
                  <img
                    src='/eating.jpg'
                    alt='Lunch'
                    className='w-full h-72 md:h-96 object-cover opacity-95 dark:opacity-90'
                  />
                </div>

                {/* badge */}
                <div className='absolute -bottom-4 left-4 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-white/10 shadow-md text-sm text-zinc-700 dark:text-zinc-300'>
                  🍽️ Uppdateras veckovis
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MENU */}
        <main className='container mx-auto px-4 md:px-8 py-14'>
          <div className='mb-8'>
            <h2 className='text-3xl md:text-4xl font-bold'>Veckans meny</h2>
            <p className='text-zinc-500 dark:text-zinc-400 mt-1'>Serveras 11:00–14:00</p>
          </div>

          <div className='rounded-2xl border border-zinc-200/60 dark:border-white/10 dark:bg-zinc-950/60 backdrop-blur p-4 md:p-6 shadow-sm dark:shadow-[0_10px_50px_-20px_rgba(0,0,0,0.8)]'>
            {lunchData && <LunchList lunchData={lunchData} />}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
