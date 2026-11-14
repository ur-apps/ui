import { isObject } from '@urapps/common';

import { LOCAL_STORAGE_THEME_KEY } from './constants';
import { Theme } from './types';

export function formatToCSSVariables(variables: unknown, prefix = ''): string[] {
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

export function getVariableStyles(variables: object, selector: string, prefix = '') {
  const tokens = formatToCSSVariables(variables, prefix);

  return tokens.length ? `${selector} { \n${tokens.join(';\n')};\n}` : '';
}

/** Emits a separate `:root` rule for every top-level key of `groups`. */
export function getRootVariableStyles(groups: object, prefix: string): string[] {
  return Object.entries(groups).map(([key, value]) => getVariableStyles({ [key]: value }, ':root', prefix));
}

export function getThemeFromLS(defaultTheme?: Theme): Theme {
  return (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? defaultTheme ?? Theme.Auto) as Theme;
}

export function saveThemeToLS(theme: Theme): void {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
}

export function getBrowserTheme(): Theme.Light | Theme.Dark {
  // Check if the user has set a theme preference in the browser
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Theme.Dark;
  }

  return Theme.Light;
}

export function subscribeToBrowserTheme(onChange: () => void): () => void {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  mediaQuery.addEventListener('change', onChange);

  return () => mediaQuery.removeEventListener('change', onChange);
}
