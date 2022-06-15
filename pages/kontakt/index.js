import Image from 'next/image';
import Head from 'next/head';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import HamburgerImg from '@/assets/images/hamburger3.png';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import Footer from '@/components/footer/Footer';

export default function Kontakt() {
  const headingsContainerRef = useRef(null);
  const openHoursDivRef = useRef(null);
  const hamburgerImgRef = useRef(null);

  const q = gsap.utils.selector(headingsContainerRef);
  const tl = gsap.timeline();

  let isAnimation;
  useIsomorphicLayoutEffect(() => {
    isAnimation = sessionStorage.getItem('isContactAnimated');
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!isAnimation) {
      tl.from(q('.text-el'), { y: 100, opacity: 0, duration: 1, stagger: 0.2 });
      tl.from(hamburgerImgRef.current, {
        opacity: 0,
      });
      tl.from(openHoursDivRef.current, {
        opacity: 0,
        y: 100,
        onComplete: () => {
          sessionStorage.setItem('isContactAnimated', true);
        },
      });
    }
    return () => tl.kill();
  }, []);

  const openHoursData = [
    { days: 'Mån-tors', summer: '11:00-22:00', winter: '11:00-21:00' },
    { days: 'Fre-Lör', summer: '11:00-23:00', winter: '11:00-22:00' },
    { days: 'Sön', summer: '11:00-22:00', winter: '11:00-21:00' },
  ];

  const openHours = openHoursData.map((openHour) => (
    <div key={openHour.days}>
      <p className="border-b border-amber-600 py-1 md:text-2xl">
        {openHour.days}
      </p>
      <div className="flex justify-between" key={openHour.days}>
        <p className="py-2 md:text-xl">{openHour.summer}</p>
        <p className="py-2 md:text-xl">{openHour.winter}</p>
      </div>
    </div>
  ));

  return (
    <>
      <Head>
        <title>Restaurang Napoli | Kontakta oss</title>
        <meta
          name="description"
          content="Välkommen till restaurang Napoli i Olofström. Kontakta oss"
        />
      </Head>
      <div className="min-h-screen relative dark:bg-dark-mode-blue dark:text-gray-200">
        <div className="hidden md:block fixed top-40 lg:top-40 right-0 z-50">
          <SocialMediaTab />
        </div>
        <section className="relative container mx-auto md:pt-10 mb-26 md:mb-60 px-2 md:px-8 flex flex-col md:flex-row md:justify-between">
          <div
            className="w-full py-1 mt-8  md:flex md:flex-col md:w-2/5 md:justify-center md:order-1"
            ref={headingsContainerRef}
          >
            <h1 className="text-el text-3xl text-amber-600">Napoli</h1>
            <p className="text-el mt-2 text-xl">
              Vi ordnar allt från den lilla festen till studentbjudning,
              företags eller födelsedagsfester. Kom in med dina önskemål så
              ordnar vi resten.
            </p>
            <p className="text-el text-xl text-amber-600 font-bold mt-2">
              Välkomna önskar Napoli med personal!
            </p>
          </div>
          <div
            className="relative z-10 mt-10 px-4 md:px-0 md:mt-0 dark:text-gray-200 bg-black text-gray-200 md:text-black md:bg-transparent w-full py-10 md:w-2/5 md:flex md:flex-col md:justify-center"
            ref={openHoursDivRef}
          >
            <h2 className="text-2xl italic tracking-wider md:text-4xl">
              Öppettider
            </h2>
            <h3 className="mt-2 text-amber-600 md:text-md">
              Dagarna och timmarna som vi har öppet
            </h3>

            <div className="flex justify-between py-2 text-xl">
              <p>Sommar</p>
              <p>Vinter</p>
            </div>
            {openHours}

            <div className="flex items-center justify-between mt-4 md:text-xl">
              <p className="font-bold uppercase ">Ring oss på</p>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-amber-600 mr-2"
                />
                <p className="font-bold">0454-917 01</p>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center md:absolute md:-bottom-40 md:-right-48 lg:-right-72 2xl:-right-96 w-full"
            ref={hamburgerImgRef}
          >
            <Image
              src={HamburgerImg}
              alt="girl eating pizza"
              width={400}
              height={350}
              priority
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
