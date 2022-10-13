import React, { useEffect, useState } from 'react';

import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi/index';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    setTheme(localTheme ?? 'light');
  }, []);

  const handleThemeSwitch = () => {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className="flex justify-center"
      aria-label={`Enable ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <HiOutlineSun size="1rem" />
      ) : (
        <HiOutlineMoon size="1rem" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
