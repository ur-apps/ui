import { classNames } from '@ur-apps/common-fe';

import { CssVariableGroup } from 'contexts';

import { IOptionProps } from './option.types';
import styles from './option.module.scss';

export function Option({
  className,
  variant = 'filled',
  shape = 'default',
  size = 'm',
  type = 'radio',
  label,
  ref,
  ...props
}: IOptionProps) {
  const classes = classNames(
    CssVariableGroup.OptionTokens,
    styles.option,
    styles[`option--variant-${variant}`],
    styles[`option--shape-${shape}`],
    styles[`option--size-${size}`],
    className
  );

  return (
    <label className={classes} ref={ref}>
      <input className={styles.input} {...props} type={type} />
      {label}
    </label>
  );
}
