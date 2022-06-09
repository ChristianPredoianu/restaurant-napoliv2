import { useRef } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';
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
  const heroSectionRefs = { ctaContainerRef, spanRef, ctaBtnRef };

  const q = gsap.utils.selector(ctaContainerRef);
  const tl = gsap.timeline();

  let isAnimation;
  useIsomorphicLayoutEffect(() => {
    isAnimation = sessionStorage.getItem('isHeroAnimated');
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!isAnimation) {
      tl.from(q('.hero-el'), { x: 100, opacity: 0, duration: 1, stagger: 0.2 });
      tl.from(spanRef.current, {
        opacity: 0,
        x: 100,
      });
      tl.from(circleRef.current, {
        y: 100,
        x: 100,
        opacity: 0,
      });
      tl.from(socialMediaTabRef.current, {
        opacity: 0,
        x: 100,
      });
      tl.from(ctaBtnRef.current, {
        opacity: 0,
        onComplete: () => {
          sessionStorage.setItem('isHeroAnimated', true);
        },
      });
    }
    return () => tl.kill();
  }, []);

  return (
    <div className="relative overflow-hidden dark:bg-dark-mode-blue dark:text-gray-200">
      <div className="absolute top-10rem lg:top-40 right-0 z-50">
        <SocialMediaTab ref={socialMediaTabRef} />
      </div>
      <section className="min-h-screen mt-40 lg:mt-0 relative container px-8 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <HeroSection ref={heroSectionRefs} />
        <div>
          <Swiper />
        </div>
      </section>
      <Circle ref={circleRef} />
    </div>
  );
}
