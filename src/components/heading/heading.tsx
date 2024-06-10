import React from 'react';

import { CssVariableGroup } from 'contexts';
import { classNames } from 'utils';

import { sizeByTagMap } from './heading.constants';
import { IHeadingProps } from './heading.types';
import styles from './heading.module.scss';

export function Heading({ className, color = 'primary', tag = 'h1', size, ...props }: IHeadingProps) {
  const classes = classNames(
    CssVariableGroup.HeadingTokens,
    styles.heading,
    styles[`heading--color-${color}`],
    styles[`heading--size-${size || sizeByTagMap[tag]}`],
    className
  );

  return React.createElement(tag, { ...props, className: classes });
}
