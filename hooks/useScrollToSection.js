import { useCallback } from 'react';

export default function useScrollToSection() {
  const scrollToSection = useCallback((sectionRef) => {
    sectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return [scrollToSection];
}
