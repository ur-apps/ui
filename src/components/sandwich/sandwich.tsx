import React from 'react';

import { useTheme } from 'contexts';
import { classNames } from 'utils';
import styles from './sandwich.module.scss';

export interface ISandwichProps {
  className?: string;
  colorScheme?: 'blue' | 'white' | 'black';
  autoColor?: boolean;
  onClick?: () => void;
}

Sandwich.defaultProps = {
  colorScheme: 'blue',
  autoColor: true,
} as ISandwichProps;

export function Sandwich({ className, colorScheme, autoColor, onClick }: ISandwichProps) {
  const { theme } = useTheme();

  const clickHandler = () => {
    onClick && onClick();
  };

  return (
    <button
      className={classNames(
        styles.sandwich,
        styles[`sandwich--${colorScheme}`],
        styles[`sandwich--${theme}`],
        autoColor ? styles[`sandwich--${theme}-mode`] : undefined,
        className
      )}
      onClick={clickHandler}>
      <span
        className={classNames(
          styles.line,
          styles['line--top'],
          styles[`line--${colorScheme}`],
          styles[`line--${theme}`],
          autoColor ? styles[`line--${theme}-mode`] : undefined
        )}></span>
      <span
        className={classNames(
          styles.line,
          styles['line--center'],
          styles[`line--${colorScheme}`],
          styles[`line--${theme}`],
          autoColor ? styles[`line--${theme}-mode`] : undefined
        )}></span>
      <span
        className={classNames(
          styles.line,
          styles['line--bottom'],
          styles[`line--${colorScheme}`],
          styles[`line--${theme}`],
          autoColor ? styles[`line--${theme}-mode`] : undefined
        )}></span>
    </button>
  );
}
