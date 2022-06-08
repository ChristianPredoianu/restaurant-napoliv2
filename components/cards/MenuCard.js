export default function MenuCard({ heading, subHeading, children }) {
  return (
    <div className="w-full lg:w-2/5 shadow-3xl px-4 py-10">
      <div>
        <h1 className="text-4xl uppercase text-center text-red-700">
          {heading}
        </h1>
        <h2 className="text-center mt-2">{subHeading}</h2>

        {children}
      </div>
    </div>
  );
}
