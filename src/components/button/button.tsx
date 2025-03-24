import { useEffect } from 'react';
import { classNames } from '@ur-apps/common-fe';

import { CssVariableGroup } from 'contexts';

import { IButtonProps } from './button.types';
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
    CssVariableGroup.ButtonTokens,
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
