export default function Loader() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-white/70 dark:bg-black/60 backdrop-blur-sm z-50'>
      <div className='relative flex items-center justify-center'>
        {/* outer ring */}
        <div className='w-14 h-14 rounded-full border-4 border-zinc-200 dark:border-zinc-700'></div>

        {/* animated ring */}
        <div className='absolute w-14 h-14 rounded-full border-4 border-transparent border-t-red-800 animate-spin'></div>

        {/* center dot */}
        <div className='absolute w-3 h-3 rounded-full bg-red-800 shadow-md'></div>
      </div>
    </div>
  );
}
