import { classNames } from '@urapps/react';

import { CssVariableGroup } from '../../contexts';
import { useName } from '../../hooks';
import { Option } from '../option';
import { Portal } from '../portal';

import { IDropdownProps } from './dropdown.types';
import styles from './dropdown.module.scss';

export function Dropdown<M extends boolean = false>({
  className,
  variant = 'filled',
  shape = 'default',
  size = 'm',
  isOpen,
  value,
  multiple,
  options,
  emptyText = 'No options',
  onChange,
  ...props
}: IDropdownProps<M>) {
  const name = useName(props.name);
  const classes = classNames(
    CssVariableGroup.DropdownTokens,
    styles.dropdown,
    styles[`dropdown--variant-${variant}`],
    styles[`dropdown--shape-${shape}`],
    styles[`dropdown--size-${size}`],
    className
  );

  return isOpen ? (
    <Portal>
      <div className={classes} {...props}>
        {options.length === 0 && <div className={styles.empty}>{emptyText}</div>}

        {options.map((option) => (
          <Option
            className={styles.option}
            size={size}
            variant={variant}
            shape={shape}
            type={multiple ? 'checkbox' : 'radio'}
            name={name}
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
}
