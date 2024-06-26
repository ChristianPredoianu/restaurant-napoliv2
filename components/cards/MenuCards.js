import { forwardRef } from 'react';
import MenuCard from '@/components/cards/MenuCard';
import MenuList from '@/components/menu-list/MenuList';
/* import GirlPizzaImg from '@/assets/images/girl-pizza.jpg'; */
import data from '../../data.json';

export default forwardRef(function MenuCards({}, ref) {
  const menuCard1 = (
    <MenuCard heading={'Pizzor'} subHeading={'Tomat & ost ingår på alla pizzor'}>
      <MenuList
        data={data.meals.priceclass1}
        heading={'Prisklass 1/100:- Familjepizza 250:-'}
        ref={ref.current.pizzaRef}
      />
      <MenuList
        data={data.meals.priceclass2}
        heading={'Prisklass 2/105:- Familjepizza 260:-'}
      />
      <MenuList
        data={data.meals.priceclass3}
        heading={'Prisklass 3/110:- Familjepizza 270:-'}
      />
      <MenuList
        data={data.meals.priceclass4}
        heading={'Prisklass 4/120:- Familjepizza 280:-'}
      />
    </MenuCard>
  );

  const menuCard2 = (
    <MenuCard heading={'Pizzor'} subHeading={'Tomat & ost ingår på alla pizzor'}>
      <MenuList data={data.meals.kebabPizzas} category={'Kebabpizzor'} />
      <MenuList
        data={data.meals.specialPizzas}
        heading={'Pris 140:- Familjepizza 300:- Med mozzarellaost'}
        category={'Specialpizzor'}
      />
      <MenuList
        data={data.meals.plankPizzas}
        heading={'Pris 130:- Familjepizza 300:-'}
        category={'Plankpizzor'}
      />
      <MenuList
        data={data.meals.americanPanPizzas}
        heading={'Small 120:- 1 pers. Medium 160:- 1-2 pers. Large 300:- 2-3 pers'}
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
        category={'Kebab, kyckling, falafel & taco 115:-'}
        ref={ref.current.kebabRef}
      />
      <MenuList
        data={data.meals.salads}
        category={'Sallader 115:-'}
        ref={ref.current.saladRef}
      />
      <MenuList
        data={data.meals.bakedPotatoes}
        category={'Bakad Potatis 115:-'}
        ref={ref.current.potatoesRef}
      />
      <MenuList
        data={data.meals.hamburgers}
        category={'Hamburgare'}
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
