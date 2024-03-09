import React, { useEffect } from 'react';

import { classNames } from 'utils';
import { IButtonProps } from './button.types';
import { BUTTON_TOKENS_CLASS_NAME } from './button.tokens';
import styles from './button.module.scss';

export function Button({
  className,
  variant = 'filled',
  color = 'primary',
  shape = 'default',
  size = 'm',
  label,
  children,
  ...props
}: IButtonProps) {
  const classes = classNames(
    BUTTON_TOKENS_CLASS_NAME,
    styles.button,
    styles[`button--variant-${variant}`],
    styles[`button--color-${color}`],
    styles[`button--shape-${shape}`],
    styles[`button--size-${size}`],
    className
  );

  useEffect(() => {
    if (label && children) {
      console.warn(
        'The props "label" and "children" were passed to the Button component. Only the "children" will be displayed.'
      );
    }
  }, [label, children]);

  return (
    <button {...props} className={classes}>
      {children || label}
    </button>
  );
}
