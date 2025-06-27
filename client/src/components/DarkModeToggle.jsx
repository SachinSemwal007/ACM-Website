import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      // className="p-2 px-4 rounded border bg-white dark:bg-gray-700 text-black dark:text-white shadow"
      className="p-2 px-4 rounded  bg-gray-400/10  text-black  hover:bg-amber-200"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
