import React, { useState, useMemo } from 'react';

import { CloseIcon, PathDownIcon } from 'icons';
import { useTheme } from 'contexts';
import { classNames } from 'utils';
import styles from './select.module.scss';

export interface ISelectProps {
  className?: string;
  size?: 's' | 'm' | 'l';
  colorScheme?: 'light' | 'dark';
  autoColor?: boolean;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  controlled?: boolean;
  id?: string;
  name?: string;
  error?: string;
  placeholder?: string;
  emptyText?: string;
  value?: TSelectValue;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  options?: ISelectOption[];
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>, value: TSelectValue) => void;
  onFocus?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  refLink?: React.RefObject<HTMLInputElement> | null;
}

export interface ISelectOption<T = TSelectValue> {
  label: string;
  value: T;
}

export type TSelectValue = string | number;

export function Select({
  className,
  size = 'm',
  colorScheme = 'light',
  autoColor = true,
  icon: Icon,
  controlled = false,
  id,
  name = `select-${Math.random()}`,
  placeholder,
  value = '',
  disabled,
  options,
  onChange,
}: ISelectProps) {
  const [innerValue, setInnerValue] = useState(value);
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();
  const optionsValues = useMemo(
    () =>
      options?.reduce((prev, current) => {
        prev[current.value] = current.label;

        return prev;
      }, {} as Record<string, string>) || {},
    [options]
  );
  const currentValue = controlled ? value : innerValue;

  const clickHandler = () => {
    !disabled && setExpanded(!expanded);
  };

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(evt, evt.target.value);

    if (!controlled) {
      setInnerValue(evt.target.value);
    }

    setExpanded(false);
  };

  return (
    <div className={classNames(styles.select, styles[`select--${size}`], className)} id={id} onClick={clickHandler}>
      {Icon && (
        <Icon
          className={classNames(
            styles.icon,
            styles[`icon--${size}`],
            styles[`icon--${colorScheme}`],
            autoColor ? styles[`icon--${theme}-mode`] : undefined
          )}
        />
      )}

      <input
        className={classNames(
          styles.output,
          styles[`output--${size}`],
          styles[`output--${colorScheme}`],
          autoColor ? styles[`output--${theme}-mode`] : undefined,
          Icon ? styles['output--with-icon'] : undefined,
          currentValue ? styles['output--with-value'] : undefined,
          expanded ? styles['output--expanded'] : undefined
        )}
        placeholder={placeholder}
        value={optionsValues[currentValue] ?? ''}
        readOnly
        disabled={disabled}
      />

      {currentValue && (
        <label
          className={classNames(
            styles.reset,
            styles[`reset--${size}`],
            styles[`reset--${colorScheme}`],
            autoColor ? styles[`reset--${theme}-mode`] : undefined
          )}>
          <CloseIcon />
          <input type="radio" name={name} value="" onChange={changeHandler} />
        </label>
      )}

      <PathDownIcon
        className={classNames(
          styles.arrow,
          styles[`arrow--${size}`],
          styles[`arrow--${colorScheme}`],
          autoColor ? styles[`arrow--${theme}-mode`] : undefined,
          expanded ? styles['arrow--expanded'] : undefined
        )}
      />

      <div
        className={classNames(
          styles.dropdown,
          styles[`dropdown--${size}`],
          styles[`dropdown--${colorScheme}`],
          autoColor ? styles[`dropdown--${theme}-mode`] : undefined,
          expanded ? styles['dropdown--expanded'] : undefined
        )}>
        {options?.map(({ value, label }) => (
          <label
            className={classNames(
              styles.option,
              styles[`option--${size}`],
              styles[`option--${colorScheme}`],
              autoColor ? styles[`option--${theme}-mode`] : undefined
            )}
            key={value}>
            {label}
            <input type="radio" name={name} value={value} onChange={changeHandler} />
          </label>
        ))}
      </div>
    </div>
  );
}
