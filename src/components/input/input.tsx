import React from 'react';

import { useTheme } from 'context';
import { classNames } from 'utils';
import styles from './input.module.scss';

export interface IInputProps {
  className?: string;
  fieldClassName?: string;
  size?: 'small' | 'medium' | 'large';
  appearance?: 'fill' | 'outline';
  colorScheme?: 'lightgray' | 'darkgray';
  autoColor?: boolean;
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
  error?: string;
  placeholder?: string;
  value?: string | number;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  refLink?: React.RefObject<HTMLInputElement> | null;
}

Input.defaultProps = {
  size: 'medium',
  appearance: 'fill',
  colorScheme: 'gray',
  autoColor: true,
  type: 'text',
};

export function Input({
  className,
  size,
  appearance,
  colorScheme,
  autoColor,
  placeholder,
  disabled,
  ...props
}: IInputProps) {
  const { theme } = useTheme();

  return (
    <input
      type="text"
      className={classNames(
        styles.input,
        styles[`input--${size}`],
        styles[`input--${appearance}`],
        styles[`input--${colorScheme}`],
        autoColor ? styles[`input--${theme}`] : undefined,
        className
      )}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  );
}
