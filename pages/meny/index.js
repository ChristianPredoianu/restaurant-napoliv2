import { useRef } from 'react';
import { gsap } from 'gsap';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import useScrollToSection from '@/hooks/useScrollToSection';
import MenuPageHeadings from '@/components/headings/MenuPageHeadings';
import ScrollArrow from '@/components/ui/ScrollArrow';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import MenuSwiper from '@/components/menu-swiper/MenuSwiper';
import MenuCards from '@/components/cards/MenuCards';

export default function Meny() {
  const socialMediaTabRef = useRef(null);
  const headingRef = useRef(null);
  const headingContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const arrowDownRef = useRef(null);
  const ref = useRef({ headingRef, headingContainerRef });
  const kebabRef = useRef(null);
  const pizzaRef = useRef(null);
  const hamburgerRef = useRef(null);
  const meatRef = useRef(null);
  const saladRef = useRef(null);
  const plankRef = useRef(null);
  const pastaRef = useRef(null);
  const potatoesRef = useRef(null);
  const mealRefs = useRef({
    kebabRef,
    pizzaRef,
    hamburgerRef,
    meatRef,
    saladRef,
    pastaRef,
    plankRef,
    potatoesRef,
  });

  let q = gsap.utils.selector(headingContainerRef);
  const tl = gsap.timeline();

  const [scrollToSection] = useScrollToSection();

  function scrollToSectionHandler(text) {
    switch (text) {
      case 'Kebab':
        scrollToSection(kebabRef);
        break;
      case 'Pizza':
        scrollToSection(pizzaRef);
        break;
      case 'Hamburgare':
        scrollToSection(hamburgerRef);
        break;
      case 'Kött':
        scrollToSection(meatRef);
        break;
      case 'Sallad':
        scrollToSection(saladRef);
        break;
      case 'Pasta':
        scrollToSection(pastaRef);
        break;
      case 'Planka':
        scrollToSection(plankRef);
        break;
      case 'Potatis':
        scrollToSection(potatoesRef);
        break;
      case 'Fisk':
        scrollToSection(meatRef);
    }
  }

  let isAnimation;
  useIsomorphicLayoutEffect(() => {
    isAnimation = sessionStorage.getItem('isMenuHeadingsAnimated');
  }, []);

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

  return (
    <div className="relative overflow-hidden dark:bg-dark-mode-blue dark:text-gray-200">
      <div className="absolute md:fixed top-96 lg:top-40 right-0 z-30">
        <SocialMediaTab ref={socialMediaTabRef} />
      </div>
      <section className="relative container px-2 md:px-8 mx-auto">
        <MenuPageHeadings ref={ref} />
        <div className="flex justify-center pb-20" ref={arrowDownRef}>
          <ScrollArrow arrowDirection={'down'} ref={sliderRef} />
        </div>
        <div className="md:mt-20">
          <p className="text-center pb-8">
            Klicka på önskad kategori för att komma direkt till menyn
          </p>
          <MenuSwiper
            ref={sliderRef}
            onScrollToSection={scrollToSectionHandler}
          />
        </div>
        <div className="flex justify-center mt-40">
          <div className="text-center shadow-3xl w-full sm:w-2/3 md:w-2/5 lg:w-1/3 p-10 text-2xl text-red-700 dark:text-amber-600">
            <p className="animate-pulse">Obs! Nyhet</p>
            <p className="mt-2 animate-pulse">Nutella pizza 99:-</p>
          </div>
        </div>
        <div className="flex gap-10 flex-wrap justify-center mt-40">
          <MenuCards ref={mealRefs} />
        </div>
      </section>
    </div>
  );
}
