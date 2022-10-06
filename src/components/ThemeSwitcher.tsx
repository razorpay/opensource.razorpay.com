import React, { useEffect, useState } from 'react';

import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

const ThemeSwitcher = () => {
  const getInitialState = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'light' | 'dark' | undefined;
    }
    return 'light';
  };
  const [theme, setTheme] = useState<'light' | 'dark' | undefined>(
    getInitialState
  );

  const handleThemeSwitch = () => {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log('thee...', theme);
  }, [theme]);
  return (
    <button onClick={handleThemeSwitch} className="flex justify-center">
      {theme === 'dark' ? (
        <HiOutlineSun size="1rem" />
      ) : (
        <HiOutlineMoon size="1rem" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
