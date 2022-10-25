import React from 'react';

import { classNames } from 'utils';
import styles from './heading.module.scss';

export interface IHeadingProps {
  className?: string;
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

export function Heading({ className, size = 'h1', children }: IHeadingProps) {
  const classes = classNames(styles[`heading--${size}`], className);

  switch (size) {
    case 'h1':
      return <h1 className={classes}>{children}</h1>;

    case 'h2':
      return <h2 className={classes}>{children}</h2>;

    case 'h3':
      return <h3 className={classes}>{children}</h3>;

    case 'h4':
      return <h4 className={classes}>{children}</h4>;

    case 'h5':
      return <h5 className={classes}>{children}</h5>;

    case 'h6':
      return <h6 className={classes}>{children}</h6>;

    default:
      return <h1 className={classes}>{children}</h1>;
  }
}
