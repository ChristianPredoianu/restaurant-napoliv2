import { forwardRef } from 'react';
import MenuCard from '@/components/cards/MenuCard';
import MenuList from '@/components/menu-list/MenuList';
import data from '../../data.json';

export default forwardRef(function MenuCards({}, ref) {
  const menuCard1 = (
    <MenuCard heading={'Pizzor'} subHeading={'Tomat & ost ingår på alla pizzor'}>
      <MenuList
        data={data.meals.priceclass1}
        heading={'Prisklass 1/110:- Familjepizza 280:-'}
        ref={ref.current.pizzaRef}
      />
      <MenuList
        data={data.meals.priceclass2}
        heading={'Prisklass 2/115:- Familjepizza 290:-'}
      />
      <MenuList
        data={data.meals.priceclass3}
        heading={'Prisklass 3/125:- Familjepizza 300:-'}
      />
      <MenuList
        data={data.meals.priceclass4}
        heading={'Prisklass 4/135:- Familjepizza 310:-'}
      />
    </MenuCard>
  );

  const menuCard2 = (
    <MenuCard heading={'Pizzor'} subHeading={'Tomat & ost ingår på alla pizzor'}>
      <MenuList data={data.meals.kebabPizzas} category={'Kebabpizzor'} />
      <MenuList
        data={data.meals.specialPizzas}
        heading={'Pris 150:- Familjepizza 330:- Med mozzarellaost'}
        category={'Specialpizzor'}
      />
      <MenuList
        data={data.meals.plankPizzas}
        heading={'Pris 140:- Familjepizza 320:-'}
        category={'Plankpizzor'}
      />
      <MenuList
        data={data.meals.americanPanPizzas}
        heading={'Small 130:- 1 pers. Medium 160:- 1-2 pers. Large 330:- 2-3 pers'}
        category={'American Pan Pizza'}
      />
      <MenuList data={data.meals.italianPizzas} category={'Napolitanska Pizzor'} />
      <div className='block w-full mt-20 lg:mt-40'>
        <img src={'/girl-pizza.jpg'} alt='girl eating pizza' />
      </div>
    </MenuCard>
  );

  const menuCard3 = (
    <MenuCard>
      <MenuList
        data={data.meals.kebabChicken}
        heading={'Tomat, lök och gurka ingår.'}
        category={'Kebab, kyckling, falafel & taco 125:-'}
        ref={ref.current.kebabRef}
      />
      <MenuList
        data={data.meals.salads}
        category={'Sallader 125:-'}
        ref={ref.current.saladRef}
      />
      <MenuList
        data={data.meals.bakedPotatoes}
        category={'Bakad Potatis 125:-'}
        ref={ref.current.potatoesRef}
      />
      <MenuList
        data={data.meals.hamburgers}
        category={'Högrevsburgare'}
        ref={ref.current.hamburgerRef}
      />
      <MenuList data={data.meals.pasta} category={'Pasta'} ref={ref.current.pastaRef} />
      <MenuList data={data.meals.plank} category={'Planka'} ref={ref.current.plankRef} />
      <MenuList
        data={data.meals.meatFish}
        category={'Kött & Fiskrätter'}
        heading={'Välj mellan kokt, stekt potatis eller pommes.'}
        ref={ref.current.meatRef}
      />
      <div className='block w-full mt-20 lg:mt-40'></div>
    </MenuCard>
  );

  return (
    <>
      {menuCard1}
      {menuCard2}
      {menuCard3}
    </>
  );
});
