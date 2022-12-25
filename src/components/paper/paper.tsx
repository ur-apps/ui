import React from 'react';

import { useTheme } from 'contexts';
import { classNames } from 'utils';
import styles from './paper.module.scss';

export interface IPaperProps {
  className?: string;
  color?: 'white' | 'lightgray' | 'darkgray' | 'black';
  size?: 'xs' | 's' | 'm' | 'l';
  elevation?: 0 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | '0' | '1' | '2' | '3' | '5' | '8' | '13' | '21';
  autoColor?: boolean;
  children?: React.ReactNode;
}

export function Paper({
  className,
  color = 'white',
  size = 'm',
  elevation = 0,
  autoColor = true,
  children,
}: IPaperProps) {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(
        styles.paper,
        styles[`paper--color-${color}`],
        styles[`paper--size-${size}`],
        styles[`paper--elevation-${elevation}`],
        autoColor ? styles[`tooltip--${theme}-mode`] : null,
        className
      )}>
      {children}
    </div>
  );
}
