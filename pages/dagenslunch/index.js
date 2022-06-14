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
      <section className="container mx-auto px-2 md:px-8  relative md:flex md:items-center md:justify-between mt-8 md:mt-20">
        <div className="fixed top-96 md:top-10rem  right-0 z-30">
          <SocialMediaTab ref={socialMediaTabRef} />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl drop-shadow-2xl uppercase tracking-wide">
            Dagens Lunch
          </h1>
          <p className="mt-4 text-xl">
            Napoli i Olofström presenterar dagens lunch för vecka:{' '}
            <span className="font-bold">vecka {weekData.week}</span> nedan.
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
      <section className="container mx-auto px-2 md:px-8 py-8">
        <h2 className="mt-4 text-2xl py-4">{`Vecka: ${weekData.week}`}</h2>
        <LunchList lunchData={lunchData} />
      </section>
    </>
  );
}

export function getStaticProps() {
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
