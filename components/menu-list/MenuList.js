import { forwardRef } from 'react';
import MenuListItem from '@/components/menu-list/MenuListItem';

export default forwardRef(function MenuList({ data, heading, category }, ref) {
  console.log(ref);

  return (
    <div className="flex flex-col" ref={ref}>
      <h3 className="text-2xl md:text-3xl mt-10 uppercase text-center text-red-700 dark:text-amber-600">
        {category}
      </h3>
      <h4 className="mt-4 text-amber-700 dark:text-gray-400 font-bold text-md md:text-xl text-center">
        {heading}
      </h4>

      <ul className="mt-4">
        {data.map((menuItem) => (
          <MenuListItem key={menuItem.id} data={menuItem} />
        ))}
      </ul>
    </div>
  );
});
