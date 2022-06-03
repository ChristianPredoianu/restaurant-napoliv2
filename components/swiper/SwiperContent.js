import Image from 'next/image';

export default function SwiperContent({ img }) {
  return (
    <div className="block w-115 md:w-120">
      <Image
        src={img}
        alt="slider image"
        width={850}
        height={800}
        layout="responsive"
        priority
      />
    </div>
  );
}
