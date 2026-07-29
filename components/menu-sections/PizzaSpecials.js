import Image from 'next/image';
import MenuCard from '@/components/cards/MenuCard';
import MenuList from '@/components/menu-list/MenuList';
import RecommendationBanner from '@/components/ui/RecommendationBanner';

const SUBHEADING = 'Tomat & ost ingår på alla pizzor';

export default function PizzaSpecials({ data }) {
  return (
    <MenuCard heading='Övriga Pizzor' subHeading={SUBHEADING}>
      <MenuList data={data.kebabPizzas} category='Kebabpizzor' />
      <MenuList
        data={data.specialPizzas}
        heading='Pris 160:- Familjepizza 360:- Med mozzarellaost'
        category='Specialpizzor'
      />
      <MenuList
        data={data.plankPizzas}
        heading='Pris 150:- Familjepizza 350:-'
        category='Plankpizzor'
      />
      <MenuList
        data={data.americanPanPizzas}
        heading='Small 140:- 1 pers. Medium 170:- 1-2 pers. Large 340:- 2-3 pers'
        category='American Pan Pizza'
      />
      <MenuList data={data.italianPizzas} category='Napolitanska Pizzor' />

      <RecommendationBanner text='Vi rekommenderar vitt eller rött vin till våra napolitanska pizzor 🍷' />

      <div className='block w-full mt-20 lg:mt-40'>
        <Image
          src='/girl-pizza.jpg'
          alt='girl eating pizza'
          width={800}
          height={600}
          className='rounded-2xl shadow-lg object-cover w-full'
        />
      </div>
    </MenuCard>
  );
}
