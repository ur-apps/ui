import { ChangeEvent, HTMLAttributes, ReactNode } from 'react';
import { TClasses } from '@urapps/react';

import { IOptionProps, TOptionShape, TOptionSize, TOptionValue, TOptionVariant } from '../option';

export type TDropdownVariant = TOptionVariant;
export type TDropdownShape = TOptionShape;
export type TDropdownSize = TOptionSize;
export type TDropdownState = 'default' | 'empty';
export type TDropdownValue<M extends boolean> = M extends true ? TOptionValue[] : TOptionValue;

export interface IDropdownProps<M extends boolean = false> extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'className' | 'onChange'
> {
  /**
   * additional css class name(s)
   */
  className?: string | TClasses;
  /**
   * dropdown variant
   * @default "filled"
   */
  variant?: TDropdownVariant;
  /**
   * dropdown corner shape
   * @default "default"
   */
  shape?: TDropdownShape;
  /**
   * dropdown size
   * @default "m"
   */
  size?: TDropdownSize;
  /**
   * is dropdown open (shown)
   * @default false
   */
  isOpen: boolean;
  /**
   * dropdown form name
   */
  name?: string;
  /**
   * dropdown value(s)
   */
  value?: TDropdownValue<M>;
  /**
   * This property determines whether multiple options can be selected within the same name. In other words, when true it works like checkboxes, when false it works like radio buttons
   * @default false
   */
  multiple?: M;
  /**
   * options list
   */
  options: IOptionProps[];
  /**
   * content shown when the options list is empty
   * @default "No options"
   */
  emptyText?: ReactNode;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  ref?: React.ForwardedRef<HTMLDivElement>;
}

export interface IDropdownStyleTokens {
  color?: {
    bg?: {
      [variant in TDropdownVariant]?: {
        [state in TDropdownState]?: string;
      };
    };
    border?: {
      [variant in TDropdownVariant]?: {
        [color in TDropdownState]?: string;
      };
    };
    text?: {
      [variant in TDropdownVariant]?: {
        [color in TDropdownState]?: string;
      };
    };
  };
  'box-shadow'?: string;
  height?: {
    [size in TDropdownSize]?: string;
  };
  'horizontal-padding'?: {
    [size in TDropdownSize]?: string;
  };
  'border-width'?: {
    [size in TDropdownSize]?: string;
  };
  'border-radius'?: {
    [size in TDropdownSize]?: string;
  };
  'font-size'?: {
    [size in TDropdownSize]?: string;
  };
  'line-height'?: {
    [size in TDropdownSize]?: string;
  };
  'font-weight'?: {
    [size in TDropdownSize]?: string;
  };
}
