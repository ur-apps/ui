import { HTMLAttributes } from 'react';
import { TClasses } from '@ur-apps/common-fe';

export type THeadingColor = 'inherit' | 'primary' | 'secondary' | 'contrast' | 'link' | 'link-visited';
export type THeadingSize = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl';
export type THeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IHeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'className' | 'color'> {
  /**
   * additinal css class name
   */
  className?: string | TClasses;
  /**
   * heading color scheme
   * @default "inherit"
   * */
  color?: THeadingColor;
  /**
   * heading size
   * @default determined automatically based on the selected tag
   * h1 -> xl
   * h2 -> l
   * h3 -> m
   * h4 -> s
   * h5 -> xs
   * h6 -> 2xs
   */
  size?: THeadingSize;
  /**
   * html tag to use
   * @default "h1"
   */
  tag?: THeadingTag;
}

export interface IHeadingStyleTokens {
  'font-size'?: {
    [size in THeadingSize]?: string;
  };
  'line-height'?: {
    [size in THeadingSize]?: string;
  };
  'font-weight'?: {
    [size in THeadingSize]?: string;
  };
}
