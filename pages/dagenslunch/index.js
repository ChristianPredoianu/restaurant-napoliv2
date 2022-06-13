import { useRef } from 'react';
import Image from 'next/image';
import { getDatabase, ref, onValue } from 'firebase/database';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import EatingImg from '@/assets/images/eating.jpg';
import LunchList from '@/components/lunch-list/LunchList';

export default function DagensLunch({ lunchData, weekData }) {
  const socialMediaTabRef = useRef(null);

  console.log(weekData);

  return (
    <>
      <section className="relative md:flex md:items-center md:justify-between px-2 md:px-8 mt-8 md:mt-20">
        <div className="absolute md:fixed top-96 lg:top-40 right-0 z-30">
          <SocialMediaTab ref={socialMediaTabRef} />
        </div>
        <div className="container mx-auto md:w-1/2">
          <h1 className="text-3xl md:text-5xl drop-shadow-2xl uppercase tracking-wide">
            Dagens Lunch
          </h1>
          <p className="mt-4 text-xl">
            Napoli i Olofström presenterar dagens lunch för vecka:{' '}
            <span>vecka45</span> nedan.
          </p>
          <p className="text-xl text-amber-600 mt-1">
            Napoli med personal önskar er hjärtligt välkomna!
          </p>
        </div>
        <div className="hidden shadow-3xl md:block w-full py-20 md:py-0 md:w-2/5">
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
      <section className="container mx-auto">
        <LunchList lunchData={lunchData} />
      </section>
    </>
  );
}

export function getStaticProps() {
  let lunchData;
  let weekData;

  const db = getDatabase();
  const lunchRef = ref(db, 'lunch');
  const weekRef = ref(db, 'week');

  try {
    onValue(lunchRef, (snapshot) => {
      lunchData = snapshot.val();
    });

    onValue(weekRef, (snapshot) => {
      weekData = snapshot.val();
    });
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      lunchData,
      weekData,
    },
  };
}
