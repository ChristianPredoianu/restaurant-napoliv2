export default function MenuListItem({ data }) {
  const { id, name, content, priceFamily, priceNormal, price, small, large } =
    data;

  return (
    <li className="flex flex-col mt-2 border-t-2 border-amber-600  py-6 first:border-t-0 last:border-b-2 dark:border-t last:border-amber-600">
      <div className="flex flex-col">
        <div className="flex items-center ">
          <p className="text-2xl font-bold text-amber-600 ">{`${id}.`}</p>
          <p className="font-bold text-xl md:text-2xl ml-2 ">{name}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="py-2 text-md sm:text-xl pr-4">{content}</p>
          {price && (
            <p className="text-red-500 dark:text-amber-600 text-2xl">{`${price}:-`}</p>
          )}
        </div>
        {small && large && (
          <div className="text-red-500 dark:text-amber-600 text-xl md:text-2xl">
            <p>{`${small} :-`}</p>
            <p className="mt-2">{`${large} :- `}</p>
          </div>
        )}
        {priceNormal && (
          <div className="flex flex-col md:flex-row mt-2 text-xl">
            <p className="text-red-500 dark:text-amber-600">
              <span className="text-black dark:text-gray-200 mr-2 ">
                Vanlig:
              </span>
              {`${priceNormal} :-`}
            </p>
            {priceFamily && (
              <p className="md:ml-2 ">
                Familje:
                <span className=" md:m-2  ml-2 text-red-500 dark:text-amber-600">{`${priceFamily} :-`}</span>
              </p>
            )}
          </div>
        )}
      </div>
    </li>
  );
}
