import { HTMLAttributes } from 'react';
import { TClasses } from 'utils';

export type TextColor = 'primary' | 'secondary' | 'contrast' | 'link' | 'link-visited';
export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface ITextProps<T extends 'p' | 'span'>
  extends Omit<HTMLAttributes<T extends 'span' ? HTMLSpanElement : HTMLParagraphElement>, 'className' | 'color'> {
  /**
   * @description additinal css class name
   */
  className?: string | TClasses;
  /**
   * @description text color scheme
   * @default "primary"
   * */
  color?: TextColor;
  /**
   * @description text size
   * @default "m"
   */
  size?: TextSize;
  /**
   * @description tag to use
   * @default "p"
   */
  tag?: T;
}
