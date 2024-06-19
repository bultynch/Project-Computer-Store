import React, { useEffect, useState } from 'react';
import { IoMoon } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedMode = localStorage.getItem('theme');

      if (storedMode) {
        return storedMode;

      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      
    }
    return 'light';
  });

  useEffect(() => {
    if (darkMode === 'dark') {
      document.querySelector('html').classList.add('dark');

    } else {
      document.querySelector('html').classList.remove('dark');
    }

    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => (prevDarkMode === 'light' ? 'dark' : 'light'));
  };

  return (

    <button className="swap swap-rotate btn btn-ghost btn-circle hover:bg-gray-300 dark:hover:bg-neutral-700 dark:text-white" onClick={toggleDarkMode}>

      {darkMode === 'dark' ? <MdOutlineWbSunny className='w-6 h-6' /> : <IoMoon className='w-6 h-6' />}

    </button>

  );
}

export default DarkModeButton;
