import { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';
import { getDatabase, ref, onValue } from 'firebase/database';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import EatingImg from '@/assets/images/eating.jpg';
import LunchList from '@/components/lunch-list/LunchList';
import Footer from '@/components/footer/Footer';

export default function DagensLunch({ lunchData, weekData }) {
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

  return (
    <>
      <Head>
        <title>Restaurang Napoli | Dagens Lunch</title>
        <meta
          name="description"
          content="Välkommen till restaurang Napoli i Olofström. Ät din dagens lunch hos oss"
        />
      </Head>

      <div className="dark:bg-dark-mode-blue dark:text-gray-200">
        <section className="container mx-auto px-2 md:px-8  relative md:flex md:items-center md:justify-between pt-8 md:pt-20">
          <div className="hidden md:block fixed top-40 right-0 z-50">
            <SocialMediaTab />
          </div>

          <div className="md:w-1/2" ref={headingsContainerRef}>
            <h1 className="text-el text-3xl md:text-4xl drop-shadow-2xl uppercase tracking-wide">
              Dagens Lunch
            </h1>
            <p className="text-el mt-4 text-xl">
              Napoli i Olofström presenterar dagens lunch för vecka:{' '}
              {weekData && (
                <span className="font-bold">vecka {weekData.week}</span>
              )}{' '}
              nedan.
            </p>
            <p className="text-el text-xl text-amber-600 mt-1">
              Napoli med personal önskar er hjärtligt välkomna!
            </p>
          </div>
          <div
            className="md:shadow-3xl md:block w-full py-20 md:py-0 md:w-2/5"
            ref={imgRef}
          >
            <Image
              src={EatingImg}
              alt="girl eating"
              width={850}
              height={550}
              layout="responsive"
              priority
            />
          </div>
        </section>
        <section
          className="container mx-auto px-2 mb-16 md:mb-60 md:px-8 mt-10"
          ref={lunchRef}
        >
          {weekData && (
            <h2 className="mt-4 text-2xl py-4">{`Vecka: ${weekData.week}`}</h2>
          )}
          {lunchData && <LunchList lunchData={lunchData} />}
        </section>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  let lunchData;
  let weekData;

  const db = getDatabase();
  const lunchRef = ref(db, 'days');
  const weekRef = ref(db, 'week');

  try {
    5;
    onValue(lunchRef, (snapshot) => {
      lunchData = snapshot.val();
    });
    console.log(lunchData);
    onValue(weekRef, (snapshot) => {
      weekData = snapshot.val();
    });

    console.log(lunchData);
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      lunchData: lunchData ?? null,
      weekData: weekData ?? null,
    },
  };
}
