export default function LunchListItem({ day, lunch }) {
  return (
    <li className="py-2 border-b border-amber-600">
      <p className="text-xl">{day}</p>
      <p>{lunch}</p>
    </li>
  );
}
