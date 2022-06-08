import { useEffect } from 'react';
import Image from 'next/image';
import { useSwiperSlide } from 'swiper/react';

export default function SwiperContent({ img }) {
  const slide = useSwiperSlide();

  useEffect(() => {
    if (slide.isActive) {
      const swiperSlides = document.querySelectorAll('.swiper-slide');
      swiperSlides.forEach((slide) => {
        slide.classList.add('dark:bg-dark-mode-blue');
      });
    }
  }, [slide]);

  return (
    <div className="block w-115 md:w-120">
      <Image
        src={img}
        alt="slider image"
        width={850}
        height={800}
        layout="responsive"
        priority
      />
    </div>
  );
}
