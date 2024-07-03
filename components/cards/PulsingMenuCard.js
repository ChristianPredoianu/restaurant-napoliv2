export default function PulsingMenuCard({ content }) {
  return (
    <div className='flex justify-center flex-col text-center shadow-2xl mt-10 w-full sm:w-2/3 md:w-2/5 lg:w-1/3 p-10 text-2xl text-red-700 dark:text-amber-600'>
      <p className='animate-pulse'>{content.paragraph1}</p>
      <p className='mt-2 animate-pulse'>{content.paragraph2}</p>
    </div>
  );
}
