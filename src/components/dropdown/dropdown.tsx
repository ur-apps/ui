import React, { forwardRef, useId } from 'react';

import { CssVariableGroup } from 'contexts';
import { classNames } from 'utils';

import { Portal } from '../portal';
import { Option } from '../option';

import { IDropdownComponent, IDropdownProps } from './dropdown.types';
import styles from './dropdown.module.scss';

export const Dropdown = forwardRef(function Dropdown<M extends boolean = false>(
  {
    className,
    variant = 'filled',
    shape = 'default',
    size = 'm',
    isOpen,
    value,
    multiple,
    options,
    onChange,
    ...props
  }: IDropdownProps<M>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const classes = classNames(
    CssVariableGroup.DropdownTokens,
    styles.dropdown,
    styles[`dropdown--variant-${variant}`],
    styles[`dropdown--shape-${shape}`],
    styles[`dropdown--size-${size}`],
    className
  );
  const name = useId();

  return isOpen ? (
    <Portal>
      <div className={classes} {...props} ref={ref}>
        {options.map((option) => (
          <Option
            className={styles.option}
            size={size}
            variant={variant}
            shape={shape}
            type={multiple ? 'checkbox' : 'radio'}
            name={props.name || name}
            checked={
              value
                ? multiple && Array.isArray(value)
                  ? value?.includes(option.value)
                  : value === option.value
                : undefined
            }
            onChange={onChange}
            key={option.value}
            {...option}
          />
        ))}
      </div>
    </Portal>
  ) : null;
}) as IDropdownComponent;
