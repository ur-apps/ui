import { IOptionStyleTokens } from './option.types';

export const optionStyleTokens: IOptionStyleTokens = {
  color: {
    bg: {
      filled: {
        default: 'var(--uu-color-neutral-100)',
        hover: 'var(--uu-color-neutral-150)',
        selected: 'var(--uu-color-primary-500)',
      },
      outlined: {
        default: 'var(--uu-color-bg-primary)',
        hover: 'var(--uu-color-bg-primary)',
        selected: 'var(--uu-color-bg-primary)',
      },
      clear: {
        hover: 'var(--uu-color-neutral-a5)',
      },
    },
    text: {
      filled: {
        default: 'var(--uu-color-text-primary)',
        hover: 'var(--uu-color-text-primary)',
        selected: 'var(--uu-color-text-contrast)',
      },
      outlined: {
        default: 'var(--uu-color-text-primary)',
        hover: 'var(--uu-color-text-primary)',
        selected: 'var(--uu-color-primary-500)',
      },
      clear: {
        default: 'var(--uu-color-text-primary)',
        hover: 'var(--uu-color-text-primary)',
        selected: 'var(--uu-color-primary-500)',
      },
    },
    border: {
      outlined: {
        default: 'var(--uu-color-neutral-a15)',
        hover: 'var(--uu-color-neutral-a25)',
        selected: 'var(--uu-color-primary-500)',
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

export const optionDarkModeStyleTokens: IOptionStyleTokens = {
  color: {
    bg: {
      filled: {
        default: 'var(--uu-color-neutral-200)',
        hover: 'var(--uu-color-neutral-250)',
      },
      clear: {
        hover: 'var(--uu-color-neutral-a10)',
      },
    },
  },
};
