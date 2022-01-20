import React from 'react';

import { useTheme } from 'context';
import { classNames } from 'utils';
import styles from './button.module.scss';

export interface IButtonProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  appearance?: 'fill' | 'outline' | 'text';
  colorScheme?: 'white' | 'gray' | 'black' | 'blue' | 'red' | 'green';
  manualTheme?: 'light' | 'dark';
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  name?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: ((evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  refLink?: React.RefObject<HTMLButtonElement>;
}

Button.defaultProps = {
  size: 'medium',
  appearance: 'outline',
  colorScheme: 'gray',
  type: 'button',
};

export function Button({
  className,
  size,
  appearance,
  colorScheme,
  manualTheme,
  type,
  id,
  name,
  disabled,
  onClick,
  refLink,
  children,
  ...props
}: IButtonProps) {
  const { theme } = useTheme();

  return (
    <button
      className={classNames(
        styles.button,
        styles[`button--${size}`],
        styles[`button--${appearance}`],
        styles[`button--${colorScheme}`],
        styles[`button--${manualTheme ?? theme}`],
        className
      )}
      type={type}
      id={id}
      name={name}
      disabled={disabled}
      onClick={onClick}
      ref={refLink}
      {...props}>
      {children}
    </button>
  );
}
