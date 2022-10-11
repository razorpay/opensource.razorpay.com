import React, { useEffect, useState } from 'react';

import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi/index';

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
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button onClick={handleThemeSwitch} className="flex justify-center">
      <span className="hidden">{theme}</span>
      {theme === 'dark' ? (
        <HiOutlineSun size="1rem" />
      ) : (
        <HiOutlineMoon size="1rem" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
