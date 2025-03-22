import React, { Ref } from 'react';

import { IDropdownProps } from '../dropdown';
import { IInputProps, InputShape, InputSize, InputVariant } from '../input';
import { TOptionVariant } from '../option';

export type SelectVariant = InputVariant;
export type SelectShape = InputShape;
export type SelectSize = InputSize;
export type SelectState = 'default' | 'hover' | 'focus';
export type TSelectValue<M extends boolean> = IDropdownProps<M>['value'];

export interface ISelectProps<M extends boolean = false> extends Omit<IInputProps, 'type' | 'value' | 'onChange'> {
  /**
   * select variant
   * @default "filled"
   */
  variant?: SelectVariant;
  /**
   * dropdown variant,
   * overriding the default variant (variant field),
   * necessary in cases when variant = clear and we need to use another dropdown variant
   * @default "filled"
   */
  dropdownVariant?: TOptionVariant;
  /**
   * select corner shape
   * @default "default"
   */
  shape?: SelectShape;
  /**
   * select size
   * @default "m"
   */
  size?: SelectSize;
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
  disabled?: boolean;
  /**
   * refenrence to the select input
   */
  ref?: Ref<HTMLInputElement>;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>, value: TSelectValue<M>) => void;
}
