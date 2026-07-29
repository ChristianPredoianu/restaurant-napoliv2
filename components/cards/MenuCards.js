'use client';

import { forwardRef, useImperativeHandle } from 'react';
import PizzaPriceClasses from '@/components/menu-sections/PizzaPriceClasses';
import PizzaSpecials from '@/components/menu-sections/PizzaSpecials';
import OtherMeals from '@/components/menu-sections/OtherMeals';
import { useScrollRefs } from '@/hooks/useScrollRefs';
import data from '../../data.json';

export default forwardRef(function MenuCards(props, ref) {
  const refs = useScrollRefs();

  useImperativeHandle(ref, () => refs, [refs]);

  return (
    <>
      <PizzaPriceClasses data={data.meals} pizzaRef={refs.pizzaRef} />
      <PizzaSpecials data={data.meals} />
      <OtherMeals
        data={data.meals}
        kebabRef={refs.kebabRef}
        saladRef={refs.saladRef}
        potatoesRef={refs.potatoesRef}
        hamburgerRef={refs.hamburgerRef}
        pastaRef={refs.pastaRef}
        plankRef={refs.plankRef}
        meatRef={refs.meatRef}
      />
    </>
  );
});
