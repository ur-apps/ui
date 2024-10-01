import { ChangeEvent, HTMLAttributes } from 'react';

import { TClasses } from 'utils';

import { ISegmentProps, TSegmentColor, TSegmentShape, TSegmentSize, TSegmentValue, TSegmentVariant } from '../segment';

export type TSegmentedControlVariant = TSegmentVariant;
export type TSegmentedControlColor = TSegmentColor;
export type TSegmentedControlShape = TSegmentShape;
export type TSegmentedControlSize = TSegmentSize;
export type TSegmentedControlValue<M extends boolean> = M extends true ? TSegmentValue[] : TSegmentValue;

export interface ISegmentedControlProps<M extends boolean = false>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'color' | 'onChange'> {
  /**
   * Additional CSS class name for the segmented control.
   */
  className?: string | TClasses;
  /**
   * The variant of the segmented control.
   * @default filled
   */
  variant?: TSegmentedControlVariant;
  /**
   * The color scheme of the segmented control.
   * @default primary
   */
  color?: TSegmentedControlColor;
  /**
   * The corner shape of the segmented control.
   * @default default
   */
  shape?: TSegmentedControlShape;
  /**
   * The size of the segmented control.
   * @default m
   */
  size?: TSegmentedControlSize;
  /**
   * The name of the segmented control (form).
   */
  name?: string;
  /**
   * The value(s) of the segmented control.
   */
  value?: TSegmentedControlValue<M>;
  /**
   * Determines whether multiple options can be selected within the same name.
   * When true, it works like checkboxes. When false, it works like radio buttons.
   * @default false
   */
  multiple?: M;
  /**
   * The list of options for the segmented control.
   */
  options: Omit<ISegmentProps, 'variant' | 'color' | 'shape' | 'size'>[];
  /**
   * The event handler for the onChange event of the segmented control.
   */
  onChange?: (evt: ChangeEvent<HTMLInputElement>, value: TSegmentedControlValue<M>) => void;
  /**
   * Determines whether the segmented control is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The ref for the segmented control.
   */
  ref?: React.ForwardedRef<HTMLDivElement>;
}

export interface ISegmentedControlStyleTokens {
  color?: {
    bg?: {
      [variant in TSegmentedControlVariant]?: {
        [state in TSegmentedControlColor]?: string;
      };
    };
  };
  height?: {
    [size in TSegmentedControlSize]?: string;
  };
  'horizontal-padding'?: {
    [size in TSegmentedControlSize]?: string;
  };
  'vertical-padding'?: {
    [size in TSegmentedControlSize]?: string;
  };
  'gap'?: {
    [size in TSegmentedControlSize]?: string;
  };
  'border-radius'?: {
    [size in TSegmentedControlSize]?: string;
  };
}

export type ISegmentedControlComponent = <M extends boolean = false>(
  props: ISegmentedControlProps<M>
) => React.ReactElement;
