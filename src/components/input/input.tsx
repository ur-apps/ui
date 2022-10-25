import React from 'react';

import { useTheme } from 'contexts';
import { InfoIcon } from 'icons';
import { classNames } from 'utils';
import { Tooltip } from '../tooltip';
import styles from './input.module.scss';

export interface IInputProps {
  className?: string;
  fieldClassName?: string;
  size?: 's' | 'm' | 'l';
  colorScheme?: 'light' | 'dark';
  autoColor?: boolean;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  type?:
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'time'
    | 'email'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'url';
  inputMode?: 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  info?: string | string[];
  error?: string | string[];
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  refLink?: React.RefObject<HTMLInputElement> | null;
}

export function Input({
  className,
  fieldClassName,
  size = 'm',
  colorScheme = 'light',
  autoColor = true,
  icon: Icon,
  type = 'text',
  placeholder,
  info,
  error,
  readOnly,
  disabled,
  refLink,
  ...props
}: IInputProps) {
  const { theme } = useTheme();

  return (
    <label className={classNames(styles.label, className)}>
      {Icon && (
        <Icon
          className={classNames(
            styles.icon,
            styles[`icon--${size}`],
            styles[`icon--${colorScheme}`],
            autoColor ? styles[`icon--${theme}-mode`] : null
          )}
        />
      )}
      <input
        type={type}
        className={classNames(
          styles.input,
          styles[`input--${size}`],
          styles[`input--${colorScheme}`],
          autoColor ? styles[`input--${theme}-mode`] : null,
          Icon ? styles['input--with-icon'] : null,
          info || error ? styles['input--with-info'] : null,
          fieldClassName
        )}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        ref={refLink}
        {...props}
      />

      {(info || error) && (
        <Tooltip
          className={classNames(styles.info, styles[`info--${size}`])}
          size="s"
          color={colorScheme}
          autoColor={autoColor}
          text={error || info}>
          <InfoIcon
            className={classNames(
              styles.info__icon,
              styles[`info__icon--${size}`],
              styles[`info__icon--${colorScheme}`],
              autoColor ? styles[`info__icon--${theme}-mode`] : null,
              error ? styles['info__icon--error'] : null
            )}
          />
        </Tooltip>
      )}
    </label>
  );
}
