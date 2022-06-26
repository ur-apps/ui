import React from 'react';

import { classNames } from 'utils';
import styles from './tag.module.scss';

export interface ITagProps {
  className?: string;
  size: 'small';
  appearance?: 'fill' | 'outline';
  colorScheme?: 'lightblue' | 'blue' | 'lightpink' | 'pink';
  children: React.ReactNode;
}

Tag.defaultProps = {
  size: 'small',
  appearance: 'fill',
  colorScheme: 'lightblue',
} as ITagProps;

export function Tag({ className, size, appearance, colorScheme, children }: ITagProps) {
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
