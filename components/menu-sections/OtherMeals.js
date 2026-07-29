import MenuCard from '@/components/cards/MenuCard';
import MenuList from '@/components/menu-list/MenuList';

export default function OtherMeals({
  data,
  kebabRef,
  saladRef,
  potatoesRef,
  hamburgerRef,
  pastaRef,
  plankRef,
  meatRef,
}) {
  return (
    <MenuCard>
      <MenuList
        data={data.kebabChicken}
        heading='Tomat, lök och gurka ingår.'
        category='Kebab, kyckling, falafel & taco 135:-'
        ref={kebabRef}
      />
      <MenuList data={data.salads} category='Sallader 135:-' ref={saladRef} />
      <MenuList
        data={data.bakedPotatoes}
        category='Bakad Potatis 135:-'
        ref={potatoesRef}
      />
      <MenuList data={data.hamburgers} category='Högrevsburgare' ref={hamburgerRef} />
      <MenuList data={data.pasta} category='Pasta' ref={pastaRef} />
      <MenuList data={data.plank} category='Planka' ref={plankRef} />
      <MenuList
        data={data.meatFish}
        category='Kött & Fiskrätter'
        heading='Välj mellan kokt, stekt potatis eller pommes.'
        ref={meatRef}
      />
      <div className='block w-full mt-20 lg:mt-40' />
    </MenuCard>
  );
}
