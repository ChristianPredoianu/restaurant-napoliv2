import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollReveal – Modern scroll animations with multiple effects
 * @param {Object|React.RefObject} ref – Ref or config object
 * @param {string} effect – 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight' | 'blurIn' | 'flipIn'
 * @param {number} duration – Animation duration (default 0.8)
 * @param {number} delay – Delay in seconds (default 0)
 * @param {number} stagger – Stagger time between child elements (default 0)
 * @param {string} start – ScrollTrigger start (default 'top 85%')
 * @param {boolean} scrub – Whether to scrub (default false)
 * @param {number} offset – Distance to move (default 40)
 */
export default function useScrollReveal(ref, options = {}) {
  useEffect(() => {
    if (!ref?.current) return;

    const {
      effect = 'fadeUp',
      duration = 0.8,
      delay = 0,
      stagger = 0,
      start = 'top 85%',
      scrub = false,
      offset = 40,
    } = options;

    // Preset animations
    const getFromVars = () => {
      switch (effect) {
        case 'fadeIn':
          return { opacity: 0 };
        case 'scaleIn':
          return { opacity: 0, scale: 0.8 };
        case 'slideLeft':
          return { opacity: 0, x: offset };
        case 'slideRight':
          return { opacity: 0, x: -offset };
        case 'blurIn':
          return { opacity: 0, filter: 'blur(10px)' };
        case 'flipIn':
          return { opacity: 0, rotationX: -90, transformOrigin: 'top' };
        case 'fadeUp':
        default:
          return { opacity: 0, y: offset };
      }
    };

    const fromVars = getFromVars();
    const toVars = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      rotationX: 0,
      duration,
      delay,
      ease: 'power3.out',
      stagger: stagger ? { each: stagger, from: 'start' } : 0,
    };

    // If scrub, attach to scroll position
    if (scrub) {
      gsap.fromTo(ref.current, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: ref.current,
          start,
          end: 'bottom 20%',
          scrub: 1,
        },
      });
    } else {
      gsap.fromTo(ref.current, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: ref.current,
          start,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === ref.current) trigger.kill();
      });
    };
  }, [ref, options]);
}
