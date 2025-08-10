import { classNames } from '@ur-apps/common-fe';

import { StatusIcon } from 'components/status-icon';
import { CssVariableGroup } from 'contexts';

import { IInputProps } from './input.types';
import styles from './input.module.scss';

export function Input({
  className,
  variant = 'filled',
  shape = 'default',
  size = 'm',
  status = 'default',
  message,
  prefix,
  postfix,
  iconLeft: IconLeft,
  iconRight: IconRight,
  ref,
  wrapperRef,
  ...props
}: IInputProps) {
  const wrapperClasses = classNames(
    CssVariableGroup.InputTokens,
    styles.wrapper,
    styles[`wrapper--variant-${variant}`],
    styles[`wrapper--shape-${shape}`],
    styles[`wrapper--size-${size}`],
    styles[`wrapper--status-${status}`],
    className
  );
  const prefixClasses = classNames(styles.prefix, styles[`prefix--size-${size}`]);
  const postfixClasses = classNames(styles.postfix, styles[`postfix--size-${size}`]);
  const leftIconClasses = classNames(styles['icon-left'], styles[`icon-left--size-${size}`]);
  const rightIconClasses = classNames(styles['icon-right'], styles[`icon-right--size-${size}`]);
  const statusIconClasses = classNames(styles['icon-status'], styles[`icon-status--size-${size}`]);

  const statusIcon = (message || status !== 'default') && (
    <StatusIcon
      className={statusIconClasses}
      status={status === 'default' || (!status && message) ? 'info' : status}
      variant={variant === 'filled' ? 'filled' : 'outlined'}
      size={size}
    />
  );

  return (
    <label className={wrapperClasses} ref={wrapperRef}>
      {prefix && <span className={prefixClasses}>{prefix}</span>}

      {!prefix && IconLeft && <IconLeft className={leftIconClasses} />}

      <input {...props} className={styles.field} ref={ref} />

      {postfix && <span className={postfixClasses}>{postfix}</span>}

      {!postfix && !statusIcon && IconRight && <IconRight className={rightIconClasses} />}

      {statusIcon}
    </label>
  );
}
