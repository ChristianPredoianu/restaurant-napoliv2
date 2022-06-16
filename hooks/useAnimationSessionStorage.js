import { useState } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

export default function useAnimationSessionStorage(storageItem) {
  const [isAnimation, setIsAnimation] = useState(
    sessionStorage.getItem(storageItem)
  );

  useIsomorphicLayoutEffect(() => {
    setIsAnimation(sessionStorage.getItem(storageItem));
  }, [storageItem]);

  return [isAnimation];
}
