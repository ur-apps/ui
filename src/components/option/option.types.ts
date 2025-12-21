import { InputHTMLAttributes, Ref } from 'react';
import { TClasses } from '@ur-apps/common-fe';

export type TOptionVariant = 'filled' | 'outlined' | 'clear';
export type TOptionShape = 'default' | 'brick' | 'round';
export type TOptionSize = 's' | 'm' | 'l';
export type TOptionState = 'default' | 'hover' | 'selected';
export type TOptionValue = string | number;

export interface IOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'size' | 'type' | 'value'> {
  /**
   * additional css class name
   */
  className?: string | TClasses;
  /**
   * option variant
   * @default "filled"
   */
  variant?: TOptionVariant;
  /**
   * option corner shape
   * @default "default"
   */
  shape?: TOptionShape;
  /**
   * option size
   * @default "m"
   */
  size?: TOptionSize;
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
  value: TOptionValue;
  /**
   * option label
   */
  label: string;
  /**
   * is option disabled
   */
  disabled?: boolean;
  /**
   * option ref
   */
  ref?: Ref<HTMLLabelElement>;
}

export interface IOptionStyleTokens {
  color?: {
    bg?: {
      [variant in TOptionVariant]?: {
        [state in TOptionState]?: string;
      };
    };
    text?: {
      [variant in TOptionVariant]?: {
        [color in TOptionState]?: string;
      };
    };
    border?: {
      [variant in TOptionVariant]?: {
        [color in TOptionState]?: string;
      };
    };
  };
  height?: {
    [size in TOptionSize]?: string;
  };
  'horizontal-padding'?: {
    [size in TOptionSize]?: string;
  };
  'vertical-padding'?: {
    [size in TOptionSize]?: string;
  };
  'border-width'?: {
    [size in TOptionSize]?: string;
  };
  'border-radius'?: {
    [size in TOptionSize]?: string;
  };
  'font-size'?: {
    [size in TOptionSize]?: string;
  };
  'line-height'?: {
    [size in TOptionSize]?: string;
  };
  'font-weight'?: {
    [size in TOptionSize]?: string;
  };
}
