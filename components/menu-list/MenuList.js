import { forwardRef } from 'react';
import MenuListItem from '@/components/menu-list/MenuListItem';

export default forwardRef(function MenuList({ data, heading, category }, ref) {
  // Normalize object → array safely
  const items = Array.isArray(data) ? data : Object.values(data || {}).flat();

  return (
    <div ref={ref} className='w-full flex flex-col py-10'>
      {/* CATEGORY TITLE */}
      <h3 className='text-3xl md:text-4xl font-black uppercase text-center tracking-widest text-zinc-900 dark:text-red-900'>
        {category}
      </h3>

      {/* SUBTITLE */}
      <h4 className='mt-3 text-sm md:text-lg text-center text-red-900 font-medium'>
        {heading}
      </h4>

      {/* LIST */}
      <ul className='mt-10 space-y-3'>
        {items.map((menuItem) => (
          <MenuListItem key={`${menuItem.id}-${menuItem.name}`} data={menuItem} />
        ))}
      </ul>
    </div>
  );
});
