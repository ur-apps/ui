import { ITooltipStyleTokens } from './tooltip.types';

export const tooltipStyleTokens: ITooltipStyleTokens = {
  color: {
    bg: {
      filled: {
        primary: 'var(--uu-color-neutral-100)',
        secondary: 'var(--uu-color-neutral-0)',
        contrast: 'var(--uu-color-neutral-800)',
        success: 'var(--uu-color-success-100)',
        warning: 'var(--uu-color-warning-100)',
        danger: 'var(--uu-color-danger-100)',
      },
    },
    text: {
      filled: {
        primary: 'var(--uu-color-text-primary)',
        secondary: 'var(--uu-color-text-primary)',
        contrast: 'var(--uu-color-text-contrast)',
        success: 'var(--uu-color-success-800)',
        warning: 'var(--uu-color-warning-800)',
        danger: 'var(--uu-color-danger-800)',
      },
    },
  },
  'box-shadow': '0 2px 8px 0 rgba(0, 0, 0, 0.15)',
  'offset': {
    s: 'var(--uu-space-2xs)',
    m: 'var(--uu-space-2xs)',
    l: 'var(--uu-space-2xs)',
  },
  'max-width': {
    s: '240px',
    m: '320px',
    l: '400px',
  },
  'horizontal-padding': {
    s: 'var(--uu-space-xs)',
    m: 'var(--uu-space-s)',
    l: 'var(--uu-space-m)',
  },
  'vertical-padding': {
    s: 'var(--uu-space-2xs)',
    m: 'var(--uu-space-xs)',
    l: 'var(--uu-space-s)',
  },
  'border-width': {
    s: '1px',
    m: '1px',
    l: '1px',
  },
  'border-radius': {
    s: 'var(--uu-radius-s)',
    m: 'var(--uu-radius-m)',
    l: 'var(--uu-radius-l)',
  },
  'font-size': {
    s: 'var(--uu-font-size-xs)',
    m: 'var(--uu-font-size-s)',
    l: 'var(--uu-font-size-m)',
  },
  'line-height': {
    s: 'var(--uu-line-height-xs)',
    m: 'var(--uu-line-height-s)',
    l: 'var(--uu-line-height-m)',
  },
  'font-weight': {
    s: 'var(--uu-font-weight-400)',
    m: 'var(--uu-font-weight-400)',
    l: 'var(--uu-font-weight-400)',
  },
};

export const tooltipDarkModeStyleTokens: ITooltipStyleTokens = {
  color: {
    bg: {
      filled: {
        primary: 'var(--uu-color-neutral-300)',
        secondary: 'var(--uu-color-neutral-200)',
        contrast: 'var(--uu-color-neutral-900)',
        success: 'var(--uu-color-success-800)',
        warning: 'var(--uu-color-warning-800)',
        danger: 'var(--uu-color-danger-800)',
      },
    },
    text: {
      filled: {
        primary: 'var(--uu-color-text-primary)',
        secondary: 'var(--uu-color-text-primary)',
        contrast: 'var(--uu-color-text-contrast)',
        success: 'var(--uu-color-success-100)',
        warning: 'var(--uu-color-warning-100)',
        danger: 'var(--uu-color-danger-100)',
      },
    },
  },
};
