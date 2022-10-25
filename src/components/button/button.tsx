import React from 'react';

import { useTheme } from 'contexts';
import { classNames } from 'utils';
import styles from './button.module.scss';

export interface IButtonProps {
  className?: string;
  size?: 's' | 'm' | 'l';
  appearance?: 'fill' | 'outline' | 'text';
  colorScheme?: 'white' | 'black' | 'blue' | 'red' | 'green';
  autoColor?: boolean;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  name?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  refLink?: React.RefObject<HTMLButtonElement>;
}

export function Button({
  className,
  size = 'm',
  appearance = 'fill',
  colorScheme = 'blue',
  autoColor = true,
  type = 'button',
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
        autoColor ? styles[`button--${theme}-mode`] : undefined,
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
