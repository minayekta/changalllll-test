import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light';

    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    localStorage.setItem('theme', theme);

    const root = document.documentElement;

    theme === 'dark'
      ? root.classList.add('dark')
      : root.classList.remove('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
