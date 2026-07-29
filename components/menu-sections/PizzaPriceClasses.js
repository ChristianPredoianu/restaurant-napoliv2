import MenuCard from '@/components/cards/MenuCard';
import MenuList from '@/components/menu-list/MenuList';

const SUBHEADING = 'Tomat & ost ingår på alla pizzor';

export default function PizzaPriceClasses({ data, pizzaRef }) {
  return (
    <MenuCard heading='Pizzor' subHeading={SUBHEADING}>
      <div className='flex items-start justify-between gap-4 py-3'>
        <div>
          <h3 className='text-lg md:text-xl font-bold text-zinc-900 dark:text-white'>
            Margarita
          </h3>
          <h4 className='mt-1 text-sm md:text-base text-zinc-500 dark:text-zinc-400'>
            Tomatsås, ost, oregano
          </h4>
        </div>
        <div className='text-right whitespace-nowrap'>
          <p className='text-sm text-zinc-500 dark:text-zinc-400'>Vanlig</p>
          <p className='text-lg font-bold text-red-700'>120:-</p>
          <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>Familje</p>
          <p className='text-lg font-bold text-red-700'>300:-</p>
        </div>
      </div>

      <div className='h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/10 to-transparent my-3' />

      <MenuList
        data={data.priceclass1}
        heading='Prisklass 1/125:- Familjepizza 325:-'
        ref={pizzaRef}
      />
      <MenuList data={data.priceclass2} heading='Prisklass 2/135:- Familjepizza 335:-' />
      <MenuList data={data.priceclass3} heading='Prisklass 3/145:- Familjepizza 345:-' />
    </MenuCard>
  );
}
