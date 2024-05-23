export default function MenuSwiperContent({ item, onScrollToSection }) {
  const { img, text } = item;

  function scrollToSectionHandler() {
    onScrollToSection(text);
  }

  return (
    <div
      className='block w-full bg-cover bg-center h-full relative  transition duration-300 hover:opacity-80 cursor-pointer'
      onClick={scrollToSectionHandler}
    >
      <div className='absolute inset-0 bg-hero-overlay z-20 flex items-center justify-center '>
        <p className='text-gray-200 text-3xl tracking-widest'>{text}</p>
      </div>
      <img src={img} alt={text} />
    </div>
  );
}
