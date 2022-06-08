import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { verticalSwiperImages } from '@/utils/verticalSwiperImages';
import SwiperContent from '@/components/vertical-swiper/SwiperContent';
import { Autoplay, Pagination } from 'swiper';

export default function VerticalSwiper() {
  return (
    <div className="swiper-container">
      <Swiper
        direction={'vertical'}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {verticalSwiperImages.map((item) => (
          <SwiperSlide key={item.id}>
            {<SwiperContent img={item.img} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
