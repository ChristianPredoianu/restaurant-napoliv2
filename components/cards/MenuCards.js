import { forwardRef } from 'react';
import MenuCard from '@/components/cards/MenuCard';
import MenuList from '@/components/menu-list/MenuList';
import data from '../../data.json';

export default forwardRef(function MenuCards({}, ref) {
  const menuCard1 = (
    <>
      <MenuCard heading={'Pizzor'} subHeading={'Tomat & ost ingår på alla pizzor'}>
        <div className='flex items-start justify-between gap-4 py-3'>
          {/* LEFT SIDE */}
          <div>
            <h3 className='text-lg md:text-xl font-bold text-zinc-900 dark:text-white'>
              Margarita
            </h3>

            <h4 className='mt-1 text-sm md:text-base text-zinc-500 dark:text-zinc-400'>
              Tomatsås, ost, oregano
            </h4>
          </div>

          {/* RIGHT SIDE - PRICES */}
          <div className='text-right whitespace-nowrap'>
            <p className='text-sm text-zinc-500 dark:text-zinc-400'>Vanlig</p>
            <p className='text-lg font-bold text-red-700'>120:-</p>

            <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>Familje</p>
            <p className='text-lg font-bold text-red-700'>280:-</p>
          </div>
        </div>

        {/* divider */}
        <div className='h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/10 to-transparent my-3' />

        {/* subtle divider */}
        <div className='h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/10 to-transparent my-3' />
        <MenuList
          data={data.meals.priceclass1}
          heading={'Prisklass 1/125:- Familjepizza 305:-'}
          ref={ref.current.pizzaRef}
        />
        <MenuList
          data={data.meals.priceclass2}
          heading={'Prisklass 2/135:- Familjepizza 330:-'}
        />
        <MenuList
          data={data.meals.priceclass3}
          heading={'Prisklass 3/145:- Familjepizza 345:-'}
        />
      </MenuCard>
    </>
  );

  const menuCard2 = (
    <MenuCard heading={'Pizzor'} subHeading={'Tomat & ost ingår på alla pizzor'}>
      <MenuList data={data.meals.kebabPizzas} category={'Kebabpizzor'} />
      <MenuList
        data={data.meals.specialPizzas}
        heading={'Pris 160:- Familjepizza 360:- Med mozzarellaost'}
        category={'Specialpizzor'}
      />
      <MenuList
        data={data.meals.plankPizzas}
        heading={'Pris 150:- Familjepizza 350:-'}
        category={'Plankpizzor'}
      />
      <MenuList
        data={data.meals.americanPanPizzas}
        heading={'Small 140:- 1 pers. Medium 170:- 1-2 pers. Large 340:- 2-3 pers'}
        category={'American Pan Pizza'}
      />
      <MenuList data={data.meals.italianPizzas} category={'Napolitanska Pizzor'} />

      <div className='mt-6 flex justify-center'>
        <p
          className='
      max-w-xl
      text-center
      text-sm md:text-base
      italic
      text-zinc-600 dark:text-zinc-400
      px-6 py-3
      border border-zinc-200 dark:border-zinc-700
      rounded-full
      bg-white/60 dark:bg-black/20
      backdrop-blur-md
      shadow-sm
    '
        >
          Vi rekommenderar vitt eller rött vin till våra napolitanska pizzor 🍷
        </p>
      </div>

      <div className='block w-full mt-20 lg:mt-40'>
        <img
          src='/girl-pizza.jpg'
          alt='girl eating pizza'
          className='rounded-2xl shadow-lg object-cover w-full'
        />
      </div>
    </MenuCard>
  );

  const menuCard3 = (
    <MenuCard>
      <MenuList
        data={data.meals.kebabChicken}
        heading={'Tomat, lök och gurka ingår.'}
        category={'Kebab, kyckling, falafel & taco 135:-'}
        ref={ref.current.kebabRef}
      />
      <MenuList
        data={data.meals.salads}
        category={'Sallader 135:-'}
        ref={ref.current.saladRef}
      />
      <MenuList
        data={data.meals.bakedPotatoes}
        category={'Bakad Potatis 135:-'}
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
