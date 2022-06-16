import { useEffect } from 'react';
import { useSwiperSlide } from 'swiper/react';

export default function SwiperContent({ img }) {
  const slide = useSwiperSlide();
  console.log(img);

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
      <img src={img.src} alt="slider image" />
    </div>
  );
}
