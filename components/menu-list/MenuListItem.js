export default function MenuListItem({ data }) {
  const { id, name, content, price } = data;

  return (
    <li className="flex flex-col  mt-2 border-t-2 border-amber-600 py-4 first:border-t-0">
      <div className="flex items-center">
        <p className="text-2xl font-bold">{`${id}.`}</p>
        <p className="font-bold ml-2">{name}</p>
      </div>
      <p className="flex-1 ">{content}</p>
    </li>
  );
}
