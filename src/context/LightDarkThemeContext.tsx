import { createContext, useEffect, useState, ReactNode } from 'react';

export interface ThemeProps {
  darkTheme: boolean;
  toggleDarkTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps | null>(null);

const LightDarkThemeContext = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('colorTheme');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const toggleDarkTheme = (): void =>
    setDarkTheme((current: boolean) => !current);

  useEffect(
    () => localStorage.setItem('colorTheme', JSON.stringify(darkTheme)),
    [darkTheme]
  );

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default LightDarkThemeContext;
