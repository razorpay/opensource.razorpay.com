import React, { useEffect, useState } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi/index';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = localTheme ?? 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const handleThemeSwitch = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
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
