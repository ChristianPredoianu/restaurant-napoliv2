import LunchListItem from '@/components/lunch-list/LunchListItem';

export default function LunchList({ lunchData }) {
  return (
    <ul>
      {Object.entries(lunchData).map(([key, value]) => (
        <LunchListItem key={key} day={value.day} lunch={value.lunch} />
      ))}
    </ul>
  );
}
