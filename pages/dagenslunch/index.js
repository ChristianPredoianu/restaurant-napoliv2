import { useRef, useState } from 'react';
import Head from 'next/head';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';
import { getDatabase, ref, onValue } from 'firebase/database';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
/* import EatingImg from '@/assets/images/eating.jpg'; */
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import LunchList from '@/components/lunch-list/LunchList';
import Footer from '@/components/footer/Footer';

export default function DagensLunch() {
  const [lunchData, setLunchData] = useState(null);
  const [weekData, setWeekData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const headingsContainerRef = useRef(null);
  const imgRef = useRef(null);
  const lunchRef = useRef(null);

  const q = gsap.utils.selector(headingsContainerRef);
  const tl = gsap.timeline();

  let isAnimation;
  useIsomorphicLayoutEffect(() => {
    isAnimation = sessionStorage.getItem('isLunchAnimated');
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!isAnimation) {
      tl.from(q('.text-el'), { opacity: 0, duration: 1, stagger: 0.2 });
      tl.from(imgRef.current, {
        x: 100,
        opacity: 0,
      });
      tl.from(lunchRef.current, {
        opacity: 0,
        y: 100,
        onComplete: () => {
          sessionStorage.setItem('isLunchAnimated', true);
        },
      });
    }
    return () => tl.kill();
  }, []);

  useIsomorphicLayoutEffect(() => {
    setIsLoading(true);

    const db = getDatabase();

    const lunchRef = ref(db, 'days');
    const weekRef = ref(db, 'week');

    try {
      onValue(lunchRef, (snapshot) => {
        setLunchData(snapshot.val());
      });

      onValue(weekRef, (snapshot) => {
        setWeekData(snapshot.val());
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  useIsomorphicLayoutEffect(() => {
    if (lunchData) setIsLoading(false);
  });

  let output;
  console.log(isLoading);
  if (isLoading) {
    output = <LoadingSpinner />;
  } else {
    output = (
      <>
        <section className='container mx-auto px-2 md:px-8  relative md:flex md:items-center md:justify-between pt-8 md:pt-20'>
          <div className='hidden md:block fixed top-40 right-0 z-50'>
            <SocialMediaTab />
          </div>

          <div className='md:w-1/2' ref={headingsContainerRef}>
            <div className='flex items-center gap-2 text-3xl uppercase tracking-wide xl:text-4xl drop-shadow-2xl'>
              <h1 className='text-el'>Lunch buffe:</h1>
              <p className='text-red-500'>125:-</p>
            </div>
            <p className='text-el mt-4 text-xl'>
              Napoli i Olofström presenterar dagens lunch för vecka:{' '}
              {weekData && <span className='font-bold'>{weekData.week}</span>} nedan.
            </p>
            <p className='text-el text-xl text-amber-600 mt-1'>
              Napoli med personal önskar er hjärtligt välkomna!
            </p>
          </div>
          <div
            className='md:shadow-3xl md:block w-full py-20 md:py-0 md:w-2/5'
            ref={imgRef}
          >
            <img src={'/eating.jpg'} alt='girl eating' />
          </div>
        </section>
        <section
          className='container mx-auto px-2 mb-16 md:mb-60 md:px-8 mt-10'
          ref={lunchRef}
        >
          {weekData && (
            <h2 className='mt-4 text-2xl py-4'>{`Vecka: ${weekData.week}`}</h2>
          )}

          {lunchData && <LunchList lunchData={lunchData} />}
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Restaurang Napoli | Dagens Lunch</title>
        <meta
          name='description'
          content='Välkommen till restaurang Napoli i Olofström. Ät din dagens lunch hos oss'
        />
      </Head>

      <div className='relative min-h-screen dark:bg-dark-mode-blue dark:text-gray-200'>
        {output}
      </div>
    </>
  );
}
