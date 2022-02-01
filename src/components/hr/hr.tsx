import React from 'react';

import { useTheme } from 'contexts';
import { classNames } from 'utils';
import styles from './hr.module.scss';

export interface IHrProps {
  className?: string;
  colorScheme?: 'light' | 'dark';
  autoColor?: boolean;
}

Hr.defaultProps = {
  colorScheme: 'light',
  autoColor: true,
} as IHrProps;

export function Hr({ className, colorScheme, autoColor }: IHrProps) {
  const { theme } = useTheme();

  return (
    <hr
      className={classNames(
        styles.hr,
        styles[`hr--${colorScheme}`],
        autoColor ? styles[`hr--${theme}-mode`] : undefined,
        className
      )}
    />
  );
}
