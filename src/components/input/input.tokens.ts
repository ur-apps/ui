import { IInputStyleTokens } from './input.types';

export const inputStyleTokens: IInputStyleTokens = {
  color: {
    bg: {
      filled: {
        default: 'var(--uu-color-neutral-100)',
        hover: 'var(--uu-color-neutral-150)',
        focus: 'var(--uu-color-primary-100)',
      },
      outlined: {
        default: 'var(--uu-color-bg-primary)',
      },
    },
    text: {
      filled: {
        default: 'var(--uu-color-text-primary)',
      },
      outlined: {
        default: 'var(--uu-color-text-primary)',
      },
      clear: {
        default: 'var(--uu-color-text-primary)',
      },
    },
    prefix: {
      filled: {
        default: 'var(--uu-color-text-secondary)',
        hover: 'var(--uu-color-text-secondary)',
        focus: 'var(--uu-color-primary-500)',
      },
      outlined: {
        default: 'var(--uu-color-text-secondary)',
        hover: 'var(--uu-color-text-secondary)',
        focus: 'var(--uu-color-primary-500)',
      },
      clear: {
        default: 'var(--uu-color-text-secondary)',
        hover: 'var(--uu-color-text-secondary)',
        focus: 'var(--uu-color-primary-500)',
      },
    },
    postfix: {
      filled: {
        default: 'var(--uu-color-text-secondary)',
        hover: 'var(--uu-color-text-secondary)',
        focus: 'var(--uu-color-primary-500)',
      },
      outlined: {
        default: 'var(--uu-color-text-secondary)',
        hover: 'var(--uu-color-text-secondary)',
        focus: 'var(--uu-color-primary-500)',
      },
      clear: {
        default: 'var(--uu-color-text-secondary)',
        hover: 'var(--uu-color-text-secondary)',
        focus: 'var(--uu-color-primary-500)',
      },
    },
    'icon-left': {
      filled: {
        default: 'var(--uu-color-neutral-500)',
        hover: 'var(--uu-color-neutral-1000)',
        focus: 'var(--uu-color-primary-500)',
      },
      outlined: {
        default: 'var(--uu-color-neutral-a25)',
        hover: 'var(--uu-color-neutral-a35)',
        focus: 'var(--uu-color-primary-500)',
      },
      clear: {
        default: 'var(--uu-color-neutral-500)',
        hover: 'var(--uu-color-neutral-500)',
        focus: 'var(--uu-color-primary-500)',
      },
    },
    'icon-right': {
      filled: {
        default: 'var(--uu-color-neutral-500)',
        hover: 'var(--uu-color-neutral-1000)',
        focus: 'var(--uu-color-primary-500)',
      },
      outlined: {
        default: 'var(--uu-color-neutral-a25)',
        hover: 'var(--uu-color-neutral-a35)',
        focus: 'var(--uu-color-primary-500)',
      },
      clear: {
        default: 'var(--uu-color-neutral-500)',
        hover: 'var(--uu-color-neutral-500)',
        focus: 'var(--uu-color-primary-500)',
      },
    },
    border: {
      outlined: {
        default: 'var(--uu-color-neutral-a15)',
        hover: 'var(--uu-color-neutral-a25)',
        focus: 'var(--uu-color-primary-500)',
      },
    },
  },
  height: {
    s: 'var(--uu-height-s)',
    m: 'var(--uu-height-m)',
    l: 'var(--uu-height-l)',
  },
  'icon-left-height': {
    s: 'var(--uu-icon-height-s)',
    m: 'var(--uu-icon-height-m)',
    l: 'var(--uu-icon-height-l)',
  },
  'icon-right-height': {
    s: 'var(--uu-icon-height-s)',
    m: 'var(--uu-icon-height-m)',
    l: 'var(--uu-icon-height-l)',
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
    s: 'var(--uu-font-weight-500)',
    m: 'var(--uu-font-weight-500)',
    l: 'var(--uu-font-weight-500)',
  },
  'prefix-font-weight': {
    s: 'var(--uu-font-weight-400)',
    m: 'var(--uu-font-weight-400)',
    l: 'var(--uu-font-weight-400)',
  },
  'postfix-font-weight': {
    s: 'var(--uu-font-weight-400)',
    m: 'var(--uu-font-weight-400)',
    l: 'var(--uu-font-weight-400)',
  },
};

export const inputDarkModeStyleTokens: IInputStyleTokens = {
  color: {
    bg: {
      filled: {
        default: 'var(--uu-color-neutral-800)',
        hover: 'var(--uu-color-neutral-750)',
        focus: 'var(--uu-color-primary-900)',
      },
    },
    'icon-left': {
      filled: {
        hover: 'var(--uu-color-neutral-0)',
      },
    },
    'icon-right': {
      filled: {
        hover: 'var(--uu-color-neutral-0)',
      },
    },
  },
};
