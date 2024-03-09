import React, { useState, createContext, useMemo } from 'react';
import { classNames, clone, merge } from 'utils';

import 'styles/index.scss';

import { darkModePreset, preset } from './variables';
import { formatCSSVariables } from './helpers';
import { TStylePreset } from './types';

const UU_THEME_CLASS_NAME = 'uu-theme';

type TThemeContext = {
  theme: 'light' | 'dark';
};

export const ThemeContext = createContext<TThemeContext>({
  theme: 'light',
});

ThemeContext.displayName = 'ThemeContext';

type TThemeProps = {
  className?: string;
  defaultTheme?: 'light' | 'dark';
  customePreset?: TStylePreset;
  children: React.ReactNode;
};

export function ThemeProvider({ className, defaultTheme, customePreset = {}, children }: TThemeProps): JSX.Element {
  const [theme] = useState<'light' | 'dark'>(defaultTheme ?? 'light');

  const [styles, classes] = useMemo(() => {
    const { primitives, tokens } = merge(clone(preset), theme === 'dark' ? darkModePreset : customePreset);

    const styles: Record<string, string[]> = {
      'uu-sys-colors': formatCSSVariables({ color: primitives?.color }, 'uu-sys'),
      'uu-sys-radiuses': formatCSSVariables({ radius: primitives?.radius }, 'uu-sys'),
      'uu-sys-sizes': formatCSSVariables({ size: primitives?.size }, 'uu-sys'),
      'uu-sys-spaces': formatCSSVariables({ space: primitives?.space }, 'uu-sys'),
      'uu-sys-weights': formatCSSVariables({ weight: primitives?.weight }, 'uu-sys'),
      'uu-sys-font-families': formatCSSVariables({ 'font-family': primitives?.['font-family'] }, 'uu-sys'),

      'uu-colors': formatCSSVariables({ color: tokens?.color }, 'uu'),
      'uu-font': formatCSSVariables(
        {
          'font-family': tokens?.['font-family'],
          'font-size': tokens?.['font-size'],
          'font-weight': tokens?.['font-weight'],
          'line-height': tokens?.['line-height'],
        },
        'uu'
      ),
      'uu-heights': formatCSSVariables({ height: tokens?.height }, 'uu'),
      'uu-radiuses': formatCSSVariables({ radius: tokens?.radius }, 'uu'),
      'uu-spaces': formatCSSVariables({ space: tokens?.space }, 'uu'),
    };

    const stringifiedStyles = Object.entries(styles).map(([group, value]) => `.${group} { \n${value.join(';\n')};\n}`);
    const classes = Object.keys(styles).filter((c) => !([] as string[]).includes(c));

    return [stringifiedStyles, classes];
  }, [theme, preset]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <style>{styles}</style>
      <div className={classNames(UU_THEME_CLASS_NAME, classes, className)}>{children}</div>
    </ThemeContext.Provider>
  );
}
