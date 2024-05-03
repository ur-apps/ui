import { ChangeEvent, HTMLAttributes } from 'react';

import { TClasses } from 'utils';

import { IOptionProps } from '../option';

export type DropdownVariant = 'filled' | 'outlined' | 'clear';
export type DropdownShape = 'default' | 'brick' | 'round';
export type DropdownSize = 's' | 'm' | 'l';
export type DropdownState = 'default';

export interface IDropdownProps<M extends boolean>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'onChange'> {
  /**
   * additinal css class name(s)
   */
  className?: string | TClasses;
  /**
   * dropdown variant
   * @default "filled"
   */
  variant?: DropdownVariant;
  /**
   * dropdown corner shape
   * @default "default"
   */
  shape?: DropdownShape;
  /**
   * dropdown size
   * @default "m"
   */
  size?: DropdownSize;
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
  value?: M extends true ? Array<string | number> : string | number;
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

export type IDropdownComponent = <M extends boolean = false>(props: IDropdownProps<M>) => React.ReactElement;

export interface IDropdownStyleTokens {
  color?: {
    bg?: {
      [variant in DropdownVariant]?: {
        [state in DropdownState]?: string;
      };
    };
    border?: {
      [variant in DropdownVariant]?: {
        [color in DropdownState]?: string;
      };
    };
  };
  height?: {
    [size in DropdownSize]?: string;
  };
  'border-width'?: {
    [size in DropdownSize]?: string;
  };
  'border-radius'?: {
    [size in DropdownSize]?: string;
  };
}
