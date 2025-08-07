import React from 'react';
import { classNames } from '@ur-apps/common-fe';

import { CssVariableGroup } from 'contexts';
import { ReactComponent as CheckmarkIconFilled } from 'icons/checkmark.circle.filled.svg';
import { ReactComponent as CheckmarkIconOutlined } from 'icons/checkmark.circle.outlined.svg';
import { ReactComponent as ExclamationCircleIconFilled } from 'icons/exclamationmark.circle.filled.svg';
import { ReactComponent as ExclamationCircleIconOutlined } from 'icons/exclamationmark.circle.outlined.svg';
import { ReactComponent as ExclamationTriangleIconFilled } from 'icons/exclamationmark.triangle.filled.svg';
import { ReactComponent as ExclamationTriangleIconOutlined } from 'icons/exclamationmark.triangle.outlined.svg';
import { ReactComponent as InfoIconFilled } from 'icons/info.circle.filled.svg';
import { ReactComponent as InfoIconOutlined } from 'icons/info.circle.outlined.svg';

import { IStatusIconProps, StatusIconStatus, StatusIconVariant } from './status-icon.types';
import styles from './status-icon.module.scss';

const iconMap: Record<StatusIconVariant, Record<StatusIconStatus, React.FC<React.SVGProps<SVGSVGElement>>>> = {
  filled: {
    info: InfoIconFilled,
    success: CheckmarkIconFilled,
    warning: ExclamationTriangleIconFilled,
    error: ExclamationCircleIconFilled,
  },
  outlined: {
    info: InfoIconOutlined,
    success: CheckmarkIconOutlined,
    warning: ExclamationTriangleIconOutlined,
    error: ExclamationCircleIconOutlined,
  },
};

export function StatusIcon({ className, status = 'info', variant = 'filled', size = 'm', ...props }: IStatusIconProps) {
  const classes = classNames(
    CssVariableGroup.StatusIconTokens,
    styles.icon,
    styles[`icon--status-${status}`],
    styles[`icon--size-${size}`],
    { [styles['icon--clickable']]: Boolean(props.onClick) },
    className
  );

  return React.createElement(iconMap[variant][status], {
    ...props,
    className: classes,
  });
}
