import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { verticalSwiperImages } from '@/utils/verticalSwiperImages';
import SwiperContent from '@/components/vertical-swiper/SwiperContent';

import { Autoplay, Pagination } from 'swiper';

const brandRed = '#991b1b';
export default function VerticalSwiper() {
  return (
    <div className='relative h-[28rem] md:h-[32rem] w-full'>
      <Swiper
        direction='vertical'
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='h-full w-full rounded-3xl overflow-hidden'
      >
        {verticalSwiperImages.map((item) => (
          <SwiperSlide key={item.id} className='!h-full !w-full'>
            <SwiperContent img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
