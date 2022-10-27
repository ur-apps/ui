import React from 'react';

import { Input, Button } from 'components';
import type { IInputProps, IButtonProps } from 'components';
import { classNames } from 'utils';
import styles from './input-with-button.module.scss';

export interface IInputWithButtonProps {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
  buttonAppearance?: IButtonProps['appearance'];
  inputColorScheme?: IInputProps['colorScheme'];
  buttonColorScheme?: IButtonProps['colorScheme'];
  autoColor?: boolean;
  inputIcon?: IInputProps['icon'];
  inputType?: IInputProps['type'];
  inputMode?: IInputProps['inputMode'];
  inputId?: IInputProps['id'];
  buttonId?: IButtonProps['id'];
  inputName?: IInputProps['name'];
  buttonName?: IButtonProps['name'];
  error?: IInputProps['error'];
  placeholder?: IInputProps['placeholder'];
  value?: IInputProps['value'];
  pattern?: IInputProps['pattern'];
  minLength?: IInputProps['minLength'];
  maxLength?: IInputProps['maxLength'];
  min?: IInputProps['min'];
  max?: IInputProps['max'];
  step?: IInputProps['step'];
  required?: IInputProps['required'];
  readOnly?: IInputProps['readOnly'];
  disabled?: boolean;
  onChange?: IInputProps['onChange'];
  onFocus?: IInputProps['onFocus'];
  onBlur?: IInputProps['onBlur'];
  onSubmit?: (value: string) => void;
  children: IButtonProps['children'];
  inputRefLink?: IInputProps['refLink'];
  buttonRefLink?: IButtonProps['refLink'];
}

export function InputWithButton({
  className,
  inputClassName,
  buttonClassName,
  size,
  buttonAppearance,
  inputColorScheme,
  buttonColorScheme,
  autoColor,
  inputIcon,
  inputType,
  inputMode,
  inputId,
  buttonId,
  inputName,
  buttonName,
  error,
  placeholder,
  value,
  pattern,
  minLength,
  maxLength,
  min,
  max,
  step,
  required,
  readOnly,
  disabled,
  onChange,
  onFocus,
  onBlur,
  onSubmit,
  children,
  inputRefLink,
  buttonRefLink,
}: IInputWithButtonProps) {
  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // @ts-ignore
    onSubmit && onSubmit(evt.target[0].value);
  };

  return (
    <form className={classNames(styles.form, className)} onSubmit={submitHandler}>
      <Input
        className={classNames(styles.input, inputClassName)}
        size={size}
        colorScheme={inputColorScheme}
        autoColor={autoColor}
        icon={inputIcon}
        type={inputType}
        inputMode={inputMode}
        id={inputId}
        name={inputName}
        error={error}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        step={step}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        refLink={inputRefLink}
      />
      <Button
        className={classNames(styles.button, buttonClassName)}
        size={size}
        appearance={buttonAppearance}
        colorScheme={buttonColorScheme}
        autoColor={autoColor}
        type="submit"
        id={buttonId}
        name={buttonName}
        disabled={disabled}
        refLink={buttonRefLink}>
        {children}
      </Button>
    </form>
  );
}
