import { useRef } from 'react';

export function useScrollRefs() {
  return {
    pizzaRef: useRef(null),
    kebabRef: useRef(null),
    saladRef: useRef(null),
    potatoesRef: useRef(null),
    hamburgerRef: useRef(null),
    pastaRef: useRef(null),
    plankRef: useRef(null),
    meatRef: useRef(null),
  };
}
