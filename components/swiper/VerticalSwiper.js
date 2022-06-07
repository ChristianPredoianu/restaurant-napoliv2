import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import PizzaImg from '@/assets/images/pizza1.png';
import HamburgerImg from '@/assets/images/hamburger1.png';
import KebabImg from '@/assets/images/kebab1.png';
import WineImg from '@/assets/images/wine1.png';
import Salad1Img from '@/assets/images/salad1.png';
import Salad2Img from '@/assets/images/salad2.png';
import SteakImg from '@/assets/images/steak1.png';
import SodaImg from '@/assets/images/soda1.png';
import BeerImg from '@/assets/images/beer1.png';
import SwiperContent from '@/components/swiper/SwiperContent';
import { Autoplay, Pagination } from 'swiper';

export default function VerticalSwiper() {
  const swiperSlide = useSwiperSlide();

  console.log(swiperSlide);
  const content = [
    { id: 1, img: PizzaImg },
    { id: 2, img: HamburgerImg },
    { id: 3, img: SteakImg },
    { id: 4, img: Salad1Img },
    { id: 5, img: WineImg },
    { id: 6, img: KebabImg },
    { id: 7, img: SodaImg },
    { id: 8, img: BeerImg },
    { id: 9, img: Salad2Img },
  ];

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
        {content.map((item) => (
          <SwiperSlide key={item.id}>
            {<SwiperContent img={item.img} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
