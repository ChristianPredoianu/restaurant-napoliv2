export default function MenuCard({ heading, subHeading, children }) {
  return (
    <div className='w-full lg:w-45w shadow-2xl px-4 sm:px-8 py-10 last:w-full lg:last:w-3/4 '>
      <div>
        <h1 className='text-4xl uppercase text-center text-red-700 dark:text-amber-600'>
          {heading}
        </h1>
        <h2 className='text-center mt-2'>{subHeading}</h2>

        {children}
      </div>
    </div>
  );
}
