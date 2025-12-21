import { HTMLAttributes, Ref } from 'react';
import { TClasses } from '@ur-apps/common-fe';

export interface IOverlayProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /**
   * additional css class name(s)
   */
  className?: string | TClasses;
  /**
   * ref to the element
   */
  ref?: Ref<HTMLDivElement>;
}

export interface IOverlayStyleTokens {
  color?: {
    bg?: string;
  };
  filter?: {
    blur?: string;
  };
}
