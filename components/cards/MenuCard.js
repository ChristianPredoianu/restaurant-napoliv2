import MenuList from '@/components/menu-list/MenuList';
import data from '../../data.json';
export default function MenuCard({ heading }) {
  console.log(data + 'menu');
  return (
    <div className="shadow-2xl px-4">
      <h1 className="text-4xl uppercase text-center text-red-700">{heading}</h1>
      <MenuList
        data={data.pizza.priceclass1}
        subHeading={'Tomat & ost ingår på alla pizzor'}
        price={'Prisklass 1/90:-, Familjepizza 220:-'}
      />

      <MenuList
        data={data.pizza.priceclass2}
        price={'Prisklass 2/95:-, Familjepizza 230:-'}
      />
    </div>
  );
}
