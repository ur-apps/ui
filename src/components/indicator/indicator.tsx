import React from 'react';
import { classNames } from 'utils';
import styles from './indicator.module.scss';

export enum IndicatorColor {
  Green = 'green',
  Red = 'red',
  Pink = 'pink',
  Blue = 'blue',
}

export interface IIndicatorProps {
  className?: string;
  color?: IndicatorColor;
  isBlinking?: boolean;
}

export function Indicator({ className, color = IndicatorColor.Green, isBlinking = false }: IIndicatorProps) {
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
