import React, { useEffect } from 'react';
import { classNames } from '@ur-apps/common-fe';

import { CssVariableGroup } from 'contexts';
import { ReactComponent as ArcIcon } from 'icons/circle.arc.svg';

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
  icon,
  iconPosition = 'before',
  iconOnly = false,
  loading = false,
  loadingIcon = ArcIcon,
  disabled = false,
  ...props
}: IButtonProps) {
  const classes = classNames(
    CssVariableGroup.ButtonTokens,
    styles.button,
    styles[`button--variant-${variant}`],
    styles[`button--color-${color}`],
    styles[`button--shape-${shape}`],
    styles[`button--size-${size}`],
    { [styles['button--icon-only']]: iconOnly },
    className
  );
  const Icon = loading ? loadingIcon : icon;
  const IconElement = Icon
    ? React.createElement(Icon, { className: classNames(styles.icon, { [styles.loader]: loading }) })
    : null;

  useEffect(() => {
    if (label && children) {
      console.warn(
        'The props "label" and "children" were passed to the Button component. Only the "children" will be displayed.'
      );
    }
  }, [label, children]);

  return (
    <button {...props} className={classes} disabled={disabled || loading}>
      {iconPosition === 'before' && IconElement}

      {!iconOnly && (children || label)}

      {iconPosition === 'after' && IconElement}
    </button>
  );
}
