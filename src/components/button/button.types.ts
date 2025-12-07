import { ButtonHTMLAttributes, Ref } from 'react';
import { TClasses } from '@ur-apps/common-fe';

export type ButtonVariant = 'filled' | 'outlined' | 'ghost' | 'clear';
export type ButtonColor = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger';
export type ButtonShape = 'default' | 'brick' | 'round';
export type ButtonSize = 's' | 'm' | 'l';
export type ButtonState = 'default' | 'hover' | 'active';

export interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  /**
   * additinal css class name
   */
  className?: string | TClasses;
  /**
   * button variant
   * @default "filled"
   */
  variant?: ButtonVariant;
  /**
   * button color scheme
   * @default "primary"
   * */
  color?: ButtonColor;
  /**
   * button corner shape
   * @default "default"
   */
  shape?: ButtonShape;
  /**
   * button size
   * @default "m"
   */
  size?: ButtonSize;
  /**
   * button label
   * */
  label?: string;
  /**
   * is button disabled
   */
  disabled?: boolean;
  /**
   * ref to button element
   */
  ref?: Ref<HTMLButtonElement>;
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
