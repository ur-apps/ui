import { ISegmentedControlStyleTokens } from './segmented-control.types';

export const segmentedControlStyleTokens: ISegmentedControlStyleTokens = {
  color: {
    bg: {
      filled: {
        primary: 'var(--uu-color-neutral-100)',
        secondary: 'var(--uu-color-neutral-100)',
        accent: 'var(--uu-color-neutral-100)',
        success: 'var(--uu-color-neutral-100)',
        warning: 'var(--uu-color-neutral-100)',
        danger: 'var(--uu-color-neutral-100)',
      },
    },
  },
  height: {
    s: 'var(--uu-height-s)',
    m: 'var(--uu-height-m)',
    l: 'var(--uu-height-l)',
  },
  'horizontal-padding': {
    s: 'var(--uu-space-3xs)',
    m: 'var(--uu-space-3xs)',
    l: 'var(--uu-space-3xs)',
  },
  'vertical-padding': {
    s: 'var(--uu-space-3xs)',
    m: 'var(--uu-space-3xs)',
    l: 'var(--uu-space-3xs)',
  },
  'gap': {
    s: 'var(--uu-space-3xs)',
    m: 'var(--uu-space-3xs)',
    l: 'var(--uu-space-3xs)',
  },
  'border-radius': {
    s: 'var(--uu-radius-xs)',
    m: 'var(--uu-radius-s)',
    l: 'var(--uu-radius-m)',
  },
};

export const segmentedControlDarkModeStyleTokens: ISegmentedControlStyleTokens = {
  color: {
    bg: {
      filled: {
        primary: 'var(--uu-color-neutral-200)',
        secondary: 'var(--uu-color-neutral-200)',
        accent: 'var(--uu-color-neutral-200)',
        success: 'var(--uu-color-neutral-200)',
        warning: 'var(--uu-color-neutral-200)',
        danger: 'var(--uu-color-neutral-200)',
      },
    },
  },
};
