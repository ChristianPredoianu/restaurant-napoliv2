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
    <div className="swiper-container" ref={ref}>
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {menuSwiperContent.map((item) => (
          <SwiperSlide key={item.id}>
            <MenuSwiperContent
              item={item}
              onScrollToSection={onScrollToSection}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
