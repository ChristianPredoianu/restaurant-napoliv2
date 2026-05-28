export default function MenuListItem({ data }) {
  const { id, name, content, price, priceFamily, priceNormal, small, large, xLarge } =
    data;

  const brandRed = '#991b1b';

  return (
    <li
      className='
        group relative
        py-5 px-3 md:px-5
        rounded-xl
        transition-all duration-300
        hover:bg-zinc-100/60 dark:hover:bg-white/5
        border border-transparent
        hover:border-zinc-200 dark:hover:border-white/10
      '
    >
      {/* TOP ROW */}
      <div className='flex items-start justify-between gap-4'>
        <div className='flex items-start gap-3'>
          {/* ID */}
          <span
            className='
              text-sm md:text-base
              font-bold
              opacity-70
              group-hover:opacity-100
              transition
            '
            style={{ color: brandRed }}
          >
            {id}.
          </span>

          {/* NAME + DESCRIPTION */}
          <div>
            <p
              className='
                text-lg md:text-xl
                font-semibold
                text-zinc-900 dark:text-white
                tracking-tight
              '
            >
              {name}
            </p>

            {content && (
              <p
                className='
                  mt-1
                  text-sm md:text-base
                  text-zinc-600 dark:text-zinc-400
                  leading-relaxed
                '
              >
                {content}
              </p>
            )}
          </div>
        </div>

        {/* PRICE */}
        {price && (
          <div
            className='
              text-lg md:text-xl
              font-bold
              whitespace-nowrap
              tracking-tight
            '
            style={{ color: brandRed }}
          >
            {price}:-
          </div>
        )}
      </div>

      {/* VARIANTS */}
      {(small || large || xLarge) && (
        <div className='mt-3 ml-10 space-y-1 text-sm md:text-base text-zinc-500 dark:text-zinc-400'>
          {small && (
            <p>
              Liten:{' '}
              <span style={{ color: brandRed }} className='font-medium'>
                {small}:-
              </span>
            </p>
          )}

          {large && (
            <p>
              Stor:{' '}
              <span style={{ color: brandRed }} className='font-medium'>
                {large}:-
              </span>
            </p>
          )}

          {xLarge && (
            <p>
              Extra stor:{' '}
              <span style={{ color: brandRed }} className='font-medium'>
                {xLarge}:-
              </span>
            </p>
          )}
        </div>
      )}

      {/* FAMILY PRICING */}
      {priceNormal && (
        <div className='mt-3 ml-10 flex flex-wrap gap-4 text-sm md:text-base text-zinc-500 dark:text-zinc-400'>
          <p>
            Vanlig:{' '}
            <span style={{ color: brandRed }} className='font-medium'>
              {priceNormal}:-
            </span>
          </p>

          {priceFamily && (
            <p>
              Familj:{' '}
              <span style={{ color: brandRed }} className='font-medium'>
                {priceFamily}:-
              </span>
            </p>
          )}
        </div>
      )}

      {/* DIVIDER */}
      <div className='mt-5 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/10 to-transparent' />
    </li>
  );
}
