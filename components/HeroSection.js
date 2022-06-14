import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';

export default forwardRef(function HeroSection({}, ref) {
  const primaryHeading = (
    <h1 className="hero-el text-xl lg:text-3xl font-semibold filter drop-shadow-2xl">
      Välkommen till
      <span className="hero-el block text-4xl lg:text-6xl py-2 font-bold">
        Restaurang{' '}
        <span
          className="text-amber-500 filter drop-shadow-3xl"
          ref={ref.spanRef}
        >
          Napoli
        </span>
      </span>
    </h1>
  );

  const info = (
    <>
      <div className="flex items-center mt-2 text-xl lg:text-2xl">
        <FontAwesomeIcon icon={faLocationPin} className="hero-el" />
        <p className="hero-el ml-4">
          Östra Storgatan 5, <span className="block">293 34 Olofström</span>
        </p>
      </div>
      <div className="flex items-center mt-4 text-xl lg:text-2xl">
        <FontAwesomeIcon icon={faPhone} className="hero-el text-xl" />
        <p className="hero-el ml-4">0454-917 01</p>
      </div>
    </>
  );

  const ctaBtn = (
    <button
      className="mt-8 bg-amber-600 text-white tracking-widest uppercase py-4 px-8 rounded-sm drop-shadow-3xl hover:bg-amber-700 hover:transition hover:duration-300 hover:translate-y-1"
      ref={ref.ctaBtnRef}
    >
      Vår Meny
    </button>
  );

  return (
    <div className="py-4" ref={ref.ctaContainerRef}>
      {primaryHeading}
      {info}
      {ctaBtn}
    </div>
  );
});
