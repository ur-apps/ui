import { ITagStyleTokens } from './tag.types';

export const tagStyleTokens: ITagStyleTokens = {
  color: {
    bg: {
      filled: {
        primary: 'var(--uu-color-primary-500)',
        secondary: 'var(--uu-color-neutral-100)',
        accent: 'var(--uu-color-accent-500)',
        success: 'var(--uu-color-success-500)',
        warning: 'var(--uu-color-warning-500)',
        danger: 'var(--uu-color-danger-500)',
      },
      ghost: {
        primary: 'var(--uu-color-primary-a10)',
        secondary: 'var(--uu-color-neutral-a5)',
        accent: 'var(--uu-color-accent-a10)',
        success: 'var(--uu-color-success-a10)',
        warning: 'var(--uu-color-warning-a10)',
        danger: 'var(--uu-color-danger-a10)',
      },
    },
    text: {
      filled: {
        primary: 'var(--uu-color-text-contrast)',
        secondary: 'var(--uu-color-text-primary)',
        accent: 'var(--uu-color-text-contrast)',
        success: 'var(--uu-color-text-contrast)',
        warning: 'var(--uu-color-text-contrast)',
        danger: 'var(--uu-color-text-contrast)',
      },
      outlined: {
        primary: 'var(--uu-color-primary-500)',
        secondary: 'var(--uu-color-text-primary)',
        accent: 'var(--uu-color-accent-500)',
        success: 'var(--uu-color-success-500)',
        warning: 'var(--uu-color-warning-500)',
        danger: 'var(--uu-color-danger-500)',
      },
      ghost: {
        primary: 'var(--uu-color-primary-500)',
        secondary: 'var(--uu-color-text-primary)',
        accent: 'var(--uu-color-accent-500)',
        success: 'var(--uu-color-success-500)',
        warning: 'var(--uu-color-warning-500)',
        danger: 'var(--uu-color-danger-500)',
      },
    },
    button: {
      filled: {
        primary: 'var(--uu-color-primary-500)',
        secondary: 'var(--uu-color-text-primary)',
        accent: 'var(--uu-color-accent-500)',
        success: 'var(--uu-color-success-500)',
        warning: 'var(--uu-color-warning-500)',
        danger: 'var(--uu-color-danger-500)',
      },
      outlined: {
        primary: 'var(--uu-color-primary-500)',
        secondary: 'var(--uu-color-text-primary)',
        accent: 'var(--uu-color-accent-500)',
        success: 'var(--uu-color-success-500)',
        warning: 'var(--uu-color-warning-500)',
        danger: 'var(--uu-color-danger-500)',
      },
      ghost: {
        primary: 'var(--uu-color-primary-500)',
        secondary: 'var(--uu-color-text-primary)',
        accent: 'var(--uu-color-accent-500)',
        success: 'var(--uu-color-success-500)',
        warning: 'var(--uu-color-warning-500)',
        danger: 'var(--uu-color-danger-500)',
      },
    },
    border: {
      outlined: {
        primary: 'var(--uu-color-primary-500)',
        secondary: 'var(--uu-color-neutral-1000)',
        accent: 'var(--uu-color-accent-500)',
        success: 'var(--uu-color-success-500)',
        warning: 'var(--uu-color-warning-500)',
        danger: 'var(--uu-color-danger-500)',
      },
    },
  },
  height: {
    m: 'var(--uu-height-s)',
    l: 'var(--uu-height-m)',
  },
  'icon-height': {
    m: 'var(--uu-icon-height-s)',
    l: 'var(--uu-icon-height-m)',
  },
  'horizontal-padding': {
    m: 'var(--uu-space-xs)',
    l: 'var(--uu-space-s)',
  },
  gap: {
    m: 'var(--uu-space-2xs)',
    l: 'var(--uu-space-xs)',
  },
  'border-radius': {
    m: 'var(--uu-radius-xs)',
    l: 'var(--uu-radius-s)',
  },
  'border-width': {
    m: '1px',
    l: '1px',
  },
  'font-size': {
    m: 'var(--uu-font-size-xs)',
    l: 'var(--uu-font-size-s)',
  },
  'line-height': {
    m: 'var(--uu-line-height-xs)',
    l: 'var(--uu-line-height-s)',
  },
  'font-weight': {
    m: 'var(--uu-font-weight-400)',
    l: 'var(--uu-font-weight-400)',
  },
};

export const tagDarkModeStyleTokens: ITagStyleTokens = {
  color: {
    bg: {
      filled: {
        secondary: 'var(--uu-color-neutral-200)',
      },
      ghost: {
        secondary: 'var(--uu-color-neutral-a10)',
      },
    },
  },
};
