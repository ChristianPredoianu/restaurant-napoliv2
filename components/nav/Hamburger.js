export default function Hamburger({ isNavbarOpen, onToggleNavbar }) {
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-black transition ease transform duration-300 bg-black`;
  return (
    <>
      <button
        className="flex flex-col h-12 w-12 justify-center items-center z-50 group lg:hidden"
        type="button"
        onClick={onToggleNavbar}
      >
        <div
          className={`${genericHamburgerLine} ${
            isNavbarOpen ? 'rotate-45 translate-y-3 ' : ''
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isNavbarOpen ? 'opacity-0' : ''
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isNavbarOpen ? '-rotate-45 -translate-y-3 ' : ''
          }`}
        />
      </button>
    </>
  );
}
