import { ChangeEvent, HTMLAttributes } from 'react';
import { TClasses } from '@ur-apps/common-fe';

import { IOptionProps, TOptionShape, TOptionSize, TOptionValue, TOptionVariant } from '../option';

export type TDropdownVariant = TOptionVariant;
export type TDropdownShape = TOptionShape;
export type TDropdownSize = TOptionSize;
export type TDropdownState = 'default';
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
  };
  height?: {
    [size in TDropdownSize]?: string;
  };
  'border-width'?: {
    [size in TDropdownSize]?: string;
  };
  'border-radius'?: {
    [size in TDropdownSize]?: string;
  };
}
