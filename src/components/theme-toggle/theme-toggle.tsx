import React from 'react';

import { MoonIcon, SunIcon } from 'icons';
import { useTheme } from 'contexts';
import { classNames } from 'utils';
import styles from 'components/toggle/toggle.module.scss';

export interface IThemeToggleProps {
  className?: string;
  size?: 's' | 'm' | 'l';
  colorScheme?: 'light' | 'dark' | 'blue';
  autoColor?: boolean;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ThemeToggle({
  className,
  size = 'm',
  colorScheme = 'light',
  autoColor = true,
  onChange,
}: IThemeToggleProps) {
  const { theme, themeValue, switchTheme } = useTheme();

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(evt);
    switchTheme(evt.target.value as 'dark' | 'light' | 'auto');
  };

  return (
    <div
      className={classNames(
        styles.toggle,
        styles[`toggle--${colorScheme}`],
        styles[`toggle--${size}`],
        autoColor ? styles[`toggle--${theme}-mode`] : undefined,
        className
      )}>
      <label
        className={classNames(
          styles.button,
          styles[`button--${size}`],
          styles[`button--${colorScheme}`],
          autoColor ? styles[`button--${theme}-mode`] : undefined,
          themeValue === 'light' ? styles['button--active'] : undefined
        )}>
        <input
          className={styles.input}
          type="radio"
          name="app-theme"
          value="light"
          checked={themeValue === 'light'}
          onChange={changeHandler}
        />
        <SunIcon
          className={classNames(
            styles.icon,
            styles[`icon--${size}`],
            styles[`icon--${colorScheme}`],
            autoColor ? styles[`icon--${theme}-mode`] : undefined,
            themeValue === 'light' ? styles['icon--active'] : undefined
          )}
        />
      </label>

      <label
        className={classNames(
          styles.button,
          styles[`button--${size}`],
          styles[`button--${colorScheme}`],
          autoColor ? styles[`button--${theme}-mode`] : undefined,
          themeValue === 'dark' ? styles['button--active'] : undefined
        )}>
        <input
          className={styles.input}
          type="radio"
          name="app-theme"
          value="dark"
          checked={themeValue === 'dark'}
          onChange={changeHandler}
        />
        <MoonIcon
          className={classNames(
            styles.icon,
            styles[`icon--${size}`],
            styles[`icon--${colorScheme}`],
            autoColor ? styles[`icon--${theme}-mode`] : undefined,
            themeValue === 'dark' ? styles['icon--active'] : undefined
          )}
        />
      </label>

      <label
        className={classNames(
          styles.button,
          styles[`button--${size}`],
          styles[`button--${colorScheme}`],
          autoColor ? styles[`button--${theme}-mode`] : undefined,
          themeValue === 'auto' ? styles['button--active'] : undefined
        )}>
        <input
          className={styles.input}
          type="radio"
          name="app-theme"
          value="auto"
          checked={themeValue === 'auto'}
          onChange={changeHandler}
        />
        AUTO
      </label>
    </div>
  );
}
