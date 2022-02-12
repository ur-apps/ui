import React, { useState, createContext, useContext } from 'react';
import { ThemeService } from 'services';

type TThemeContext = {
  theme: 'light' | 'dark';
  themeValue: 'light' | 'dark' | 'auto';
  switchTheme: (value?: 'light' | 'dark' | 'auto') => void;
};

const ThemeContext = createContext<TThemeContext>({
  theme: 'light',
  themeValue: 'light',
  switchTheme: () => {
    return;
  },
});

ThemeContext.displayName = 'ThemeContext';

type TThemeProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: TThemeProps): JSX.Element {
  const [themeValue, setThemeValue] = useState<'light' | 'dark' | 'auto'>(ThemeService.getThemeFromLS || 'auto');
  const [theme, setTheme] = useState<'light' | 'dark'>(
    themeValue === 'auto' ? ThemeService.getThemeByTime() : themeValue
  );

  const changeHandler = (value?: 'light' | 'dark' | 'auto') => {
    if (value) {
      setThemeValue(value);
      ThemeService.saveThemeToLS(value);
      if (value === 'auto') {
        setTheme(ThemeService.getThemeByTime());
      } else {
        setTheme(value);
      }
    } else {
      const newValue = theme === 'light' ? 'dark' : 'light';
      setThemeValue(newValue);
      setTheme(newValue);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themeValue, switchTheme: changeHandler }}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
