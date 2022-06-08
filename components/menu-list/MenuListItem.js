export default function MenuListItem({ data }) {
  const { id, name, content, priceFamily, priceNormal } = data;

  return (
    <li className="flex flex-col mt-2  border-t-2 border-amber-600 py-4 first:border-t-0 last:border-b-2 last:border-amber-600">
      <div className="flex flex-col">
        <div className="flex items-center ">
          <p className="text-2xl font-bold ">{`${id}.`}</p>
          <p className="font-bold text-xl ml-2">{name}</p>
        </div>
        <p className="py-2">{content}</p>
        {priceNormal && (
          <div className="flex mt-2">
            <p className="text-red-500">
              <span className="text-black mr-2 font-bold">Vanlig:</span>
              {`${priceNormal} :-`}
            </p>
            {priceFamily && (
              <p className="text-red-500">
                <span className="text-black m-2 font-bold ">Familje:</span>
                {`${priceFamily} :-`}
              </p>
            )}
          </div>
        )}
      </div>
    </li>
  );
}
