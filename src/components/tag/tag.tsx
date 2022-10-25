import React from 'react';

import { classNames } from 'utils';
import styles from './tag.module.scss';

export interface ITagProps {
  className?: string;
  size?: 's';
  appearance?: 'fill' | 'outline';
  colorScheme?: 'lightblue' | 'blue' | 'lightpink' | 'pink';
  children: React.ReactNode;
}

export function Tag({ className, size = 's', appearance = 'fill', colorScheme = 'lightblue', children }: ITagProps) {
  return (
    <div
      className={classNames(
        styles.tag,
        styles[`tag--size-${size}`],
        styles[`tag--appearance-${appearance}`],
        styles[`tag--color-${colorScheme}`],
        className
      )}>
      {children}
    </div>
  );
}
