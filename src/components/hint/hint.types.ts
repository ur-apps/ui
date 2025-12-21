import { ReactNode } from 'react';
import { TClasses } from '@ur-apps/common-fe';

import { ITooltipProps } from 'components';
import { SvgIcon } from 'types';

export type HintIcon = 'info' | 'question' | 'success' | 'warning' | 'danger';
export type HintVariant = 'filled' | 'outlined';
export type HintColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type HintSize = 'xs' | 's' | 'm' | 'l';

export interface IHintProps extends Omit<React.SVGProps<SVGElement>, 'className'> {
  /**
   * additional css class name
   */
  className?: string | TClasses;
  /**
   * icon to be displayed in the hint
   * @default "info"
   */
  icon?: HintIcon | SvgIcon;
  /**
   * icon variant
   * @default "filled"
   */
  variant?: HintVariant;
  /**
   * hint color
   * @default "auto" - determined by icon, if icon is custom SvgIcon, "primary" is used
   */
  color?: HintColor | 'auto';
  /**
   * icon size
   * @default "m"
   */
  size?: HintSize;
  /**
   * tooltip content; if provided, hint will be displayed as a tooltip
   */
  children?: ReactNode;
  /**
   * additional tooltip props
   */
  tooltipProps?: Omit<ITooltipProps, 'anchor'>;
}

export interface IHintStyleTokens {
  color?: {
    [color in HintColor]?: string;
  };
  height?: {
    [size in HintSize]?: string;
  };
}
