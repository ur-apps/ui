import { InputHTMLAttributes } from 'react';

import { TClasses } from 'utils';

export type OptionVariant = 'filled' | 'outlined' | 'clear';
export type OptionShape = 'default' | 'brick' | 'round';
export type OptionSize = 's' | 'm' | 'l';
export type OptionState = 'default' | 'hover' | 'selected';

export interface IOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type' | 'size' | 'type' | 'value'> {
  /**
   * additinal css class name
   */
  className?: string | TClasses;
  /**
   * option variant
   * @default "filled"
   */
  variant?: OptionVariant;
  /**
   * option corner shape
   * @default "default"
   */
  shape?: OptionShape;
  /**
   * option size
   * @default "m"
   */
  size?: OptionSize;
  /**
   * this property determines whether multiple options can be selected within the same name.
   * @default radio
   */
  type?: 'radio' | 'checkbox';
  /**
   * option form name
   */
  name?: string;
  /**
   * option value
   */
  value: string | number;
  /**
   * option label
   */
  label: string;
  /**
   * is option disabled
   */
  disabled?: boolean;
}

export interface IOptionStyleTokens {
  color?: {
    bg?: {
      [variant in OptionVariant]?: {
        [state in OptionState]?: string;
      };
    };
    text?: {
      [variant in OptionVariant]?: {
        [color in OptionState]?: string;
      };
    };
    border?: {
      [variant in OptionVariant]?: {
        [color in OptionState]?: string;
      };
    };
  };
  height?: {
    [size in OptionSize]?: string;
  };
  'horizontal-padding'?: {
    [size in OptionSize]?: string;
  };
  'vertical-padding'?: {
    [size in OptionSize]?: string;
  };
  'border-width'?: {
    [size in OptionSize]?: string;
  };
  'border-radius'?: {
    [size in OptionSize]?: string;
  };
  'font-size'?: {
    [size in OptionSize]?: string;
  };
  'line-height'?: {
    [size in OptionSize]?: string;
  };
  'font-weight'?: {
    [size in OptionSize]?: string;
  };
}
