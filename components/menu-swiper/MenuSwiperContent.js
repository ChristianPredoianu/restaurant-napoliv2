import { useState } from 'react';

const brandRed = '#991b1b';

export default function MenuSwiperContent({ item, onScrollToSection }) {
  const { img, text } = item;
  const [hover, setHover] = useState(false);

  function scrollToSectionHandler() {
    onScrollToSection(text);
  }

  return (
    <div
      onClick={scrollToSectionHandler}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className='relative group w-full h-64 md:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:scale-[1.02]'
    >
      {/* IMAGE */}
      <img
        src={img}
        alt={text}
        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
      />

      {/* DARK OVERLAY (clean + subtle) */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />

      {/* BORDER GLOW ON HOVER */}
      <div
        className='absolute inset-0 ring-0 group-hover:ring-2 transition-all duration-300'
        style={{
          boxShadow: hover ? `0 0 25px ${brandRed}` : 'none',
        }}
      />

      {/* TEXT */}
      <div className='absolute bottom-0 w-full p-5 z-10'>
        <p className='text-white text-xl md:text-2xl font-semibold tracking-wide'>
          {text}
        </p>

        {/* underline accent */}
        <div
          className='mt-2 h-[2px] w-12 transition-all duration-300 group-hover:w-20'
          style={{ backgroundColor: brandRed }}
        />
      </div>

      {/* subtle glow dot */}
      <div
        className='absolute top-4 right-4 w-2 h-2 rounded-full opacity-70 group-hover:opacity-100'
        style={{ backgroundColor: brandRed }}
      />
    </div>
  );
}
