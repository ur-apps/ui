import { ButtonHTMLAttributes } from 'react';

import { TClasses } from 'utils';

export type ButtonVariant = 'filled' | 'outlined' | 'ghost' | 'clear';
export type ButtonColor = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger';
export type ButtonShape = 'default' | 'brick' | 'round';
export type ButtonSize = 's' | 'm' | 'l';
export type ButtonState = 'default' | 'hover' | 'active';

export interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  /**
   * @description additinal css class name
   */
  className?: string | TClasses;
  /**
   * @description button variant
   * @default "filled"
   */
  variant?: ButtonVariant;
  /**
   * @description button color scheme
   * @default "primary"
   * */
  color?: ButtonColor;
  /**
   * @description button corner shape
   * @default "default"
   */
  shape?: ButtonShape;
  /**
   * @description button size
   * @default "m"
   */
  size?: ButtonSize;
  /**
   * @description button label
   * */
  label?: string;
  /**
   * @description is button disabled
   */
  disabled?: boolean;
}

export interface IButtonStyleTokens {
  color?: {
    bg?: {
      [variant in ButtonVariant]?: {
        [color in ButtonColor]?: {
          [state in ButtonState]?: string;
        };
      };
    };
    text?: {
      [variant in ButtonVariant]?: {
        [color in ButtonColor]?: string;
      };
    };
    border?: {
      [variant in ButtonVariant]?: {
        [color in ButtonColor]?: string;
      };
    };
  };
  height?: {
    [size in ButtonSize]?: string;
  };
  'horizontal-padding'?: {
    [size in ButtonSize]?: string;
  };
  'vertical-padding'?: {
    [size in ButtonSize]?: string;
  };
  'border-width'?: {
    [size in ButtonSize]?: string;
  };
  'border-radius'?: {
    [size in ButtonSize]?: string;
  };
  'font-size'?: {
    [size in ButtonSize]?: string;
  };
  'line-height'?: {
    [size in ButtonSize]?: string;
  };
  'font-weight'?: {
    [size in ButtonSize]?: string;
  };
}
