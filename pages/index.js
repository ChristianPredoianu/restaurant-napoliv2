import { useRef } from 'react';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import SocialMediaTab from '@/components/ui/SocialMediaTab';
import Circle from '@/components/ui/Circle';
import Swiper from '@/components/swiper/VerticalSwiper';

export default function Home() {
  const ctaContainerRef = useRef(null);
  const ctaBtnRef = useRef(null);
  const spanRef = useRef(null);
  const circleRef = useRef(null);
  const socialMediaTabRef = useRef(null);

  let isAnimation;
  useIsomorphicLayoutEffect(() => {
    isAnimation = sessionStorage.getItem('isHeroAnimated');
  }, []);

  const q = gsap.utils.selector(ctaContainerRef);
  const tl = gsap.timeline();

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
  }, []);

  return (
    <div className="relative overflow-hidden dark:bg-dark-mode-blue dark:text-gray-200">
      <div className="absolute top-10rem lg:top-40 right-0 z-50">
        <SocialMediaTab ref={socialMediaTabRef} />
      </div>
      <section className="min-h-screen mt-40 lg:mt-0 relative container px-8 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="py-4" ref={ctaContainerRef}>
          <h1 className="hero-el text-xl lg:text-3xl font-semibold filter drop-shadow-2xl">
            Välkommen till
            <span className="hero-el block text-4xl lg:text-6xl py-2 font-bold">
              Restaurang{' '}
              <span
                className="text-amber-500 filter drop-shadow-3xl"
                ref={spanRef}
              >
                Napoli
              </span>
            </span>
          </h1>
          <div className="mt-2">
            <div className="flex items-center text-xl lg:text-2xl">
              <FontAwesomeIcon icon={faLocationPin} className="hero-el" />
              <p className="hero-el ml-4">
                Östra Storgatan 5,{' '}
                <span className="block">293 34 Olofström</span>
              </p>
            </div>
            <div className="flex items-center mt-4 text-xl lg:text-2xl">
              <FontAwesomeIcon icon={faPhone} className="hero-el text-xl" />
              <p className="hero-el ml-4">0454-917 01</p>
            </div>
          </div>
          <button
            className="mt-8 bg-amber-600 text-white tracking-widest uppercase py-4 px-8 rounded-sm drop-shadow-3xl"
            ref={ctaBtnRef}
          >
            Vår Meny
          </button>
        </div>
        <div>
          <Swiper />
        </div>
      </section>
      <Circle ref={circleRef} />
    </div>
  );
}
