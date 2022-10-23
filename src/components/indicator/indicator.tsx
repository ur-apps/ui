import React from 'react';
import { classNames } from 'utils';
import styles from './indicator.module.scss';

export interface IIndicatorProps {
  className?: string;
  color?: 'green' | 'red' | 'pink' | 'blue';
  isBlinking?: boolean;
}

export function Indicator({ className, color = 'green', isBlinking = false }: IIndicatorProps) {
  return (
    <div
      className={classNames(
        styles.indicator,
        styles[`indicator--${color}`],
        isBlinking ? styles['indicator--blinking'] : null,
        className
      )}
    />
  );
}
