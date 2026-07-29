export default function SwiperContent({ img }) {
  return (
    <div className='relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-xl'>
      <img
        src={img.src}
        alt='slider image'
        className='h-full w-full object-cover scale-105 hover:scale-110 transition duration-700'
      />

      {/* red glow overlay */}
      <div
        className='absolute inset-0 opacity-20 dark:opacity-10'
        style={{
          background: `radial-gradient(circle at center, #991b1b 0%, transparent 50%)`,
        }}
      />
    </div>
  );
}
