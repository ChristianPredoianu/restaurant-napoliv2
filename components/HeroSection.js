import { forwardRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';

const brandRed = '#991b1b';

export default forwardRef(function HeroSection(_, ref) {
  return (
    <section className='relative overflow-hidden py-20 lg:py-32'>
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/restaurant-bg.jpg')] bg-cover bg-center scale-110" />

      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/90' />

      {/* Glow */}
      <div
        className='absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]'
        style={{ backgroundColor: brandRed, opacity: 0.25 }}
      />

      {/* Content */}
      <div className='relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div
          ref={ref?.ctaContainerRef}
          className='max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 sm:p-10 lg:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.6)]'
        >
          {/* Label */}
          <p className='hero-el uppercase tracking-[0.35em] text-xs sm:text-sm text-zinc-300'>
            Napoli Restaurang
          </p>

          {/* Title */}
          <h1 className='hero-el mt-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-[1.05] text-white'>
            Restaurang{' '}
            <span
              ref={ref?.spanRef}
              style={{ color: brandRed }}
              className='drop-shadow-[0_0_25px_rgba(153,27,27,0.6)]'
            >
              Napoli
            </span>
          </h1>

          {/* Description */}
          <p className='hero-el mt-6 max-w-lg text-base sm:text-lg lg:text-xl text-zinc-200 leading-relaxed'>
            Pizza, pasta och grillrätter serverade i hjärtat av Olofström.
          </p>

          {/* Info */}
          <div className='mt-10 space-y-6'>
            {/* Address */}
            <div className='flex items-start gap-4'>
              <div style={{ color: brandRed }} className='mt-1'>
                <FontAwesomeIcon icon={faLocationPin} className='hero-el' />
              </div>

              <div>
                <p className='hero-el font-semibold text-white'>Östra Storgatan 5</p>
                <p className='hero-el text-zinc-300'>293 34 Olofström</p>
              </div>
            </div>

            {/* Phone */}
            <div className='flex items-center gap-4'>
              <div style={{ color: brandRed }}>
                <FontAwesomeIcon icon={faPhone} className='hero-el' />
              </div>

              <p className='hero-el font-semibold text-white tracking-wide'>
                0454-917 01
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className='mt-10 text-white tracking-wide'>
            <Link
              href='/meny'
              ref={ref?.ctaBtnRef}
              style={{ backgroundColor: brandRed }}
              className='inline-flex items-center justify-center rounded-2xl px-8 py-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]'
            >
              Se Menyn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});
