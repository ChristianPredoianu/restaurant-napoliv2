import { useState } from 'react';
import useDarkMode from 'hooks/useDarkMode';
import classNames from 'classnames';

export default function DarkModeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [colorTheme, setTheme] = useDarkMode(isDarkMode);

  function toggleDarkModeHandler() {
    setIsDarkMode(!isDarkMode);
    setTheme(colorTheme);
  }

  return (
    <div className="flex flex-1 flex-col lg:flex-row items-center ml-4">
      <p className="text-xs mb-2 lg:mb-0 lg:mr-2 dark:text-gray-300">
        Mörkt Läge
      </p>
      <div
        className={classNames(
          'w-12 h-6 bg-black items-center rounded-full p-1 duration-300 ease-in-out cursor-pointer',
          { 'bg-amber-600': isDarkMode }
        )}
        onClick={toggleDarkModeHandler}
      >
        <div
          className={classNames(
            'w-4 h-4 rounded-full shadow-md bg-white transform duration-300 ease-in-out translate-x-0',
            { 'translate-x-6': isDarkMode }
          )}
        ></div>
      </div>
    </div>
  );
}
