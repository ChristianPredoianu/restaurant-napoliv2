import MenuListItem from '@/components/menu-list/MenuListItem';

export default function MenuList({ data, subHeading, price }) {
  return (
    <>
      <h2 className="mt-2 text-sm text-center">{subHeading}</h2>
      <h3 className="py-4 text-red-700 text-center">{price}</h3>
      <ul>
        {data.map((menuItem) => (
          <MenuListItem data={menuItem} />
        ))}
      </ul>
    </>
  );
}
