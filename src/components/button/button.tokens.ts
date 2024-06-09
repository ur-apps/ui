import { IButtonStyleTokens } from './button.types';

export const buttonStyleTokens: IButtonStyleTokens = {
  color: {
    bg: {
      filled: {
        primary: {
          default: 'var(--uu-color-primary-500)',
          hover: 'var(--uu-color-primary-400)',
          active: 'var(--uu-color-primary-500)',
        },
        secondary: {
          default: 'var(--uu-color-neutral-100)',
          hover: 'var(--uu-color-neutral-150)',
          active: 'var(--uu-color-neutral-100)',
        },
        accent: {
          default: 'var(--uu-color-accent-500)',
          hover: 'var(--uu-color-accent-400)',
          active: 'var(--uu-color-accent-500)',
        },
        success: {
          default: 'var(--uu-color-success-500)',
          hover: 'var(--uu-color-success-400)',
          active: 'var(--uu-color-success-500)',
        },
        warning: {
          default: 'var(--uu-color-warning-500)',
          hover: 'var(--uu-color-warning-400)',
          active: 'var(--uu-color-warning-500)',
        },
        danger: {
          default: 'var(--uu-color-danger-500)',
          hover: 'var(--uu-color-danger-400)',
          active: 'var(--uu-color-danger-500)',
        },
      },
      outlined: {
        primary: {
          hover: 'var(--uu-color-primary-a5)',
          active: 'var(--uu-color-primary-a10)',
        },
        secondary: {
          hover: 'var(--uu-color-neutral-a5)',
          active: 'var(--uu-color-neutral-a10)',
        },
        accent: {
          hover: 'var(--uu-color-accent-a5)',
          active: 'var(--uu-color-accent-a10)',
        },
        success: {
          hover: 'var(--uu-color-success-a5)',
          active: 'var(--uu-color-success-a10)',
        },
        warning: {
          hover: 'var(--uu-color-warning-a5)',
          active: 'var(--uu-color-warning-a10)',
        },
        danger: {
          hover: 'var(--uu-color-danger-a5)',
          active: 'var(--uu-color-danger-a10)',
        },
      },
      ghost: {
        primary: {
          default: 'var(--uu-color-primary-a5)',
          hover: 'var(--uu-color-primary-a10)',
          active: 'var(--uu-color-primary-a5)',
        },
        secondary: {
          default: 'var(--uu-color-neutral-a5)',
          hover: 'var(--uu-color-neutral-a10)',
          active: 'var(--uu-color-neutral-a5)',
        },
        accent: {
          default: 'var(--uu-color-accent-a5)',
          hover: 'var(--uu-color-accent-a10)',
          active: 'var(--uu-color-accent-a5)',
        },
        success: {
          default: 'var(--uu-color-success-a5)',
          hover: 'var(--uu-color-success-a10)',
          active: 'var(--uu-color-success-a5)',
        },
        warning: {
          default: 'var(--uu-color-warning-a5)',
          hover: 'var(--uu-color-warning-a10)',
          active: 'var(--uu-color-warning-a5)',
        },
        danger: {
          default: 'var(--uu-color-danger-a5)',
          hover: 'var(--uu-color-danger-a10)',
          active: 'var(--uu-color-danger-a5)',
        },
      },
      clear: {
        primary: {
          hover: 'var(--uu-color-neutral-a5)',
          active: 'var(--uu-color-neutral-a10)',
        },
        secondary: {
          hover: 'var(--uu-color-neutral-a5)',
          active: 'var(--uu-color-neutral-a10)',
        },
        accent: {
          hover: 'var(--uu-color-neutral-a5)',
          active: 'var(--uu-color-neutral-a10)',
        },
        success: {
          hover: 'var(--uu-color-neutral-a5)',
          active: 'var(--uu-color-neutral-a10)',
        },
        warning: {
          hover: 'var(--uu-color-neutral-a5)',
          active: 'var(--uu-color-neutral-a10)',
        },
        danger: {
          hover: 'var(--uu-color-neutral-a5)',
          active: 'var(--uu-color-neutral-a10)',
        },
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
      clear: {
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
    s: 'var(--uu-height-s)',
    m: 'var(--uu-height-m)',
    l: 'var(--uu-height-l)',
  },
  'horizontal-padding': {
    s: 'var(--uu-space-s)',
    m: 'var(--uu-space-m)',
    l: 'var(--uu-space-l)',
  },
  'border-radius': {
    s: 'var(--uu-radius-xs)',
    m: 'var(--uu-radius-s)',
    l: 'var(--uu-radius-m)',
  },
  'border-width': {
    s: '1px',
    m: '1px',
    l: '1px',
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
export const buttonDarkModeStyleTokens: IButtonStyleTokens = {
  color: {
    bg: {
      filled: {
        secondary: {
          default: 'var(--uu-color-neutral-800)',
          hover: 'var(--uu-color-neutral-750)',
          active: 'var(--uu-color-neutral-800)',
        },
      },
      outlined: {
        primary: {
          hover: 'var(--uu-color-primary-a10)',
          active: 'var(--uu-color-primary-a15)',
        },
        secondary: {
          hover: 'var(--uu-color-neutral-a10)',
          active: 'var(--uu-color-neutral-a15)',
        },
        accent: {
          hover: 'var(--uu-color-accent-a10)',
          active: 'var(--uu-color-accent-a15)',
        },
        success: {
          hover: 'var(--uu-color-success-a10)',
          active: 'var(--uu-color-success-a15)',
        },
        warning: {
          hover: 'var(--uu-color-warning-a10)',
          active: 'var(--uu-color-warning-a15)',
        },
        danger: {
          hover: 'var(--uu-color-danger-a10)',
          active: 'var(--uu-color-danger-a15)',
        },
      },
      ghost: {
        primary: {
          default: 'var(--uu-color-primary-a10)',
          hover: 'var(--uu-color-primary-a15)',
          active: 'var(--uu-color-primary-a10)',
        },
        secondary: {
          default: 'var(--uu-color-neutral-a10)',
          hover: 'var(--uu-color-neutral-a15)',
          active: 'var(--uu-color-neutral-a10)',
        },
        accent: {
          default: 'var(--uu-color-accent-a10)',
          hover: 'var(--uu-color-accent-a15)',
          active: 'var(--uu-color-accent-a10)',
        },
        success: {
          default: 'var(--uu-color-success-a10)',
          hover: 'var(--uu-color-success-a15)',
          active: 'var(--uu-color-success-a10)',
        },
        warning: {
          default: 'var(--uu-color-warning-a10)',
          hover: 'var(--uu-color-warning-a15)',
          active: 'var(--uu-color-warning-a10)',
        },
        danger: {
          default: 'var(--uu-color-danger-a10)',
          hover: 'var(--uu-color-danger-a15)',
          active: 'var(--uu-color-danger-a10)',
        },
      },
      clear: {
        primary: {
          hover: 'var(--uu-color-neutral-a10)',
          active: 'var(--uu-color-neutral-a15)',
        },
        secondary: {
          hover: 'var(--uu-color-neutral-a10)',
          active: 'var(--uu-color-neutral-a15)',
        },
        accent: {
          hover: 'var(--uu-color-neutral-a10)',
          active: 'var(--uu-color-neutral-a15)',
        },
        success: {
          hover: 'var(--uu-color-neutral-a10)',
          active: 'var(--uu-color-neutral-a15)',
        },
        warning: {
          hover: 'var(--uu-color-neutral-a10)',
          active: 'var(--uu-color-neutral-a15)',
        },
        danger: {
          hover: 'var(--uu-color-neutral-a10)',
          active: 'var(--uu-color-neutral-a15)',
        },
      },
    },
    border: {
      outlined: {
        secondary: 'var(--uu-color-neutral-0)',
      },
    },
  },
};
