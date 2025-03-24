import React, { InputHTMLAttributes } from 'react';
import { TClasses } from '@ur-apps/common-fe';

export type TSwitchColor = 'primary' | 'accent' | 'success' | 'warning' | 'danger';
export type TSwitchShape = 'default' | 'brick' | 'round';
export type TSwitchSize = 's' | 'm' | 'l';
export type TSwitchState = 'default' | 'hover' | 'checked';

export interface ISwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type' | 'size'> {
  /**
   * additinal css class name
   */
  className?: string | TClasses;
  /**
   * switch color scheme
   * @default primary
   * */
  color?: TSwitchColor;
  /**
   * switch corner shape
   * @default default
   */
  shape?: TSwitchShape;
  /**
   * switch size
   * @default m
   */
  size?: TSwitchSize;
  /**
   * contents of the checked container
   */
  checkedChildren?: React.ReactNode;
  /**
   * contents of the unchecked container
   */
  uncheckedChildren?: React.ReactNode;
  /**
   * is loading
   * @default false
   */
  isLoading?: boolean;
  /**
   * is switch disabled
   * @default false
   */
  disabled?: boolean;
}

export interface ISwitchStyleTokens {
  color?: {
    bg?: {
      [color in TSwitchColor]?: {
        [state in TSwitchState]?: string;
      };
    };
    text?: {
      [color in TSwitchColor]?: {
        [state in TSwitchState]?: string;
      };
    };
    thumb?: {
      [color in TSwitchColor]?: {
        [state in TSwitchState]?: string;
      };
    };
    border?: {
      [color in TSwitchColor]?: {
        [state in TSwitchState]?: string;
      };
    };
    loader?: {
      [color in TSwitchColor]?: {
        [state in TSwitchState]?: string;
      };
    };
  };
  height?: {
    [size in TSwitchSize]?: string;
  };
  'vertical-padding'?: {
    [size in TSwitchSize]?: string;
  };
  'horizontal-padding'?: {
    [size in TSwitchSize]?: string;
  };
  'border-width'?: {
    [size in TSwitchSize]?: string;
  };
  'border-radius'?: {
    [size in TSwitchSize]?: string;
  };
  'font-size'?: {
    [size in TSwitchSize]?: string;
  };
  'line-height'?: {
    [size in TSwitchSize]?: string;
  };
  'font-weight'?: {
    [size in TSwitchSize]?: string;
  };
  'content-vertical-padding'?: {
    [size in TSwitchSize]?: string;
  };
  'content-horizontal-padding'?: {
    [size in TSwitchSize]?: string;
  };
  'thumb-padding'?: {
    [size in TSwitchSize]?: string;
  };
  'loader-width'?: {
    [size in TSwitchSize]?: string;
  };
  transition?: string;
}
