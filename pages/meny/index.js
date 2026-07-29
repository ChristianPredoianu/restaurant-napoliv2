import { useRef } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useScrollToSection from '@/hooks/useScrollToSection';
import useScrollReveal from '@/hooks/useScrollReveal';
import useAnimationSessionStorage from '@/hooks/useAnimationSessionStorage';
import MenuPageHeadings from '@/components/headings/MenuPageHeadings';
import ScrollArrow from '@/components/ui/ScrollArrow';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import MenuSwiper from '@/components/menu-swiper/MenuSwiper';
import PulsingMenuCard from '@/components/cards/PulsingMenuCard';
import MenuCards from '@/components/cards/MenuCards';
import Footer from '@/components/footer/Footer';

export default function Meny() {
  const socialMediaTabRef = useRef(null);
  const headingRef = useRef(null);
  const headingContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const arrowDownRef = useRef(null);
  const ref = useRef({ headingRef, headingContainerRef });

  const menuCardsRef = useRef(null);

  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  let q = gsap.utils.selector(headingContainerRef);
  const tl = gsap.timeline();

  const [scrollToSection] = useScrollToSection();
  const [isAnimation] = useAnimationSessionStorage('isMenuHeadingsAnimated');

  useIsomorphicLayoutEffect(() => {
    if (!isAnimation) {
      tl.from(q('.animated-heading'), {
        duration: 1,
        y: -100,
        opacity: 0,
        stagger: 0.5,
        ease: 'Linear.easeNone',
        onComplete: () => {
          sessionStorage.setItem('isMenuHeadingsAnimated', true);
        },
      });
      tl.from(socialMediaTabRef.current, {
        opacity: 0,
        x: 100,
      });
      tl.from(sliderRef.current, {
        duration: 1,
        opacity: 0,
        y: 200,
      });
      tl.from(arrowDownRef.current, {
        opacity: 0,
      });
    }
    return () => tl.kill();
  }, []);

  function scrollToSectionHandler(text) {
    const sections = menuCardsRef.current;
    if (!sections) return;

    switch (text) {
      case 'Kebab':
        scrollToSection(sections.kebabRef);
        break;
      case 'Pizza':
        scrollToSection(sections.pizzaRef);
        break;
      case 'Hamburgare':
        scrollToSection(sections.hamburgerRef);
        break;
      case 'Kött':
        scrollToSection(sections.meatRef);
        break;
      case 'Sallad':
        scrollToSection(sections.saladRef);
        break;
      case 'Pasta':
        scrollToSection(sections.pastaRef);
        break;
      case 'Planka':
        scrollToSection(sections.plankRef);
        break;
      case 'Potatis':
        scrollToSection(sections.potatoesRef);
        break;
      case 'Fisk':
        scrollToSection(sections.meatRef);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Head>
        <title>Restaurang Napoli | Meny</title>
        <meta
          name='description'
          content='Välkommen till restaurang Napoli i Olofström. Meny'
        />
      </Head>
      <div className='relative py-10 overflow-hidden container mx-auto px-4 md:px-16'>
        <div className='hidden md:block fixed top-40 right-0 z-50'>
          <SocialMediaTab ref={socialMediaTabRef} />
        </div>
        <section className='relative pb-20' ref={sectionRef}>
          <MenuPageHeadings
            headingRef={headingRef}
            headingContainerRef={headingContainerRef}
          />
          <div className='flex justify-center pb-20' ref={arrowDownRef}>
            <ScrollArrow arrowDirection='down' ref={sliderRef} />
          </div>
          <div className='md:mt-20'>
            <MenuSwiper ref={sliderRef} onScrollToSection={scrollToSectionHandler} />
          </div>
          <div className='flex flex-col justify-center items-center md:items-stretch md:flex-row md:gap-x-8 py-20'>
            <PulsingMenuCard
              content={{
                paragraph1: 'Obs! Nyhet',
                paragraph2: 'Nutella pizza 130:-',
              }}
            />
            <PulsingMenuCard
              content={{
                paragraph1: 'Helgmeny',
                paragraph2: 'Lördag - Söndag: 11:00-18:00',
              }}
            />
          </div>
          <div className='flex gap-10 flex-wrap justify-center mt-20'>
            <MenuCards ref={menuCardsRef} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
