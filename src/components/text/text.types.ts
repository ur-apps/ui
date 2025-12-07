import { HTMLAttributes } from 'react';
import { TClasses } from '@ur-apps/common-fe';

export type TextColor = 'inherit' | 'primary' | 'secondary' | 'contrast' | 'link' | 'link-visited';
export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TextTag = 'p' | 'span';

export interface ITextProps<T extends TextTag>
  extends Omit<HTMLAttributes<T extends 'span' ? HTMLSpanElement : HTMLParagraphElement>, 'className' | 'color'> {
  /**
   * additinal css class name
   */
  className?: string | TClasses;
  /**
   * text color scheme
   * @default "inherit"
   * */
  color?: TextColor;
  /**
   * text size
   * @default "m"
   */
  size?: TextSize;
  /**
   * tag to use
   * @default "p"
   */
  tag?: T;
}
