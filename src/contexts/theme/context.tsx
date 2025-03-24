import { createContext, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { clone, pick } from '@ur-apps/common';
import { classNames } from '@ur-apps/common-fe';

import { merge } from 'utils';

import 'styles/index.scss';

import { getBrowserTheme, getThemeFromLS, getVariableStyles, saveThemeToLS } from './helpers';
import { darkModePreset, preset } from './presets';
import { CssVariableGroup, Theme, TStylePreset } from './types';

type TThemeContext = {
  theme: Theme;
  switchTheme: (theme?: Theme) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<TThemeContext>({
  theme: Theme.Light,
  switchTheme: () => {
    console.warn('Theme switcher is not provided');
  },
});

ThemeContext.displayName = 'ThemeContext';

type TThemeProps = {
  className?: string;
  defaultTheme?: Theme;
  customePreset?: TStylePreset;
  children: ReactNode;
};

const UU_THEME_CLASS_NAME = 'uu-theme';
const COMPONENT_CLASSES = [
  CssVariableGroup.ButtonTokens,
  CssVariableGroup.DropdownTokens,
  CssVariableGroup.HeadingTokens,
  CssVariableGroup.InputTokens,
  CssVariableGroup.ModalTokens,
  CssVariableGroup.OptionTokens,
  CssVariableGroup.OverlayTokens,
  CssVariableGroup.SegmentTokens,
  CssVariableGroup.SegmentedControlTokens,
  CssVariableGroup.SwitchTokens,
  CssVariableGroup.TagTokens,
];
const TOKEN_CLASSES = Object.values(CssVariableGroup).filter((c) => !COMPONENT_CLASSES.includes(c));

export function ThemeProvider({ className, defaultTheme, customePreset = {}, children }: TThemeProps) {
  const [theme, setTheme] = useState<Theme>(() => getThemeFromLS(defaultTheme));
  const portal = useRef(document.querySelector('#portal'));

  const styles = useMemo(() => {
    const themeValue = theme === Theme.Auto ? getBrowserTheme() : theme;

    const {
      primitives = {},
      tokens = {},
      components = {},
    } = merge(clone(preset), themeValue === Theme.Dark ? darkModePreset : customePreset);

    return [
      // Primitives
      getVariableStyles(pick(primitives, ['color']), CssVariableGroup.SystemColors, 'uu-sys'),
      getVariableStyles(pick(primitives, ['size']), CssVariableGroup.SystemSizes, 'uu-sys'),
      getVariableStyles(pick(primitives, ['space']), CssVariableGroup.SystemSpaces, 'uu-sys'),
      getVariableStyles(pick(primitives, ['radius']), CssVariableGroup.SystemRadiuses, 'uu-sys'),
      getVariableStyles(pick(primitives, ['weight']), CssVariableGroup.SystemWeights, 'uu-sys'),
      getVariableStyles(pick(primitives, ['font-family']), CssVariableGroup.SystemFontFamilies, 'uu-sys'),

      // Tokens
      getVariableStyles(pick(tokens, ['color']), CssVariableGroup.Colors, 'uu'),
      getVariableStyles(pick(tokens, ['height']), CssVariableGroup.Heights, 'uu'),
      getVariableStyles(pick(tokens, ['icon-height']), CssVariableGroup.IconHeights, 'uu'),
      getVariableStyles(pick(tokens, ['space']), CssVariableGroup.Spaces, 'uu'),
      getVariableStyles(pick(tokens, ['radius']), CssVariableGroup.Radiuses, 'uu'),
      getVariableStyles(
        pick(tokens, ['font-family', 'font-size', 'font-weight', 'line-height']),
        CssVariableGroup.Texts,
        'uu'
      ),

      // Components
      getVariableStyles(components.button ?? {}, CssVariableGroup.ButtonTokens),
      getVariableStyles(components.dropdown ?? {}, CssVariableGroup.DropdownTokens),
      getVariableStyles(components.heading ?? {}, CssVariableGroup.HeadingTokens),
      getVariableStyles(components.input ?? {}, CssVariableGroup.InputTokens),
      getVariableStyles(components.modal ?? {}, CssVariableGroup.ModalTokens),
      getVariableStyles(components.option ?? {}, CssVariableGroup.OptionTokens),
      getVariableStyles(components.overlay ?? {}, CssVariableGroup.OverlayTokens),
      getVariableStyles(components.segment ?? {}, CssVariableGroup.SegmentTokens),
      getVariableStyles(components.segmentedControl ?? {}, CssVariableGroup.SegmentedControlTokens),
      getVariableStyles(components.switch ?? {}, CssVariableGroup.SwitchTokens),
      getVariableStyles(components.tag ?? {}, CssVariableGroup.TagTokens),
    ];
  }, [theme, customePreset]);

  useEffect(() => {
    if (portal.current) {
      portal.current.classList.add(UU_THEME_CLASS_NAME, ...TOKEN_CLASSES);
    } else {
      console.error('portal container was not found');
    }
  }, []);

  const switchTheme = (value?: Theme) => {
    const newValue = value ? value : theme === Theme.Light ? Theme.Dark : Theme.Light;

    saveThemeToLS(newValue);
    setTheme(newValue);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <style>{styles}</style>
      <div className={classNames(UU_THEME_CLASS_NAME, TOKEN_CLASSES, className)}>{children}</div>
    </ThemeContext.Provider>
  );
}
