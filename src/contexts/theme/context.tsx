import {
  createContext,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { classNames } from '@urapps/react';

import { THEME_ATTRIBUTE } from './constants';
import { getBrowserTheme, getThemeFromLS, getThemeStyles, saveThemeToLS, subscribeToBrowserTheme } from './helpers';
import { Theme, TStylePreset } from './types';
import styles from './context.module.scss';

type TThemeContext = {
  theme: Theme;
  resolvedTheme: Theme.Light | Theme.Dark;
  switchTheme: (theme?: Theme) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<TThemeContext>({
  theme: Theme.Light,
  resolvedTheme: Theme.Light,
  switchTheme: () => {
    console.warn('Theme switcher is not provided');
  },
});

ThemeContext.displayName = 'ThemeContext';

type TThemeProps = {
  className?: string;
  defaultTheme?: Theme;
  customePreset?: TStylePreset;
  customDarkPreset?: TStylePreset;
  children: ReactNode;
};

export function ThemeProvider({ className, defaultTheme, customePreset, customDarkPreset, children }: TThemeProps) {
  const [theme, setTheme] = useState<Theme>(() => getThemeFromLS(defaultTheme));
  const browserTheme = useSyncExternalStore(subscribeToBrowserTheme, getBrowserTheme);
  const resolvedTheme = theme === Theme.Auto ? browserTheme : theme;
  const portalRef = useRef(document.querySelector('#portal'));
  const variableStyles = useMemo(
    () => getThemeStyles(customePreset, customDarkPreset),
    [customePreset, customDarkPreset]
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    if (portalRef.current) {
      portalRef.current.classList.add(styles.theme);
    } else {
      console.error('portal container was not found');
    }
  }, []);

  const switchTheme = (value?: Theme) => {
    const newValue = value ? value : resolvedTheme === Theme.Light ? Theme.Dark : Theme.Light;

    saveThemeToLS(newValue);
    setTheme(newValue);
  };

  return (
    <ThemeContext value={{ theme, resolvedTheme, switchTheme }}>
      <style>{variableStyles}</style>
      <div className={classNames(styles.theme, className)}>{children}</div>
    </ThemeContext>
  );
}
