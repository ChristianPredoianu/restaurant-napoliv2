export default function RecommendationBanner({ text }) {
  return (
    <div className='mt-6 flex justify-center'>
      <p className='max-w-xl text-center text-sm md:text-base italic text-zinc-600 dark:text-zinc-400 px-6 py-3 border border-zinc-200 dark:border-zinc-700 rounded-full bg-white/60 dark:bg-black/20 backdrop-blur-md shadow-sm'>
        {text}
      </p>
    </div>
  );
}
