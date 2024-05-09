import { HTMLAttributes } from 'react';

import { TClasses } from 'utils';

export interface IOverlayProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /**
   * additinal css class name(s)
   */
  className?: string | TClasses;
}

export interface IOverlayStyleTokens {
  color?: {
    bg?: string;
  };
  filter?: {
    blur?: string;
  };
}
