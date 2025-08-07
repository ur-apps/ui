import { TClasses } from '@ur-apps/common-fe';

export type StatusIconStatus = 'info' | 'success' | 'warning' | 'error';
export type StatusIconVariant = 'filled' | 'outlined';
export type StatusIconSize = 'xs' | 's' | 'm' | 'l';

export interface IStatusIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'className'> {
  className?: string | TClasses;
  status?: StatusIconStatus;
  variant?: StatusIconVariant;
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
