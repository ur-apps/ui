import React from 'react';

import { classNames } from 'utils';

import { IInputProps } from './input.types';
import { INPUT_TOKENS_CLASS_NAME } from './input.tokens';
import styles from './input.module.scss';

export function Input({ className, variant = 'filled', shape = 'default', size = 'm', ...props }: IInputProps) {
  const classes = classNames(
    INPUT_TOKENS_CLASS_NAME,
    styles.input,
    styles[`input--variant-${variant}`],
    styles[`input--shape-${shape}`],
    styles[`input--size-${size}`],
    className
  );

  return <input {...props} className={classes} />;
}
