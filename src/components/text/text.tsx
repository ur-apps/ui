import React from 'react';
import { classNames } from '@urapps/react';

import { ITextProps, TextTag } from './text.types';
import styles from './text.module.scss';

export function Text<T extends TextTag = 'p'>({
  className,
  color = 'inherit',
  size = 'm',
  tag = 'p' as T,
  ...props
}: ITextProps<T>) {
  const classes = classNames(
    styles.text,
    styles[`text--color-${color}`],
    styles[`text--size-${size}`],
    styles[`text--tag-${tag}`],
    className
  );

  return React.createElement(tag, { ...props, className: classes });
}
