import LunchListItem from '@/components/lunch-list/LunchListItem';

export default function LunchList({ lunchData }) {
  return (
    <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {Object.entries(lunchData).map(([key, value]) => (
        <LunchListItem key={key} day={value.day} lunch={value.lunch} />
      ))}
    </ul>
  );
}
