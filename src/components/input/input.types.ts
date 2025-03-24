import { InputHTMLAttributes, Ref } from 'react';
import { TClasses } from '@ur-apps/common-fe';

export type InputVariant = 'filled' | 'outlined' | 'clear';
export type InputShape = 'default' | 'brick' | 'round';
export type InputSize = 's' | 'm' | 'l';
export type InputState = 'default' | 'hover' | 'focus';

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type' | 'size'> {
  /**
   * additinal css class name
   */
  className?: string | TClasses;
  /**
   * input variant
   * @default "filled"
   */
  variant?: InputVariant;
  /**
   * input corner shape
   * @default "default"
   */
  shape?: InputShape;
  /**
   * input size
   * @default "m"
   */
  size?: InputSize;
  /**
   * input type
   * @default text
   */
  type?:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  /**
   * is input disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * additional text before input
   */
  prefix?: string;
  /**
   * additional text after input
   */
  postfix?: string;
  /**
   * icon before input
   */
  iconLeft?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  /**
   * icon after input
   */
  iconRight?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  /**
   * reference to the input
   */
  ref?: Ref<HTMLInputElement>;
  /**
   * reference to the input wrapper
   */
  wrapperRef?: Ref<HTMLLabelElement>;
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
    prefix?: {
      [variant in InputVariant]?: {
        [color in InputState]?: string;
      };
    };
    postfix?: {
      [variant in InputVariant]?: {
        [color in InputState]?: string;
      };
    };
    'icon-left'?: {
      [variant in InputVariant]?: {
        [color in InputState]?: string;
      };
    };
    'icon-right'?: {
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
  'icon-left-height'?: {
    [size in InputSize]?: string;
  };
  'icon-right-height'?: {
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
  'prefix-font-size'?: {
    [size in InputSize]?: string;
  };
  'prefix-line-height'?: {
    [size in InputSize]?: string;
  };
  'prefix-font-weight'?: {
    [size in InputSize]?: string;
  };
  'postfix-font-size'?: {
    [size in InputSize]?: string;
  };
  'postfix-line-height'?: {
    [size in InputSize]?: string;
  };
  'postfix-font-weight'?: {
    [size in InputSize]?: string;
  };
}
