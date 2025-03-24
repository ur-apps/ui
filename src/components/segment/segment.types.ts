import { InputHTMLAttributes, Ref } from 'react';
import { TClasses } from '@ur-apps/common-fe';

export type TSegmentVariant = 'filled' | 'outlined' | 'clear';
export type TSegmentColor = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger';
export type TSegmentShape = 'default' | 'brick' | 'round';
export type TSegmentSize = 's' | 'm' | 'l';
export type TSegmentState = 'default' | 'hover' | 'selected';
export type TSegmentValue = string | number;

export interface ISegmentProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'color' | 'type' | 'value' | 'size'> {
  /**
   * additinal css class names
   */
  className?: string | TClasses;
  /**
   * segment variant
   * @default "filled"
   */
  variant?: TSegmentVariant;
  /**
   * segment color scheme
   * @default primary
   * */
  color?: TSegmentColor;
  /**
   * segment corner shape
   * @default "default"
   */
  shape?: TSegmentShape;
  /**
   * segment size
   * @default "m"
   */
  size?: TSegmentSize;
  /**
   * this property determines whether multiple segments can be selected within the same name
   * @default radio
   */
  type?: 'radio' | 'checkbox';
  /**
   * segment form name
   */
  name?: string;
  /**
   * segment value
   */
  value: TSegmentValue;
  /**
   * segment label
   */
  label?: string;
  /**
   * segment icon
   */
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  /**
   * is segment disabled
   */
  disabled?: boolean;
  /**
   * segment ref
   */
  ref?: Ref<HTMLLabelElement>;
}

export interface ISegmentStyleTokens {
  color?: {
    bg?: {
      [variant in TSegmentVariant]?: {
        [color in TSegmentColor]?: {
          [state in TSegmentState]?: string;
        };
      };
    };
    text?: {
      [variant in TSegmentVariant]?: {
        [color in TSegmentColor]?: {
          [state in TSegmentState]?: string;
        };
      };
    };
    border?: {
      [variant in TSegmentVariant]?: {
        [color in TSegmentColor]?: {
          [state in TSegmentState]?: string;
        };
      };
    };
  };
  height?: {
    [size in TSegmentSize]?: string;
  };
  'horizontal-padding'?: {
    [size in TSegmentSize]?: string;
  };
  'vertical-padding'?: {
    [size in TSegmentSize]?: string;
  };
  'gap'?: {
    [size in TSegmentSize]?: string;
  };
  'border-width'?: {
    [size in TSegmentSize]?: string;
  };
  'border-radius'?: {
    [size in TSegmentSize]?: string;
  };
  'icon-height'?: {
    [size in TSegmentSize]?: string;
  };
  'font-size'?: {
    [size in TSegmentSize]?: string;
  };
  'line-height'?: {
    [size in TSegmentSize]?: string;
  };
  'font-weight'?: {
    [size in TSegmentSize]?: string;
  };
}
