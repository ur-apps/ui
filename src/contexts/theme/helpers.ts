import { isObject } from 'utils';

import { Theme } from './types';
import { LOCAL_STORAGE_THEME_KEY } from './constants';

export function formatToCSSVariables(variables: Record<string, any>, prefix = ''): string[] {
  const result: string[] = [];

  if (isObject(variables)) {
    Object.entries(variables).forEach(([key, value]) => {
      const formattedKey = prefix ? `${prefix}-${key}` : `${key}`;

      if (typeof value === 'object' && value !== null) {
        result.push(...formatToCSSVariables(value, formattedKey));
      } else {
        result.push(`--${formattedKey}: ${value}`);
      }
    });
  }

  return result;
}

export function getVariableStyles(variables: Record<string, any>, className: string, prefix = '') {
  const tokens = formatToCSSVariables(variables, prefix);

  return tokens.length ? `.${className} { \n${tokens.join(';\n')};\n}` : '';
}

export function getThemeFromLS(defaultTheme?: Theme): Theme {
  return (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? defaultTheme ?? Theme.Auto) as Theme;
}

export function saveThemeToLS(theme: Theme): void {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
}

export function getBrowserTheme(): Theme {
  // Check if the user has set a theme preference in the browser
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Theme.Dark;
  }

  return Theme.Light;
}
