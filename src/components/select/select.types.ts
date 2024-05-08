import React from 'react';

import { IDropdownProps } from '../dropdown';
import { IInputProps } from '../input';

export type SelectVariant = 'filled' | 'outlined' | 'clear';
export type SelectShape = 'default' | 'brick' | 'round';
export type SelectSize = 's' | 'm' | 'l';
export type SelectState = 'default' | 'hover' | 'focus';
export type TSelectValue<M extends boolean> = IDropdownProps<M>['value'];

export interface ISelectProps<M extends boolean = false> extends Omit<IInputProps, 'type' | 'value' | 'onChange'> {
  /**
   * select variant
   * @default "filled"
   */
  variant?: IInputProps['variant'];
  /**
   * dropdown variant,
   * overriding the default variant (variant field),
   * necessary in cases when variant = clear and we need to use another dropdown variant
   * @default "filled"
   */
  dropdownVariant?: IDropdownProps['variant'];
  /**
   * select corner shape
   * @default "default"
   */
  shape?: IInputProps['shape'];
  /**
   * select size
   * @default "m"
   */
  size?: IInputProps['size'];
  /**
   * select options
   */
  options: IDropdownProps<M>['options'];
  /**
   * select value(s)
   */
  value?: TSelectValue<M>;
  /**
   * This property determines whether multiple options can be selected within the same name. In other words, when true it works like checkboxes, when false it works like radio buttons
   * @default false
   */
  multiple?: M;
  /**
   * is select disabled
   * @default false
   */
  disabled?: IInputProps['disabled'];
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>, value: TSelectValue<M>) => void;
}

export type ISelectComponent = <M extends boolean = false>(props: ISelectProps<M>) => React.ReactElement;
