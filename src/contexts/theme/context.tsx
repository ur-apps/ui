import { createContext, ReactNode, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { clone } from '@urapps/common';
import { classNames } from '@urapps/react';

import { merge } from '../../utils';

import {
  getBrowserTheme,
  getRootVariableStyles,
  getThemeFromLS,
  getVariableStyles,
  saveThemeToLS,
  subscribeToBrowserTheme,
} from './helpers';
import { darkModePreset, preset } from './presets';
import { CssVariableGroup, Theme, TStylePreset } from './types';
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
  children: ReactNode;
};

type TComponentName = keyof NonNullable<TStylePreset['components']>;

const COMPONENT_TOKEN_CLASSES: Record<TComponentName, CssVariableGroup> = {
  button: CssVariableGroup.ButtonTokens,
  dropdown: CssVariableGroup.DropdownTokens,
  heading: CssVariableGroup.HeadingTokens,
  hint: CssVariableGroup.HintTokens,
  input: CssVariableGroup.InputTokens,
  modal: CssVariableGroup.ModalTokens,
  option: CssVariableGroup.OptionTokens,
  overlay: CssVariableGroup.OverlayTokens,
  segment: CssVariableGroup.SegmentTokens,
  segmentedControl: CssVariableGroup.SegmentedControlTokens,
  switch: CssVariableGroup.SwitchTokens,
  tag: CssVariableGroup.TagTokens,
  tooltip: CssVariableGroup.TooltipTokens,
};

export function ThemeProvider({ className, defaultTheme, customePreset, children }: TThemeProps) {
  const [theme, setTheme] = useState<Theme>(() => getThemeFromLS(defaultTheme));
  const browserTheme = useSyncExternalStore(subscribeToBrowserTheme, getBrowserTheme);
  const resolvedTheme = theme === Theme.Auto ? browserTheme : theme;
  const portalRef = useRef(document.querySelector('#portal'));

  // TODO add hook
  const variableStyles = useMemo(() => {
    const {
      primitives = {},
      tokens = {},
      components = {},
    } = merge(clone(preset), resolvedTheme === Theme.Dark ? clone(darkModePreset) : {}, customePreset ?? {});

    return [
      ...getRootVariableStyles(primitives, 'uu-sys'),
      ...getRootVariableStyles(tokens, 'uu'),
      ...(Object.keys(COMPONENT_TOKEN_CLASSES) as TComponentName[]).map((name) =>
        getVariableStyles(components[name] ?? {}, `.${COMPONENT_TOKEN_CLASSES[name]}`)
      ),
    ];
  }, [resolvedTheme, customePreset]);

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
