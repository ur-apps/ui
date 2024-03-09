import { InputHTMLAttributes } from 'react';
import { TClasses } from 'utils';

export type InputVariant = 'filled' | 'outlined' | 'clear';
export type InputShape = 'default' | 'brick' | 'round';
export type InputSize = 's' | 'm' | 'l';
export type InputState = 'default' | 'hover' | 'focus';

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'size'> {
  /**
   * @description additinal css class name
   */
  className?: string | TClasses;
  /**
   * @description input variant
   * @default "fill"
   */
  variant?: InputVariant;
  /**
   * @description input corner shape
   * @default "default"
   */
  shape?: InputShape;
  /**
   * @description input size
   * @default "m"
   */
  size?: InputSize;
  disabled?: boolean;
}

export interface IInputStyleTokens {
  color?: {
    bg?: {
      [variant in InputVariant]?: {
        [state in InputState]?: string;
      };
    };
    text?: {
      [variant in InputVariant]?: {
        [color in InputState]?: string;
      };
    };
    border?: {
      [variant in InputVariant]?: {
        [color in InputState]?: string;
      };
    };
  };
  height?: {
    [size in InputSize]?: string;
  };
  'horizontal-padding'?: {
    [size in InputSize]?: string;
  };
  'vertical-padding'?: {
    [size in InputSize]?: string;
  };
  'border-width'?: {
    [size in InputSize]?: string;
  };
  'border-radius'?: {
    [size in InputSize]?: string;
  };
  'font-size'?: {
    [size in InputSize]?: string;
  };
  'line-height'?: {
    [size in InputSize]?: string;
  };
  'font-weight'?: {
    [size in InputSize]?: string;
  };
}
