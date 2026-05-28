import { useRef } from 'react';
import Head from 'next/head';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useAnimationSessionStorage from '@/hooks/useAnimationSessionStorage';
import { gsap } from 'gsap';
import useScrollReveal from '@/hooks/useScrollReveal';
import HeroSection from '@/components/HeroSection';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import Swiper from '@/components/vertical-swiper/VerticalSwiper';
import Circle from '@/components/ui/Circle';

export default function Home() {
  const ctaContainerRef = useRef(null);
  const ctaBtnRef = useRef(null);
  const spanRef = useRef(null);
  const circleRef = useRef(null);
  const socialMediaTabRef = useRef(null);
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef);

  const heroSectionRefs = { ctaContainerRef, spanRef, ctaBtnRef };

  const q = gsap.utils.selector(ctaContainerRef);
  const tl = gsap.timeline();

  const [isAnimation] = useAnimationSessionStorage('isHeroAnimated');

  useIsomorphicLayoutEffect(() => {
    if (!isAnimation) {
      tl.from(q('.hero-el'), { x: 100, opacity: 0, duration: 1, stagger: 0.2 })
        .from(spanRef.current, { opacity: 0, x: 100 })
        .from(circleRef.current, { y: 100, x: 100, opacity: 0 })
        .from(socialMediaTabRef.current, { opacity: 0, x: 100 })
        .from(ctaBtnRef.current, {
          opacity: 0,
          onComplete: () => {
            sessionStorage.setItem('isHeroAnimated', 'true');
          },
        });
    }

    return () => tl.kill();
  }, []);

  return (
    <>
      <Head>
        <title>Restaurang Napoli | Olofström</title>
        <meta
          name='description'
          content='Välkommen till restaurang Napoli i Olofström på Östra Storgatan 5.'
        />
      </Head>

      <div className='relative overflow-hidden dark:bg-dark-mode-blue dark:text-gray-200'>
        {/* Social tab */}
        <div className='fixed top-1/2 right-0 z-50 -translate-y-1/2'>
          <SocialMediaTab ref={socialMediaTabRef} />
        </div>

        {/* MAIN LAYOUT FIX */}
        <section
          className='
          container mx-auto px-4 md:px-16
            relative
            flex
            min-h-screen
            w-full
            flex-col
            lg:flex-row
            items-stretch
            gap-10
            py-10 lg:py-20
          '
        >
          {/* HERO */}
          <div className='w-full lg:w-1/2 flex items-center' ref={sectionRef}>
            <HeroSection ref={heroSectionRefs} />
          </div>

          {/* SWIPER */}
          <div className='w-full lg:w-1/2 flex items-center justify-center'>
            <Swiper />
          </div>
        </section>

        {/*      <Circle ref={circleRef} /> */}
      </div>
    </>
  );
}
