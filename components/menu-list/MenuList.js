import MenuListItem from '@/components/menu-list/MenuListItem';

export default function MenuList({
  data,
  priceRegular,
  priceFamily,
  category,
}) {
  console.log(data);
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl text-center mt-8 text-red-500">{category}</h3>
      <h4 className="mt-10 text-red-500 font-bold text-xl text-center">
        {priceRegular}
        <span className="block">{priceFamily}</span>
      </h4>

      <ul className="mt-4">
        {data.map((menuItem) => (
          <MenuListItem key={menuItem.id} data={menuItem} />
        ))}
      </ul>
    </div>
  );
}
