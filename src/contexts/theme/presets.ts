import {
  buttonDarkModeStyleTokens,
  buttonStyleTokens,
  dropdownStyleTokens,
  dropdownDarkModeStyleTokens,
  inputStyleTokens,
  inputDarkModeStyleTokens,
  modalStyleTokens,
  optionStyleTokens,
  optionDarkModeStyleTokens,
  overlayStyleTokens,
  switchStyleTokens,
  switchDarkModeStyleTokens,
  tagStyleTokens,
  tagDarkModeStyleTokens,
} from 'components';

import { TStylePreset } from './types';

export const preset: TStylePreset = {
  primitives: {
    color: {
      'black': 'rgba(0, 0, 0, 1)',
      'black-a5': 'rgba(0, 0, 0, 0.05)',
      'black-a10': 'rgba(0, 0, 0, 0.10)',
      'black-a15': 'rgba(0, 0, 0, 0.15)',
      'black-a20': 'rgba(0, 0, 0, 0.20)',
      'black-a25': 'rgba(0, 0, 0, 0.25)',
      'black-a30': 'rgba(0, 0, 0, 0.30)',
      'black-a35': 'rgba(0, 0, 0, 0.35)',
      'black-a40': 'rgba(0, 0, 0, 0.40)',
      'black-a45': 'rgba(0, 0, 0, 0.45)',
      'black-a50': 'rgba(0, 0, 0, 0.50)',
      'black-a55': 'rgba(0, 0, 0, 0.55)',
      'black-a60': 'rgba(0, 0, 0, 0.60)',
      'black-a65': 'rgba(0, 0, 0, 0.65)',
      'black-a70': 'rgba(0, 0, 0, 0.70)',
      'black-a75': 'rgba(0, 0, 0, 0.75)',
      'black-a80': 'rgba(0, 0, 0, 0.80)',
      'black-a85': 'rgba(0, 0, 0, 0.85)',
      'black-a90': 'rgba(0, 0, 0, 0.90)',
      'black-a95': 'rgba(0, 0, 0, 0.95)',

      'white': 'rgba(255, 255, 255, 1)',
      'white-a5': 'rgba(255, 255, 255, 0.05)',
      'white-a10': 'rgba(255, 255, 255, 0.10)',
      'white-a15': 'rgba(255, 255, 255, 0.15)',
      'white-a20': 'rgba(255, 255, 255, 0.20)',
      'white-a25': 'rgba(255, 255, 255, 0.25)',
      'white-a30': 'rgba(255, 255, 255, 0.30)',
      'white-a35': 'rgba(255, 255, 255, 0.35)',
      'white-a40': 'rgba(255, 255, 255, 0.40)',
      'white-a45': 'rgba(255, 255, 255, 0.45)',
      'white-a50': 'rgba(255, 255, 255, 0.50)',
      'white-a55': 'rgba(255, 255, 255, 0.55)',
      'white-a60': 'rgba(255, 255, 255, 0.60)',
      'white-a65': 'rgba(255, 255, 255, 0.65)',
      'white-a70': 'rgba(255, 255, 255, 0.70)',
      'white-a75': 'rgba(255, 255, 255, 0.75)',
      'white-a80': 'rgba(255, 255, 255, 0.80)',
      'white-a85': 'rgba(255, 255, 255, 0.85)',
      'white-a90': 'rgba(255, 255, 255, 0.90)',
      'white-a95': 'rgba(255, 255, 255, 0.95)',

      gray: {
        '20': 'rgba(250, 250, 250, 1)',
        '40': 'rgba(245, 245, 245, 1)',
        '60': 'rgba(240, 240, 240, 1)',
        '80': 'rgba(235, 235, 235, 1)',
        '100': 'rgba(230, 230, 230, 1)',
        '120': 'rgba(224, 224, 224, 1)',
        '140': 'rgba(219, 219, 219, 1)',
        '160': 'rgba(214, 214, 214, 1)',
        '180': 'rgba(209, 209, 209, 1)',
        '200': 'rgba(204, 204, 204, 1)',
        '220': 'rgba(199, 199, 199, 1)',
        '240': 'rgba(194, 194, 194, 1)',
        '260': 'rgba(189, 189, 189, 1)',
        '280': 'rgba(184, 184, 184, 1)',
        '300': 'rgba(179, 179, 179, 1)',
        '320': 'rgba(173, 173, 173, 1)',
        '340': 'rgba(168, 168, 168, 1)',
        '360': 'rgba(163, 163, 163, 1)',
        '380': 'rgba(158, 158, 158, 1)',
        '400': 'rgba(153, 153, 153, 1)',
        '420': 'rgba(148, 148, 148, 1)',
        '440': 'rgba(143, 143, 143, 1)',
        '460': 'rgba(138, 138, 138, 1)',
        '480': 'rgba(133, 133, 133, 1)',
        '500': 'rgba(128, 128, 128, 1)',
        '520': 'rgba(122, 122, 122, 1)',
        '540': 'rgba(117, 117, 117, 1)',
        '560': 'rgba(112, 112, 112, 1)',
        '580': 'rgba(107, 107, 107, 1)',
        '600': 'rgba(102, 102, 102, 1)',
        '620': 'rgba(97, 97, 97, 1)',
        '640': 'rgba(92, 92, 92, 1)',
        '660': 'rgba(87, 87, 87, 1)',
        '680': 'rgba(82, 82, 82, 1)',
        '700': 'rgba(77, 77, 77, 1)',
        '720': 'rgba(71, 71, 71, 1)',
        '740': 'rgba(66, 66, 66, 1)',
        '760': 'rgba(61, 61, 61, 1)',
        '780': 'rgba(56, 56, 56, 1)',
        '800': 'rgba(51, 51, 51, 1)',
        '820': 'rgba(46, 46, 46, 1)',
        '840': 'rgba(41, 41, 41, 1)',
        '860': 'rgba(36, 36, 36, 1)',
        '880': 'rgba(31, 31, 31, 1)',
        '900': 'rgba(26, 26, 26, 1)',
        '920': 'rgba(20, 20, 20, 1)',
        '940': 'rgba(15, 15, 15, 1)',
        '960': 'rgba(10, 10, 10, 1)',
        '980': 'rgba(5, 5, 5, 1)',
      },
      blue: {
        '50': 'rgba(240, 247, 255, 1)',
        '100': 'rgba(224, 239, 255, 1)',
        '200': 'rgba(168, 210, 255, 1)',
        '300': 'rgba(112, 181, 255, 1)',
        '400': 'rgba(56, 151, 255, 1)',
        '500': 'rgba(0, 122, 255, 1)',
        '600': 'rgba(0, 100, 209, 1)',
        '700': 'rgba(0, 78, 163, 1)',
        '800': 'rgba(0, 56, 117, 1)',
        '900': 'rgba(0, 34, 71, 1)',

        'a5': 'rgba(0, 122, 255, 0.05)',
        'a10': 'rgba(0, 122, 255, 0.10)',
        'a15': 'rgba(0, 122, 255, 0.15)',
        'a20': 'rgba(0, 122, 255, 0.20)',
        'a25': 'rgba(0, 122, 255, 0.25)',
        'a30': 'rgba(0, 122, 255, 0.30)',
        'a35': 'rgba(0, 122, 255, 0.35)',
        'a40': 'rgba(0, 122, 255, 0.40)',
        'a45': 'rgba(0, 122, 255, 0.45)',
        'a50': 'rgba(0, 122, 255, 0.50)',
        'a55': 'rgba(0, 122, 255, 0.55)',
        'a60': 'rgba(0, 122, 255, 0.60)',
        'a65': 'rgba(0, 122, 255, 0.65)',
        'a70': 'rgba(0, 122, 255, 0.70)',
        'a75': 'rgba(0, 122, 255, 0.75)',
        'a80': 'rgba(0, 122, 255, 0.80)',
        'a85': 'rgba(0, 122, 255, 0.85)',
        'a90': 'rgba(0, 122, 255, 0.90)',
        'a95': 'rgba(0, 122, 255, 0.95)',
      },
      pink: {
        '50': 'rgba(255, 240, 250, 1)',
        '100': 'rgba(255, 224, 245, 1)',
        '200': 'rgba(255, 184, 231, 1)',
        '300': 'rgba(255, 148, 219, 1)',
        '400': 'rgba(255, 107, 205, 1)',
        '500': 'rgba(255, 73, 193, 1)',
        '600': 'rgba(255, 10, 171, 1)',
        '700': 'rgba(199, 0, 131, 1)',
        '800': 'rgba(133, 0, 87, 1)',
        '900': 'rgba(255, 240, 250, 1)',

        'a5': 'rgba(255, 73, 193, 0.05)',
        'a10': 'rgba(255, 73, 193, 0.10)',
        'a15': 'rgba(255, 73, 193, 0.15)',
        'a20': 'rgba(255, 73, 193, 0.20)',
        'a25': 'rgba(255, 73, 193, 0.25)',
        'a30': 'rgba(255, 73, 193, 0.30)',
        'a35': 'rgba(255, 73, 193, 0.35)',
        'a40': 'rgba(255, 73, 193, 0.40)',
        'a45': 'rgba(255, 73, 193, 0.45)',
        'a50': 'rgba(255, 73, 193, 0.50)',
        'a55': 'rgba(255, 73, 193, 0.55)',
        'a60': 'rgba(255, 73, 193, 0.60)',
        'a65': 'rgba(255, 73, 193, 0.65)',
        'a70': 'rgba(255, 73, 193, 0.70)',
        'a75': 'rgba(255, 73, 193, 0.75)',
        'a80': 'rgba(255, 73, 193, 0.80)',
        'a85': 'rgba(255, 73, 193, 0.85)',
        'a90': 'rgba(255, 73, 193, 0.90)',
        'a95': 'rgba(255, 73, 193, 0.95)',
      },
      green: {
        '50': 'rgba(243, 252, 245, 1)',
        '100': 'rgba(231, 249, 235, 1)',
        '200': 'rgba(186, 237, 199, 1)',
        '300': 'rgba(142, 225, 163, 1)',
        '400': 'rgba(97, 214, 126, 1)',
        '500': 'rgba(53, 202, 90, 1)',
        '600': 'rgba(43, 166, 74, 1)',
        '700': 'rgba(34, 129, 58, 1)',
        '800': 'rgba(24, 93, 41, 1)',
        '900': 'rgba(15, 57, 25, 1)',

        'a5': 'rgba(53, 202, 90, 0.05)',
        'a10': 'rgba(53, 202, 90, 0.10)',
        'a15': 'rgba(53, 202, 90, 0.15)',
        'a20': 'rgba(53, 202, 90, 0.20)',
        'a25': 'rgba(53, 202, 90, 0.25)',
        'a30': 'rgba(53, 202, 90, 0.30)',
        'a35': 'rgba(53, 202, 90, 0.35)',
        'a40': 'rgba(53, 202, 90, 0.40)',
        'a45': 'rgba(53, 202, 90, 0.45)',
        'a50': 'rgba(53, 202, 90, 0.50)',
        'a55': 'rgba(53, 202, 90, 0.55)',
        'a60': 'rgba(53, 202, 90, 0.60)',
        'a65': 'rgba(53, 202, 90, 0.65)',
        'a70': 'rgba(53, 202, 90, 0.70)',
        'a75': 'rgba(53, 202, 90, 0.75)',
        'a80': 'rgba(53, 202, 90, 0.80)',
        'a85': 'rgba(53, 202, 90, 0.85)',
        'a90': 'rgba(53, 202, 90, 0.90)',
        'a95': 'rgba(53, 202, 90, 0.95)',
      },
      orange: {
        '50': 'rgba(255, 249, 240, 1)',
        '100': 'rgba(255, 242, 224, 1)',
        '200': 'rgba(255, 219, 168, 1)',
        '300': 'rgba(255, 196, 112, 1)',
        '400': 'rgba(255, 172, 56, 1)',
        '500': 'rgba(255, 149, 0, 1)',
        '600': 'rgba(209, 122, 0, 1)',
        '700': 'rgba(163, 95, 0, 1)',
        '800': 'rgba(117, 69, 0, 1)',
        '900': 'rgba(71, 42, 0, 1)',

        'a5': 'rgba(255, 149, 0, 0.05)',
        'a10': 'rgba(255, 149, 0, 0.10)',
        'a15': 'rgba(255, 149, 0, 0.15)',
        'a20': 'rgba(255, 149, 0, 0.20)',
        'a25': 'rgba(255, 149, 0, 0.25)',
        'a30': 'rgba(255, 149, 0, 0.30)',
        'a35': 'rgba(255, 149, 0, 0.35)',
        'a40': 'rgba(255, 149, 0, 0.40)',
        'a45': 'rgba(255, 149, 0, 0.45)',
        'a50': 'rgba(255, 149, 0, 0.50)',
        'a55': 'rgba(255, 149, 0, 0.55)',
        'a60': 'rgba(255, 149, 0, 0.60)',
        'a65': 'rgba(255, 149, 0, 0.65)',
        'a70': 'rgba(255, 149, 0, 0.70)',
        'a75': 'rgba(255, 149, 0, 0.75)',
        'a80': 'rgba(255, 149, 0, 0.80)',
        'a85': 'rgba(255, 149, 0, 0.85)',
        'a90': 'rgba(255, 149, 0, 0.90)',
        'a95': 'rgba(255, 149, 0, 0.95)',
      },
      red: {
        '50': 'rgba(255, 241, 240, 1)',
        '100': 'rgba(255, 231, 229, 1)',
        '200': 'rgba(255, 187, 184, 1)',
        '300': 'rgba(255, 144, 138, 1)',
        '400': 'rgba(255, 100, 92, 1)',
        '500': 'rgba(255, 59, 48, 1)',
        '600': 'rgba(245, 13, 0, 1)',
        '700': 'rgba(189, 10, 0, 1)',
        '800': 'rgba(133, 7, 0, 1)',
        '900': 'rgba(77, 4, 0, 1)',

        'a5': 'rgba(255, 59, 48, 0.05)',
        'a10': 'rgba(255, 59, 48, 0.10)',
        'a15': 'rgba(255, 59, 48, 0.15)',
        'a20': 'rgba(255, 59, 48, 0.20)',
        'a25': 'rgba(255, 59, 48, 0.25)',
        'a30': 'rgba(255, 59, 48, 0.30)',
        'a35': 'rgba(255, 59, 48, 0.35)',
        'a40': 'rgba(255, 59, 48, 0.40)',
        'a45': 'rgba(255, 59, 48, 0.45)',
        'a50': 'rgba(255, 59, 48, 0.50)',
        'a55': 'rgba(255, 59, 48, 0.55)',
        'a60': 'rgba(255, 59, 48, 0.60)',
        'a65': 'rgba(255, 59, 48, 0.65)',
        'a70': 'rgba(255, 59, 48, 0.70)',
        'a75': 'rgba(255, 59, 48, 0.75)',
        'a80': 'rgba(255, 59, 48, 0.80)',
        'a85': 'rgba(255, 59, 48, 0.85)',
        'a90': 'rgba(255, 59, 48, 0.90)',
        'a95': 'rgba(255, 59, 48, 0.95)',
      },
    },
    radius: {
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '8px',
      8: '10px',
      9: '12px',
      10: '14px',
      11: '16px',
      12: '18px',
      13: '20px',
    },
    size: {
      1: '1px',
      2: '2px',
      3: '4px',
      4: '6px',
      5: '8px',
      6: '10px',
      7: '12px',
      8: '14px',
      9: '16px',
      10: '18px',
      11: '20px',
      12: '22px',
      13: '24px',
      14: '26px',
      15: '28px',
      16: '30px',
      17: '32px',
      18: '36px',
      19: '40px',
      20: '44px',
      21: '48px',
      22: '52px',
      23: '56px',
      24: '60px',
      25: '64px',
    },
    space: {
      1: '2px',
      2: '4px',
      3: '6px',
      4: '8px',
      5: '10px',
      6: '12px',
      7: '14px',
      8: '16px',
      9: '18px',
      10: '20px',
      11: '24px',
      12: '28px',
      13: '32px',
      14: '36px',
      15: '40px',
      16: '48px',
      17: '56px',
      18: '64px',
      19: '72px',
      20: '80px',
      21: '96px',
      22: '112px',
      23: '128px',
    },
    weight: {
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      5: 500,
      6: 600,
      7: 700,
      8: 800,
      9: 900,
    },
    'font-family': {
      1: 'sans-serif',
      2: "'Open Sans'",
      /** font weights: 100, 300, 400, 500, 700, 900 */
      3: "'Roboto'",
      /** font weights: 200, 300, 400, 600, 700, 900 ? */
      4: "'Segoe UI'",
      /** font weights: 100, 200, 400, 500, 700 */
      5: "'Helvetica Neue'",
    },
  },

  tokens: {
    color: {
      bg: {
        primary: 'var(--uu-color-neutral-0)',
        secondary: 'var(--uu-color-neutral-50)',
        contrast: 'var(--uu-color-neutral-900)',
      },
      text: {
        primary: 'var(--uu-color-neutral-1000)',
        secondary: 'var(--uu-color-neutral-500)',
        contrast: 'var(--uu-color-neutral-0)',
        link: 'var(--uu-sys-color-blue-600)',
        'link-visited': 'var(--uu-sys-color-blue-800)',
      },
      primary: {
        '50': 'var(--uu-sys-color-blue-50)',
        '100': 'var(--uu-sys-color-blue-100)',
        '200': 'var(--uu-sys-color-blue-200)',
        '300': 'var(--uu-sys-color-blue-300)',
        '400': 'var(--uu-sys-color-blue-400)',
        '500': 'var(--uu-sys-color-blue-500)',
        '600': 'var(--uu-sys-color-blue-600)',
        '700': 'var(--uu-sys-color-blue-700)',
        '800': 'var(--uu-sys-color-blue-800)',
        '900': 'var(--uu-sys-color-blue-900)',

        'a5': 'var(--uu-sys-color-blue-a5)',
        'a10': 'var(--uu-sys-color-blue-a10)',
        'a15': 'var(--uu-sys-color-blue-a15)',
        'a20': 'var(--uu-sys-color-blue-a20)',
        'a25': 'var(--uu-sys-color-blue-a25)',
        'a30': 'var(--uu-sys-color-blue-a30)',
        'a35': 'var(--uu-sys-color-blue-a35)',
        'a40': 'var(--uu-sys-color-blue-a40)',
        'a45': 'var(--uu-sys-color-blue-a45)',
        'a50': 'var(--uu-sys-color-blue-a50)',
        'a55': 'var(--uu-sys-color-blue-a55)',
        'a60': 'var(--uu-sys-color-blue-a60)',
        'a65': 'var(--uu-sys-color-blue-a65)',
        'a70': 'var(--uu-sys-color-blue-a70)',
        'a75': 'var(--uu-sys-color-blue-a75)',
        'a80': 'var(--uu-sys-color-blue-a80)',
        'a85': 'var(--uu-sys-color-blue-a85)',
        'a90': 'var(--uu-sys-color-blue-a90)',
        'a95': 'var(--uu-sys-color-blue-a95)',
      },
      accent: {
        '50': 'var(--uu-sys-color-pink-50)',
        '100': 'var(--uu-sys-color-pink-100)',
        '200': 'var(--uu-sys-color-pink-200)',
        '300': 'var(--uu-sys-color-pink-300)',
        '400': 'var(--uu-sys-color-pink-400)',
        '500': 'var(--uu-sys-color-pink-500)',
        '600': 'var(--uu-sys-color-pink-600)',
        '700': 'var(--uu-sys-color-pink-700)',
        '800': 'var(--uu-sys-color-pink-800)',
        '900': 'var(--uu-sys-color-pink-900)',

        'a5': 'var(--uu-sys-color-pink-a5)',
        'a10': 'var(--uu-sys-color-pink-a10)',
        'a15': 'var(--uu-sys-color-pink-a15)',
        'a20': 'var(--uu-sys-color-pink-a20)',
        'a25': 'var(--uu-sys-color-pink-a25)',
        'a30': 'var(--uu-sys-color-pink-a30)',
        'a35': 'var(--uu-sys-color-pink-a35)',
        'a40': 'var(--uu-sys-color-pink-a40)',
        'a45': 'var(--uu-sys-color-pink-a45)',
        'a50': 'var(--uu-sys-color-pink-a50)',
        'a55': 'var(--uu-sys-color-pink-a55)',
        'a60': 'var(--uu-sys-color-pink-a60)',
        'a65': 'var(--uu-sys-color-pink-a65)',
        'a70': 'var(--uu-sys-color-pink-a70)',
        'a75': 'var(--uu-sys-color-pink-a75)',
        'a80': 'var(--uu-sys-color-pink-a80)',
        'a85': 'var(--uu-sys-color-pink-a85)',
        'a90': 'var(--uu-sys-color-pink-a90)',
        'a95': 'var(--uu-sys-color-pink-a95)',
      },
      success: {
        '50': 'var(--uu-sys-color-green-50)',
        '100': 'var(--uu-sys-color-green-100)',
        '200': 'var(--uu-sys-color-green-200)',
        '300': 'var(--uu-sys-color-green-300)',
        '400': 'var(--uu-sys-color-green-400)',
        '500': 'var(--uu-sys-color-green-500)',
        '600': 'var(--uu-sys-color-green-600)',
        '700': 'var(--uu-sys-color-green-700)',
        '800': 'var(--uu-sys-color-green-800)',
        '900': 'var(--uu-sys-color-green-900)',

        'a5': 'var(--uu-sys-color-green-a5)',
        'a10': 'var(--uu-sys-color-green-a10)',
        'a15': 'var(--uu-sys-color-green-a15)',
        'a20': 'var(--uu-sys-color-green-a20)',
        'a25': 'var(--uu-sys-color-green-a25)',
        'a30': 'var(--uu-sys-color-green-a30)',
        'a35': 'var(--uu-sys-color-green-a35)',
        'a40': 'var(--uu-sys-color-green-a40)',
        'a45': 'var(--uu-sys-color-green-a45)',
        'a50': 'var(--uu-sys-color-green-a50)',
        'a55': 'var(--uu-sys-color-green-a55)',
        'a60': 'var(--uu-sys-color-green-a60)',
        'a65': 'var(--uu-sys-color-green-a65)',
        'a70': 'var(--uu-sys-color-green-a70)',
        'a75': 'var(--uu-sys-color-green-a75)',
        'a80': 'var(--uu-sys-color-green-a80)',
        'a85': 'var(--uu-sys-color-green-a85)',
        'a90': 'var(--uu-sys-color-green-a90)',
        'a95': 'var(--uu-sys-color-green-a95)',
      },
      warning: {
        '50': 'var(--uu-sys-color-orange-50)',
        '100': 'var(--uu-sys-color-orange-100)',
        '200': 'var(--uu-sys-color-orange-200)',
        '300': 'var(--uu-sys-color-orange-300)',
        '400': 'var(--uu-sys-color-orange-400)',
        '500': 'var(--uu-sys-color-orange-500)',
        '600': 'var(--uu-sys-color-orange-600)',
        '700': 'var(--uu-sys-color-orange-700)',
        '800': 'var(--uu-sys-color-orange-800)',
        '900': 'var(--uu-sys-color-orange-900)',

        'a5': 'var(--uu-sys-color-orange-a5)',
        'a10': 'var(--uu-sys-color-orange-a10)',
        'a15': 'var(--uu-sys-color-orange-a15)',
        'a20': 'var(--uu-sys-color-orange-a20)',
        'a25': 'var(--uu-sys-color-orange-a25)',
        'a30': 'var(--uu-sys-color-orange-a30)',
        'a35': 'var(--uu-sys-color-orange-a35)',
        'a40': 'var(--uu-sys-color-orange-a40)',
        'a45': 'var(--uu-sys-color-orange-a45)',
        'a50': 'var(--uu-sys-color-orange-a50)',
        'a55': 'var(--uu-sys-color-orange-a55)',
        'a60': 'var(--uu-sys-color-orange-a60)',
        'a65': 'var(--uu-sys-color-orange-a65)',
        'a70': 'var(--uu-sys-color-orange-a70)',
        'a75': 'var(--uu-sys-color-orange-a75)',
        'a80': 'var(--uu-sys-color-orange-a80)',
        'a85': 'var(--uu-sys-color-orange-a85)',
        'a90': 'var(--uu-sys-color-orange-a90)',
        'a95': 'var(--uu-sys-color-orange-a95)',
      },
      danger: {
        '50': 'var(--uu-sys-color-red-50)',
        '100': 'var(--uu-sys-color-red-100)',
        '200': 'var(--uu-sys-color-red-200)',
        '300': 'var(--uu-sys-color-red-300)',
        '400': 'var(--uu-sys-color-red-400)',
        '500': 'var(--uu-sys-color-red-500)',
        '600': 'var(--uu-sys-color-red-600)',
        '700': 'var(--uu-sys-color-red-700)',
        '800': 'var(--uu-sys-color-red-800)',
        '900': 'var(--uu-sys-color-red-900)',

        'a5': 'var(--uu-sys-color-red-a5)',
        'a10': 'var(--uu-sys-color-red-a10)',
        'a15': 'var(--uu-sys-color-red-a15)',
        'a20': 'var(--uu-sys-color-red-a20)',
        'a25': 'var(--uu-sys-color-red-a25)',
        'a30': 'var(--uu-sys-color-red-a30)',
        'a35': 'var(--uu-sys-color-red-a35)',
        'a40': 'var(--uu-sys-color-red-a40)',
        'a45': 'var(--uu-sys-color-red-a45)',
        'a50': 'var(--uu-sys-color-red-a50)',
        'a55': 'var(--uu-sys-color-red-a55)',
        'a60': 'var(--uu-sys-color-red-a60)',
        'a65': 'var(--uu-sys-color-red-a65)',
        'a70': 'var(--uu-sys-color-red-a70)',
        'a75': 'var(--uu-sys-color-red-a75)',
        'a80': 'var(--uu-sys-color-red-a80)',
        'a85': 'var(--uu-sys-color-red-a85)',
        'a90': 'var(--uu-sys-color-red-a90)',
        'a95': 'var(--uu-sys-color-red-a95)',
      },
      neutral: {
        '0': 'var(--uu-sys-color-white)',
        '50': 'var(--uu-sys-color-gray-40)',
        '100': 'var(--uu-sys-color-gray-60)',
        '150': 'var(--uu-sys-color-gray-100)',
        '200': 'var(--uu-sys-color-gray-140)',
        '250': 'var(--uu-sys-color-gray-200)',
        '300': 'var(--uu-sys-color-gray-260)',
        '350': 'var(--uu-sys-color-gray-320)',
        '400': 'var(--uu-sys-color-gray-380)',
        '450': 'var(--uu-sys-color-gray-440)',
        '500': 'var(--uu-sys-color-gray-500)',
        '550': 'var(--uu-sys-color-gray-560)',
        '600': 'var(--uu-sys-color-gray-620)',
        '650': 'var(--uu-sys-color-gray-680)',
        '700': 'var(--uu-sys-color-gray-740)',
        '750': 'var(--uu-sys-color-gray-800)',
        '800': 'var(--uu-sys-color-gray-860)',
        '850': 'var(--uu-sys-color-gray-900)',
        '900': 'var(--uu-sys-color-gray-940)',
        '950': 'var(--uu-sys-color-gray-960)',
        '1000': 'var(--uu-sys-color-black)',

        'a5': 'var(--uu-sys-color-black-a5)',
        'a10': 'var(--uu-sys-color-black-a10)',
        'a15': 'var(--uu-sys-color-black-a15)',
        'a20': 'var(--uu-sys-color-black-a20)',
        'a25': 'var(--uu-sys-color-black-a25)',
        'a30': 'var(--uu-sys-color-black-a30)',
        'a35': 'var(--uu-sys-color-black-a35)',
        'a40': 'var(--uu-sys-color-black-a40)',
        'a45': 'var(--uu-sys-color-black-a45)',
        'a50': 'var(--uu-sys-color-black-a50)',
        'a55': 'var(--uu-sys-color-black-a55)',
        'a60': 'var(--uu-sys-color-black-a60)',
        'a65': 'var(--uu-sys-color-black-a65)',
        'a70': 'var(--uu-sys-color-black-a70)',
        'a75': 'var(--uu-sys-color-black-a75)',
        'a80': 'var(--uu-sys-color-black-a80)',
        'a85': 'var(--uu-sys-color-black-a85)',
        'a90': 'var(--uu-sys-color-black-a90)',
        'a95': 'var(--uu-sys-color-black-a95)',
      },
    },
    'font-family':
      'var(--uu-sys-font-family-5), var(--uu-sys-font-family-4), var(--uu-sys-font-family-3), var(--uu-sys-font-family-2), var(--uu-sys-font-family-1)',
    'font-size': {
      '2xs': 'var(--uu-sys-size-6)',
      'xs': 'var(--uu-sys-size-7)',
      's': 'var(--uu-sys-size-8)',
      'm': 'var(--uu-sys-size-9)',
      'l': 'var(--uu-sys-size-10)',
      'xl': 'var(--uu-sys-size-11)',
    },
    'font-weight': {
      100: 'var(--uu-sys-weight-1)',
      200: 'var(--uu-sys-weight-2)',
      300: 'var(--uu-sys-weight-3)',
      400: 'var(--uu-sys-weight-4)',
      500: 'var(--uu-sys-weight-5)',
      600: 'var(--uu-sys-weight-6)',
      700: 'var(--uu-sys-weight-7)',
      800: 'var(--uu-sys-weight-8)',
      900: 'var(--uu-sys-weight-9)',
    },
    'line-height': {
      'xs': 'var(--uu-sys-size-9)',
      's': 'var(--uu-sys-size-10)',
      'm': 'var(--uu-sys-size-11)',
      'l': 'var(--uu-sys-size-12)',
      'xl': 'var(--uu-sys-size-13)',
    },
    height: {
      'xs': 'var(--uu-sys-size-9)',
      's': 'var(--uu-sys-size-13)',
      'm': 'var(--uu-sys-size-17)',
      'l': 'var(--uu-sys-size-19)',
    },
    'icon-height': {
      'xs': 'var(--uu-sys-size-7)',
      's': 'var(--uu-sys-size-8)',
      'm': 'var(--uu-sys-size-9)',
      'l': 'var(--uu-sys-size-10)',
    },
    radius: {
      '3xs': 'var(--uu-sys-radius-2)',
      '2xs': 'var(--uu-sys-radius-3)',
      'xs': 'var(--uu-sys-radius-4)',
      's': 'var(--uu-sys-radius-6)',
      'm': 'var(--uu-sys-radius-7)',
      'l': 'var(--uu-sys-radius-8)',
      'xl': 'var(--uu-sys-radius-10)',
    },
    space: {
      '3xs': 'var(--uu-sys-space-1)',
      '2xs': 'var(--uu-sys-space-2)',
      'xs': 'var(--uu-sys-space-4)',
      's': 'var(--uu-sys-space-6)',
      'm': 'var(--uu-sys-space-8)',
      'l': 'var(--uu-sys-space-10)',
      'xl': 'var(--uu-sys-space-11)',
      '2xl': 'var(--uu-sys-space-13)',
      '3xl': 'var(--uu-sys-space-15)',
      '4xl': 'var(--uu-sys-space-16)',
      '5xl': 'var(--uu-sys-space-18)',
      '6xl': 'var(--uu-sys-space-20)',
    },
  },

  components: {
    button: buttonStyleTokens,
    dropdown: dropdownStyleTokens,
    input: inputStyleTokens,
    modal: modalStyleTokens,
    option: optionStyleTokens,
    overlay: overlayStyleTokens,
    switch: switchStyleTokens,
    tag: tagStyleTokens,
  },
};

export const darkModePreset: TStylePreset = {
  primitives: {
    color: {
      blue: {
        '50': 'rgba(240, 247, 255, 1)',
        '100': 'rgba(224, 240, 255, 1)',
        '200': 'rgba(173, 214, 255, 1)',
        '300': 'rgba(117, 186, 255, 1)',
        '400': 'rgba(61, 158, 255, 1)',
        '500': 'rgba(10, 132, 255, 1)',
        '600': 'rgba(0, 107, 214, 1)',
        '700': 'rgba(0, 84, 168, 1)',
        '800': 'rgba(0, 61, 122, 1)',
        '900': 'rgba(0, 36, 71, 1)',

        'a5': 'rgba(10, 132, 255, 0.05)',
        'a10': 'rgba(10, 132, 255, 0.1)',
        'a15': 'rgba(10, 132, 255, 0.15)',
        'a20': 'rgba(10, 132, 255, 0.2)',
        'a25': 'rgba(10, 132, 255, 0.25)',
        'a30': 'rgba(10, 132, 255, 0.3)',
        'a35': 'rgba(10, 132, 255, 0.35)',
        'a40': 'rgba(10, 132, 255, 0.4)',
        'a45': 'rgba(10, 132, 255, 0.45)',
        'a50': 'rgba(10, 132, 255, 0.5)',
        'a55': 'rgba(10, 132, 255, 0.55)',
        'a60': 'rgba(10, 132, 255, 0.6)',
        'a65': 'rgba(10, 132, 255, 0.65)',
        'a70': 'rgba(10, 132, 255, 0.7)',
        'a75': 'rgba(10, 132, 255, 0.75)',
        'a80': 'rgba(10, 132, 255, 0.8)',
        'a85': 'rgba(10, 132, 255, 0.85)',
        'a90': 'rgba(10, 132, 255, 0.9)',
        'a95': 'rgba(10, 132, 255, 0.95)',
      },
      green: {
        '50': 'rgba(242, 253, 244, 1)',
        '100': 'rgba(229, 250, 233, 1)',
        '200': 'rgba(187, 242, 195, 1)',
        '300': 'rgba(140, 233, 154, 1)',
        '400': 'rgba(97, 224, 116, 1)',
        '500': 'rgba(50, 215, 75, 1)',
        '600': 'rgba(35, 179, 57, 1)',
        '700': 'rgba(27, 141, 45, 1)',
        '800': 'rgba(19, 98, 31, 1)',
        '900': 'rgba(12, 60, 19, 1)',

        'a5': 'rgba(50, 215, 75, 0.05)',
        'a10': 'rgba(50, 215, 75, 0.1)',
        'a15': 'rgba(50, 215, 75, 0.15)',
        'a20': 'rgba(50, 215, 75, 0.2)',
        'a25': 'rgba(50, 215, 75, 0.25)',
        'a30': 'rgba(50, 215, 75, 0.3)',
        'a35': 'rgba(50, 215, 75, 0.35)',
        'a40': 'rgba(50, 215, 75, 0.4)',
        'a45': 'rgba(50, 215, 75, 0.45)',
        'a50': 'rgba(50, 215, 75, 0.5)',
        'a55': 'rgba(50, 215, 75, 0.55)',
        'a60': 'rgba(50, 215, 75, 0.6)',
        'a65': 'rgba(50, 215, 75, 0.65)',
        'a70': 'rgba(50, 215, 75, 0.7)',
        'a75': 'rgba(50, 215, 75, 0.75)',
        'a80': 'rgba(50, 215, 75, 0.8)',
        'a85': 'rgba(53, 202, 90, 0.85)',
        'a90': 'rgba(53, 202, 90, 0.9)',
        'a95': 'rgba(53, 202, 90, 0.95)',
      },
      orange: {
        '50': 'rgba(255, 249, 240, 1)',
        '100': 'rgba(255, 243, 224, 1)',
        '200': 'rgba(255, 223, 173, 1)',
        '300': 'rgba(255, 201, 117, 1)',
        '400': 'rgba(255, 181, 66, 1)',
        '500': 'rgba(255, 159, 10, 1)',
        '600': 'rgba(214, 130, 0, 1)',
        '700': 'rgba(168, 102, 0, 1)',
        '800': 'rgba(117, 71, 0, 1)',
        '900': 'rgba(71, 43, 0, 1)',

        'a5': 'rgba(255, 159, 10, 0.05)',
        'a10': 'rgba(255, 159, 10, 0.1)',
        'a15': 'rgba(255, 159, 10, 0.15)',
        'a20': 'rgba(255, 159, 10, 0.2)',
        'a25': 'rgba(255, 159, 10, 0.25)',
        'a30': 'rgba(255, 159, 10, 0.3)',
        'a35': 'rgba(255, 159, 10, 0.35)',
        'a40': 'rgba(255, 159, 10, 0.4)',
        'a45': 'rgba(255, 159, 10, 0.45)',
        'a50': 'rgba(255, 159, 10, 0.5)',
        'a55': 'rgba(255, 159, 10, 0.55)',
        'a60': 'rgba(255, 159, 10, 0.6)',
        'a65': 'rgba(255, 159, 10, 0.65)',
        'a70': 'rgba(255, 159, 10, 0.7)',
        'a75': 'rgba(255, 159, 10, 0.75)',
        'a80': 'rgba(255, 159, 10, 0.8)',
        'a85': 'rgba(255, 149, 0, 0.85)',
        'a90': 'rgba(255, 149, 0, 0.9)',
        'a95': 'rgba(255, 149, 0, 0.95)',
      },
      red: {
        '50': 'rgba(255, 241, 240, 1)',
        '100': 'rgba(255, 231, 229, 1)',
        '200': 'rgba(255, 188, 184, 1)',
        '300': 'rgba(255, 149, 143, 1)',
        '400': 'rgba(255, 106, 97, 1)',
        '500': 'rgba(255, 69, 58, 1)',
        '600': 'rgba(250, 14, 0, 1)',
        '700': 'rgba(194, 11, 0, 1)',
        '800': 'rgba(133, 7, 0, 1)',
        '900': 'rgba(77, 4, 0, 1)',

        'a5': 'rgba(255, 69, 58, 0.05)',
        'a10': 'rgba(255, 69, 58, 0.1)',
        'a15': 'rgba(255, 69, 58, 0.15)',
        'a20': 'rgba(255, 69, 58, 0.2)',
        'a25': 'rgba(255, 69, 58, 0.25)',
        'a30': 'rgba(255, 69, 58, 0.3)',
        'a35': 'rgba(255, 69, 58, 0.35)',
        'a40': 'rgba(255, 69, 58, 0.4)',
        'a45': 'rgba(255, 69, 58, 0.45)',
        'a50': 'rgba(255, 69, 58, 0.5)',
        'a55': 'rgba(255, 69, 58, 0.55)',
        'a60': 'rgba(255, 69, 58, 0.6)',
        'a65': 'rgba(255, 69, 58, 0.65)',
        'a70': 'rgba(255, 69, 58, 0.7)',
        'a75': 'rgba(255, 69, 58, 0.75)',
        'a80': 'rgba(255, 69, 58, 0.8)',
        'a85': 'rgba(255, 69, 58, 0.85)',
        'a90': 'rgba(255, 69, 58, 0.9)',
        'a95': 'rgba(255, 69, 58, 0.95)',
      },
    },
  },
  tokens: {
    color: {
      bg: {
        primary: 'var(--uu-color-neutral-900)',
        secondary: 'var(--uu-color-neutral-1000)',
        contrast: 'var(--uu-color-neutral-0)',
      },
      text: {
        primary: 'var(--uu-color-neutral-0)',
        secondary: 'var(--uu-color-neutral-300)',
        contrast: 'var(--uu-color-neutral-1000)',
        link: 'var(--uu-sys-color-blue-400)',
        'link-visited': 'var(--uu-sys-color-blue-300)',
      },
      neutral: {
        'a5': 'var(--uu-sys-color-white-a5)',
        'a10': 'var(--uu-sys-color-white-a10)',
        'a15': 'var(--uu-sys-color-white-a15)',
        'a20': 'var(--uu-sys-color-white-a20)',
        'a25': 'var(--uu-sys-color-white-a25)',
        'a30': 'var(--uu-sys-color-white-a30)',
        'a35': 'var(--uu-sys-color-white-a35)',
        'a40': 'var(--uu-sys-color-white-a40)',
        'a45': 'var(--uu-sys-color-white-a45)',
        'a50': 'var(--uu-sys-color-white-a50)',
        'a55': 'var(--uu-sys-color-white-a55)',
        'a60': 'var(--uu-sys-color-white-a60)',
        'a65': 'var(--uu-sys-color-white-a65)',
        'a70': 'var(--uu-sys-color-white-a70)',
        'a75': 'var(--uu-sys-color-white-a75)',
        'a80': 'var(--uu-sys-color-white-a80)',
        'a85': 'var(--uu-sys-color-white-a85)',
        'a90': 'var(--uu-sys-color-white-a90)',
        'a95': 'var(--uu-sys-color-white-a95)',
      },
    },
  },
  components: {
    button: buttonDarkModeStyleTokens,
    dropdown: dropdownDarkModeStyleTokens,
    input: inputDarkModeStyleTokens,
    option: optionDarkModeStyleTokens,
    switch: switchDarkModeStyleTokens,
    tag: tagDarkModeStyleTokens,
  },
};
