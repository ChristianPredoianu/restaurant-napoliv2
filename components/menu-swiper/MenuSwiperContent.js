import Image from 'next/image';

export default function MenuSwiperContent({ item }) {
  const { img, text } = item;

  return (
    <div className="block w-full bg-cover bg-center h-full relative  transition duration-300 hover:opacity-80 cursor-pointer">
      <div className="absolute inset-0 bg-hero-overlay z-20 flex items-center justify-center ">
        <p className="text-gray-200 text-3xl tracking-widest">{text}</p>
      </div>
      <Image src={img} alt="food" layout="fill" objectFit="cover" priority />
    </div>
  );
}
