import { forwardRef } from 'react';

import { CssVariableGroup } from 'contexts';
import { classNames } from 'utils';

import { IOptionProps } from './option.types';
import styles from './option.module.scss';

export const Option = forwardRef<HTMLLabelElement, IOptionProps>(function Option(
  { className, variant = 'filled', shape = 'default', size = 'm', type = 'radio', label, ...props },
  ref
) {
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
});
