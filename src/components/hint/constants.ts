import { ReactComponent as CheckmarkIconFilled } from 'icons/checkmark.circle.filled.svg';
import { ReactComponent as CheckmarkIconOutlined } from 'icons/checkmark.circle.outlined.svg';
import { ReactComponent as ExclamationCircleIconFilled } from 'icons/exclamationmark.circle.filled.svg';
import { ReactComponent as ExclamationCircleIconOutlined } from 'icons/exclamationmark.circle.outlined.svg';
import { ReactComponent as ExclamationTriangleIconFilled } from 'icons/exclamationmark.triangle.filled.svg';
import { ReactComponent as ExclamationTriangleIconOutlined } from 'icons/exclamationmark.triangle.outlined.svg';
import { ReactComponent as InfoIconFilled } from 'icons/info.circle.filled.svg';
import { ReactComponent as InfoIconOutlined } from 'icons/info.circle.outlined.svg';
import { ReactComponent as QuestionIconFilled } from 'icons/questionmark.circle.filled.svg';
import { ReactComponent as QuestionIconOutlined } from 'icons/questionmark.circle.outlined.svg';
import type { SvgIcon } from 'types';

import type { TooltipSize } from '../tooltip';

import type { HintIcon, HintSize, HintVariant } from './hint.types';

export const iconMap: Record<HintVariant, Record<HintIcon, SvgIcon>> = {
  filled: {
    info: InfoIconFilled,
    question: QuestionIconFilled,
    success: CheckmarkIconFilled,
    warning: ExclamationTriangleIconFilled,
    danger: ExclamationCircleIconFilled,
  },
  outlined: {
    info: InfoIconOutlined,
    question: QuestionIconOutlined,
    success: CheckmarkIconOutlined,
    warning: ExclamationTriangleIconOutlined,
    danger: ExclamationCircleIconOutlined,
  },
};

export const tooltipSizeMap: Record<HintSize, TooltipSize> = {
  xs: 's',
  s: 's',
  m: 'm',
  l: 'm',
};
