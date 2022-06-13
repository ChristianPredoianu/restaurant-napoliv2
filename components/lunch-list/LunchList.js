import LunchListItem from '@/components/lunch-list/LunchListItem';

export default function LunchList({ lunchData }) {
  console.log(lunchData);

  return (
    <ul>
      {Object.entries(lunchData).map(([key, index]) => (
        <LunchListItem key={index} day={key} lunch={lunchData[key]} />
      ))}
    </ul>
  );
}
