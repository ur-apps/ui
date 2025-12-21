import React from 'react';
import { classNames } from '@ur-apps/common-fe';

import { CssVariableGroup } from 'contexts';

import { sizeByTagMap } from './heading.constants';
import { IHeadingProps } from './heading.types';
import styles from './heading.module.scss';

export function Heading({ className, color = 'inherit', tag = 'h1', size, ...props }: IHeadingProps) {
  const classes = classNames(
    CssVariableGroup.HeadingTokens,
    styles.heading,
    styles[`heading--color-${color}`],
    styles[`heading--size-${size || sizeByTagMap[tag]}`],
    className
  );

  return React.createElement(tag, { ...props, className: classes });
}
