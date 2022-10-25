import React from 'react';

import { classNames } from 'utils';
import styles from './text.module.scss';

export interface ITextProps {
  className?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  tag?: 'p' | 'span';
  children: React.ReactNode;
}

export function Text({ className, size = 'm', tag = 'p', children }: ITextProps) {
  return tag === 'p' ? (
    <p className={classNames(styles[`text--${size}`], className)}>{children}</p>
  ) : (
    <span className={classNames(styles[`text--${size}`], className)}>{children}</span>
  );
}
