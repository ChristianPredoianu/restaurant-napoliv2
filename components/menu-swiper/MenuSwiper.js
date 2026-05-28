import { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { menuSwiperContent } from '@/utils/menuSwiperContent';
import MenuSwiperContent from '@/components/menu-swiper/MenuSwiperContent';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';

export default forwardRef(function MenuSwiper({ onScrollToSection }, ref) {
  return (
    <div ref={ref} className='w-full'>
      {/* HEADER TEXT */}
      <div className='text-center mb-8'>
        <p className='text-sm md:text-base text-zinc-500 dark:text-zinc-400 tracking-wide'>
          Välj en kategori för att hoppa direkt till menyn
        </p>
      </div>

      <Swiper
        navigation
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='menuSwiper'
      >
        {menuSwiperContent.map((item) => (
          <SwiperSlide key={item.id}>
            <MenuSwiperContent item={item} onScrollToSection={onScrollToSection} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
