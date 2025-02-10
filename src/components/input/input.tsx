import { forwardRef } from 'react';

import { CssVariableGroup } from 'contexts';
import { classNames } from 'utils';

import { IInputProps } from './input.types';
import styles from './input.module.scss';

export const Input = forwardRef<HTMLInputElement, IInputProps>(function Input(
  {
    className,
    variant = 'filled',
    shape = 'default',
    size = 'm',
    prefix,
    postfix,
    iconLeft: IconLeft,
    iconRight: IconRight,
    wrapperRef,
    ...props
  },
  ref
) {
  const wrapperClasses = classNames(
    CssVariableGroup.InputTokens,
    styles.wrapper,
    styles[`wrapper--variant-${variant}`],
    styles[`wrapper--shape-${shape}`],
    styles[`wrapper--size-${size}`],
    className
  );
  const prefixClasses = classNames(styles.prefix, styles[`prefix--size-${size}`]);
  const postfixClasses = classNames(styles.postfix, styles[`postfix--size-${size}`]);
  const leftIconClasses = classNames(styles['icon-left'], styles[`icon-left--size-${size}`]);
  const rightIconClasses = classNames(styles['icon-right'], styles[`icon-right--size-${size}`]);

  return (
    <label className={wrapperClasses} ref={wrapperRef}>
      {prefix && <span className={prefixClasses}>{prefix}</span>}

      {!prefix && IconLeft && <IconLeft className={leftIconClasses} />}

      <input {...props} className={styles.field} ref={ref} />

      {postfix && <span className={postfixClasses}>{postfix}</span>}

      {!postfix && IconRight && <IconRight className={rightIconClasses} />}
    </label>
  );
});
