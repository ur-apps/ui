import { ISwitchStyleTokens } from './switch.types';

export const switchStyleTokens: ISwitchStyleTokens = {
  color: {
    bg: {
      primary: {
        default: 'var(--uu-color-neutral-100)',
        hover: 'var(--uu-color-neutral-150)',
        checked: 'var(--uu-color-primary-500)',
      },
      accent: {
        default: 'var(--uu-color-neutral-100)',
        hover: 'var(--uu-color-neutral-150)',
        checked: 'var(--uu-color-accent-500)',
      },
      success: {
        default: 'var(--uu-color-neutral-100)',
        hover: 'var(--uu-color-neutral-150)',
        checked: 'var(--uu-color-success-500)',
      },
      warning: {
        default: 'var(--uu-color-neutral-100)',
        hover: 'var(--uu-color-neutral-150)',
        checked: 'var(--uu-color-warning-500)',
      },
      danger: {
        default: 'var(--uu-color-neutral-100)',
        hover: 'var(--uu-color-neutral-150)',
        checked: 'var(--uu-color-danger-500)',
      },
    },
    text: {
      primary: {
        default: 'var(--uu-color-primary-500)',
        hover: 'var(--uu-color-primary-500)',
        checked: 'var(--uu-color-text-contrast)',
      },
      accent: {
        default: 'var(--uu-color-accent-500)',
        hover: 'var(--uu-color-accent-500)',
        checked: 'var(--uu-color-text-contrast)',
      },
      success: {
        default: 'var(--uu-color-success-500)',
        hover: 'var(--uu-color-success-500)',
        checked: 'var(--uu-color-text-contrast)',
      },
      warning: {
        default: 'var(--uu-color-warning-500)',
        hover: 'var(--uu-color-warning-500)',
        checked: 'var(--uu-color-text-contrast)',
      },
      danger: {
        default: 'var(--uu-color-danger-500)',
        hover: 'var(--uu-color-danger-500)',
        checked: 'var(--uu-color-text-contrast)',
      },
    },
    loader: {
      primary: {
        default: 'var(--uu-color-primary-500)',
        hover: 'var(--uu-color-primary-500)',
        checked: 'var(--uu-color-primary-500)',
      },
      accent: {
        default: 'var(--uu-color-accent-500)',
        hover: 'var(--uu-color-accent-500)',
        checked: 'var(--uu-color-accent-500)',
      },
      success: {
        default: 'var(--uu-color-success-500)',
        hover: 'var(--uu-color-success-500)',
        checked: 'var(--uu-color-success-500)',
      },
      warning: {
        default: 'var(--uu-color-warning-500)',
        hover: 'var(--uu-color-warning-500)',
        checked: 'var(--uu-color-warning-500)',
      },
      danger: {
        default: 'var(--uu-color-danger-500)',
        hover: 'var(--uu-color-danger-500)',
        checked: 'var(--uu-color-danger-500)',
      },
    },
  },
  height: {
    s: 'var(--uu-height-xs)',
    m: 'var(--uu-height-s)',
    l: 'var(--uu-height-m)',
  },
  'vertical-padding': {
    s: '1px',
    m: '1px',
    l: '2px',
  },
  'horizontal-padding': {
    s: '1px',
    m: '1px',
    l: '2px',
  },
  'border-radius': {
    s: 'var(--uu-radius-2xs)',
    m: 'var(--uu-radius-xs)',
    l: 'var(--uu-radius-s)',
  },
  'font-size': {
    s: 'var(--uu-font-size-2xs)',
    m: 'var(--uu-font-size-xs)',
    l: 'var(--uu-font-size-s)',
  },
  'line-height': {
    s: 'var(--uu-font-size-2xs)',
    m: 'var(--uu-font-size-xs)',
    l: 'var(--uu-font-size-s)',
  },
  'font-weight': {
    s: 'var(--uu-font-weight-500)',
    m: 'var(--uu-font-weight-500)',
    l: 'var(--uu-font-weight-500)',
  },
  'content-horizontal-padding': {
    s: 'var(--uu-space-2xs)',
    m: 'var(--uu-space-2xs)',
    l: 'var(--uu-space-xs)',
  },
  'thumb-padding': {
    s: '1px',
    m: '1px',
    l: '1px',
  },
  'loader-width': {
    s: '1px',
    m: '1px',
    l: '1px',
  },
  transition: '200ms',
};

export const switchDarkModeStyleTokens: ISwitchStyleTokens = {
  color: {
    bg: {
      primary: {
        default: 'var(--uu-color-neutral-800)',
        hover: 'var(--uu-color-neutral-750)',
      },
      accent: {
        default: 'var(--uu-color-neutral-800)',
        hover: 'var(--uu-color-neutral-750)',
      },
      success: {
        default: 'var(--uu-color-neutral-800)',
        hover: 'var(--uu-color-neutral-750)',
      },
      warning: {
        default: 'var(--uu-color-neutral-800)',
        hover: 'var(--uu-color-neutral-750)',
      },
      danger: {
        default: 'var(--uu-color-neutral-800)',
        hover: 'var(--uu-color-neutral-750)',
      },
    },
    thumb: {
      primary: {
        default: 'var(--uu-color-neutral-1000)',
        hover: 'var(--uu-color-neutral-1000)',
        checked: 'var(--uu-color-neutral-1000)',
      },
      accent: {
        default: 'var(--uu-color-neutral-1000)',
        hover: 'var(--uu-color-neutral-1000)',
        checked: 'var(--uu-color-neutral-1000)',
      },
      success: {
        default: 'var(--uu-color-neutral-1000)',
        hover: 'var(--uu-color-neutral-1000)',
        checked: 'var(--uu-color-neutral-1000)',
      },
      warning: {
        default: 'var(--uu-color-neutral-1000)',
        hover: 'var(--uu-color-neutral-1000)',
        checked: 'var(--uu-color-neutral-1000)',
      },
      danger: {
        default: 'var(--uu-color-neutral-1000)',
        hover: 'var(--uu-color-neutral-1000)',
        checked: 'var(--uu-color-neutral-1000)',
      },
    },
  },
};
