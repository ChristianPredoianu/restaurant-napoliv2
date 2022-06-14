import classNames from 'classnames';

export default function Hamburger({ isNavbarOpen, onToggleNavbar }) {
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-black transition ease transform duration-300 bg-black dark:bg-amber-600`;
  return (
    <>
      <button
        className={classNames(
          'flex flex-col h-12 w-12 justify-center items-center z-50 group lg:hidden',
          { 'fixed top-6 right-4': isNavbarOpen }
        )}
        type="button"
        onClick={onToggleNavbar}
      >
        <div
          className={classNames(genericHamburgerLine, {
            'rotate-45 translate-y-3 dark:bg-white': isNavbarOpen,
          })}
        />
        <div
          className={classNames(genericHamburgerLine, {
            'opacity-0 ': isNavbarOpen,
          })}
        />
        <div
          className={classNames(genericHamburgerLine, {
            '-rotate-45 -translate-y-3 dark:bg-white': isNavbarOpen,
          })}
        />
      </button>
    </>
  );
}
