import { clone, isObject } from '@urapps/common';

import { merge } from '../../utils';

import { COMPONENT_TOKEN_CLASSES, LOCAL_STORAGE_THEME_KEY, THEME_ATTRIBUTE } from './constants';
import { darkModePreset, preset } from './presets';
import { Theme, TStylePreset } from './types';

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

type TVariableGroup = {
  selector: string;
  variables: string[];
};

const DARK_SCOPE = `[${THEME_ATTRIBUTE}="${Theme.Dark}"]`;

/**
 * Splits a preset into rules: one `:root` rule per top-level key of `primitives` and `tokens`,
 * one rule per component token class.
 */
function getVariableGroups({ primitives = {}, tokens = {}, components = {} }: TStylePreset): TVariableGroup[] {
  const getRootGroups = (groups: object, prefix: string) =>
    Object.entries(groups).map(([key, value]) => ({
      selector: ':root',
      variables: formatToCSSVariables({ [key]: value }, prefix),
    }));
  const componentNames = Object.keys(COMPONENT_TOKEN_CLASSES) as Array<keyof typeof COMPONENT_TOKEN_CLASSES>;

  return [
    ...getRootGroups(primitives, 'uu-sys'),
    ...getRootGroups(tokens, 'uu'),
    ...componentNames.map((name) => ({
      selector: `.${COMPONENT_TOKEN_CLASSES[name]}`,
      variables: formatToCSSVariables(components[name] ?? {}),
    })),
  ];
}

/** Scopes `selector` to the dark theme without raising its specificity. */
function getDarkSelector(selector: string) {
  return selector === ':root' ? `:root:where(${DARK_SCOPE})` : `:where(${DARK_SCOPE}) ${selector}`;
}

function getVariableStyles(selector: string, variables: string[]) {
  return variables.length ? `${selector} { \n${variables.join(';\n')};\n}` : '';
}

/**
 * Builds the light theme rules followed by dark theme rules scoped to `THEME_ATTRIBUTE`.
 * `customPreset` applies to both themes, `customDarkPreset` to the dark theme only.
 * Dark rules hold only the variables whose values differ from the light theme.
 */
export function getThemeStyles(customPreset: TStylePreset = {}, customDarkPreset: TStylePreset = {}): string {
  const light = getVariableGroups(merge(clone(preset), clone(customPreset)));
  const dark = getVariableGroups(merge(clone(darkModePreset), clone(customPreset), customDarkPreset));
  const lightVariables = new Set(
    light.flatMap(({ selector, variables }) => variables.map((variable) => `${selector} ${variable}`))
  );

  return [
    ...light.map(({ selector, variables }) => getVariableStyles(selector, variables)),
    ...dark.map(({ selector, variables }) =>
      getVariableStyles(
        getDarkSelector(selector),
        variables.filter((variable) => !lightVariables.has(`${selector} ${variable}`))
      )
    ),
  ]
    .filter(Boolean)
    .join('\n');
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
