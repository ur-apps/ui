import { HTMLAttributes, RefObject } from 'react';
import { TClasses } from '@ur-apps/common-fe';

export type TooltipVariant = 'filled';
export type TooltipColor = 'primary' | 'secondary' | 'contrast' | 'success' | 'warning' | 'danger';
export type TooltipShape = 'default' | 'brick';
export type TooltipSize = 's' | 'm' | 'l';
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export type TooltipTrigger = 'hover' | 'click' | 'manual';

export interface ITooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /**
   * Additional class name(s)
   */
  className?: string | TClasses;
  /**
   * Reference to the anchor element that the tooltip is attached to
   */
  anchor: RefObject<HTMLElement | null>;
  /**
   * Tooltip variant
   * @default "filled"
   */
  variant?: TooltipVariant;
  /**
   * Tooltip color scheme
   * @default "primary"
   */
  color?: TooltipColor;
  /**
   * Tooltip corner shape
   * @default "default"
   */
  shape?: TooltipShape;
  /**
   * Tooltip size
   * @default "m"
   */
  size?: TooltipSize;
  /**
   * Tooltip placement relative to trigger element
   * @default "top"
   */
  placement?: TooltipPlacement;
  /**
   * What triggers the tooltip
   * @default "hover"
   */
  trigger?: TooltipTrigger;
  /**
   * Delay before showing tooltip (ms)
   * @default 100
   */
  showDelay?: number;
  /**
   * Delay before hiding tooltip (ms)
   * @default 200
   */
  hideDelay?: number;
  /**
   * Throttle interval for position updates (ms)
   * @default 100
   */
  throttleInterval?: number;
}

export interface ITooltipStyleTokens {
  color?: {
    bg?: {
      [variant in TooltipVariant]?: {
        [color in TooltipColor]?: string;
      };
    };
    text?: {
      [variant in TooltipVariant]?: {
        [color in TooltipColor]?: string;
      };
    };
    border?: {
      [variant in TooltipVariant]?: {
        [color in TooltipColor]?: string;
      };
    };
    arrow?: {
      [variant in TooltipVariant]?: {
        [color in TooltipColor]?: string;
      };
    };
  };
  'box-shadow'?: string;
  'offset'?: {
    [size in TooltipSize]?: string;
  };
  'min-width'?: {
    [size in TooltipSize]?: string;
  };
  'max-width'?: {
    [size in TooltipSize]?: string;
  };
  'horizontal-padding'?: {
    [size in TooltipSize]?: string;
  };
  'vertical-padding'?: {
    [size in TooltipSize]?: string;
  };
  'border-width'?: {
    [size in TooltipSize]?: string;
  };
  'border-radius'?: {
    [size in TooltipSize]?: string;
  };
  'font-size'?: {
    [size in TooltipSize]?: string;
  };
  'line-height'?: {
    [size in TooltipSize]?: string;
  };
  'font-weight'?: {
    [size in TooltipSize]?: string;
  };
}
