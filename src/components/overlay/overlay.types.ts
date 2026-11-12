import { HTMLAttributes, Ref } from 'react';
import { TClasses } from '@urapps/react';

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
