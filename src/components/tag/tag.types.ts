import { ButtonHTMLAttributes, HTMLAttributes, Ref } from 'react';
import { TClasses } from '@ur-apps/common-fe';

import { SvgIcon } from 'types';

export type TagVariant = 'filled' | 'outlined' | 'ghost';
export type TagColor = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger';
export type TagShape = 'default' | 'brick' | 'round';
export type TagSize = 'm';

export interface ITagProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /**
   * additional css class name(s)
   */
  className?: string | TClasses;
  /**
   * tag variant
   * @default filled
   */
  variant?: TagVariant;
  /**
   * tag color scheme
   * @default primary
   */
  color?: TagColor;
  /**
   * tag corner shape
   * @default default
   */
  shape?: TagShape;
  /**
   * tag size
   * @default m
   */
  size?: TagSize;
  /**
   * tag label
   */
  label?: string;
  /**
   * buttons inside a tag
   */
  buttons?: ITagButtonProps[];
  /**
   * reference to tag element
   */
  ref?: Ref<HTMLDivElement>;
}

export interface ITagButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  /**
   * additional css class name(s)
   */
  className?: string | TClasses;
  /**
   * button position inside tag
   * @default after
   */
  position?: 'before' | 'after';
  /**
   * button icon
   */
  icon: SvgIcon;
}

export interface ITagStyleTokens {
  color?: {
    bg?: {
      [variant in TagVariant]?: {
        [color in TagColor]?: string;
      };
    };
    text?: {
      [variant in TagVariant]?: {
        [color in TagColor]?: string;
      };
    };
    border?: {
      [variant in TagVariant]?: {
        [color in TagColor]?: string;
      };
    };
    icon?: {
      [variant in TagVariant]?: {
        [color in TagColor]?: string;
      };
    };
  };
  height?: {
    [size in TagSize]?: string;
  };
  'icon-height'?: {
    [size in TagSize]?: string;
  };
  'horizontal-padding'?: {
    [size in TagSize]?: string;
  };
  'vertical-padding'?: {
    [size in TagSize]?: string;
  };
  gap?: {
    [size in TagSize]?: string;
  };
  'border-width'?: {
    [size in TagSize]?: string;
  };
  'border-radius'?: {
    [size in TagSize]?: string;
  };
  'font-size'?: {
    [size in TagSize]?: string;
  };
  'line-height'?: {
    [size in TagSize]?: string;
  };
  'font-weight'?: {
    [size in TagSize]?: string;
  };
}
