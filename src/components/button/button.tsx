import React from 'react';

import { useTheme } from 'context';
import { classNames } from 'utils';
import styles from './button.module.scss';

export interface IButtonProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  appearance?: 'fill' | 'outline' | 'text';
  colorScheme?: 'white' | 'gray' | 'black' | 'blue' | 'red' | 'green';
  autoColor?: boolean;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  name?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  refLink?: React.RefObject<HTMLButtonElement>;
}

Button.defaultProps = {
  size: 'medium',
  appearance: 'fill',
  colorScheme: 'blue',
  autoColor: true,
  type: 'button',
} as IButtonProps;

export function Button({
  className,
  size,
  appearance,
  colorScheme,
  autoColor,
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
        autoColor ? styles[`button--${theme}`] : undefined,
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
