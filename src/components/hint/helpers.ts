import { SvgIcon } from 'types';

import { HintColor, HintIcon } from './hint.types';

export function determineHintColorByIcon(icon: HintIcon | SvgIcon, color: HintColor | 'auto'): HintColor {
  if (color !== 'auto') {
    return color;
  }

  if (typeof icon !== 'string') {
    return 'primary';
  }

  switch (icon) {
    case 'info':
    case 'question':
      return 'primary';

    default:
      return icon;
  }
}
