import { TClasses } from '@ur-apps/common-fe';

export type StatusIconStatus = 'info' | 'success' | 'warning' | 'error';
export type StatusIconVariant = 'filled' | 'outlined';
export type StatusIconSize = 'xs' | 's' | 'm' | 'l';

export interface IStatusIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'className'> {
  /**
   * additinal css class name
   */
  className?: string | TClasses;
  /**
   * icon status
   * @default "info"
   */
  status?: StatusIconStatus;
  /**
   * icon variant
   * @default "filled"
   */
  variant?: StatusIconVariant;
  /**
   * icon size
   * @default "m"
   */
  size?: StatusIconSize;
}

export interface IStatusIconStyleTokens {
  color?: {
    [status in StatusIconStatus]?: string;
  };
  height?: {
    [size in StatusIconSize]?: string;
  };
}
