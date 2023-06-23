import { createContext, useEffect, useState, ReactNode } from 'react';

export interface ThemeProps {
  darkTheme: boolean;
  toggleDarkTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps | null>(null);

const LightDarkThemeContext = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = (): void => setDarkTheme((current) => !current);

  useEffect(() => {
    const storedTheme = localStorage.getItem('iykykColorTheme');

    if (storedTheme) {
      setDarkTheme(JSON.parse(storedTheme));
    }
  }, []);

  useEffect(
    () => localStorage.setItem('iykykColorTheme', JSON.stringify(darkTheme)),
    [darkTheme]
  );

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default LightDarkThemeContext;
