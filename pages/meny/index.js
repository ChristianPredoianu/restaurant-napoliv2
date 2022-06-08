import { useRef } from 'react';
import { gsap } from 'gsap';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import MenuPageHeadings from '@/components/headings/MenuPageHeadings';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import MenuSwiper from '@/components/menu-swiper/MenuSwiper';
import MenuCard from '@/components/cards/MenuCard';
import MenuList from '@/components/menu-list/MenuList';
import data from '../../data.json';

export default function Meny() {
  const socialMediaTabRef = useRef(null);
  const headingRef = useRef(null);
  const headingContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const ref = useRef({ headingRef, headingContainerRef });

  let q = gsap.utils.selector(headingContainerRef);
  const tl = gsap.timeline();

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
    }

    return () => tl.kill();
  }, []);

  const menuCard1 = (
    <MenuCard
      heading={'Pizzor'}
      subHeading={'Tomat och ost ingår på alla pizzor'}
    >
      <MenuList
        data={data.meals.priceclass1}
        priceRegular={'Prisklass 1/90:-'}
        priceFamily={'Familjepizza 220:-'}
      />

      <MenuList
        data={data.meals.priceclass2}
        priceRegular={'Prisklass 2/95:-'}
        priceFamily={'Familjepizza 230:-'}
      />
      <MenuList
        data={data.meals.priceclass3}
        priceRegular={'Prisklass 3/100:-'}
        priceFamily={'Familjepizza 240:-'}
      />
      <MenuList
        data={data.meals.priceclass4}
        priceRegular={'Prisklass 4/110:-'}
        priceFamily={'Familjepizza 270:-'}
      />
    </MenuCard>
  );

  const menuCard2 = (
    <MenuCard
      heading={'Pizzor'}
      subHeading={'Tomat och ost ingår på alla pizzor'}
    >
      <MenuList data={data.meals.kebabPizzas} category={'Kebabpizzor'} />
      <MenuList
        data={data.meals.specialPizzas}
        category={'Specialpizzor'}
        priceRegular={'Pris 130:-'}
        priceFamily={'Familjepizza 300:-. Med mozzarellaost'}
      />
      <MenuList
        data={data.meals.plankPizzas}
        category={'Plankpizzor'}
        priceRegular={'Pris 130:-'}
        priceFamily={'Familjepizza 300:-. Med mozzarellaost'}
      />
      <MenuList
        data={data.meals.americanPanPizzas}
        category={'America Pan Pizza'}
        priceRegular={'Pris 130:-'}
        priceFamily={'Familjepizza 300:-. Med mozzarellaost'}
      />
      <MenuList
        data={data.meals.italianPizzas}
        category={'Italienska Pizzor'}
        priceRegular={'Pris 130:-'}
        priceFamily={'Familjepizza 300:-. Med mozzarellaost'}
      />
    </MenuCard>
  );

  return (
    <div className="relative overflow-hidden dark:bg-dark-mode-blue dark:text-gray-200">
      <div className="absolute md:fixed top-96 lg:top-40 right-0 z-30">
        <SocialMediaTab ref={socialMediaTabRef} />
      </div>
      <main className="pt-40 lg:mt-0 relative container px-2 md:px-8 mx-auto">
        <MenuPageHeadings ref={ref} />
        <div className="md:mt-20">
          <MenuSwiper ref={sliderRef} />
        </div>
        <div className="flex flex-col gap-y-20 lg:gap-y-0 lg:flex-row justify-between mt-60">
          {menuCard1}
          {menuCard2}
        </div>
      </main>
    </div>
  );
}
