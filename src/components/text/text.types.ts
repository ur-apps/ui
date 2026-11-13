import { ComponentPropsWithoutRef } from 'react';
import { TClasses } from '@urapps/react';

import { TEXT_TAGS } from './text.constants';

export type TextColor = 'inherit' | 'primary' | 'secondary' | 'contrast' | 'link' | 'link-visited';
export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TextTag = (typeof TEXT_TAGS)[number];

export type ITextProps<T extends TextTag> = Omit<ComponentPropsWithoutRef<T>, 'className' | 'color'> & {
  /**
   * additional css class name
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
};
