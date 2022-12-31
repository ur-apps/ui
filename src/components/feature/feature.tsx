import React from 'react';

import { Text } from '../text';
import { classNames } from 'utils';
import styles from './feature.module.scss';

export interface IFeatureProps {
  className?: string;
  size?: 's';
  colorScheme?: 'blue' | 'pink';
  category?: string;
  feature?: string;
  children?: React.ReactNode;
}

export function Feature({ className, size = 's', colorScheme = 'blue', category, feature, children }: IFeatureProps) {
  return (
    <div
      className={classNames(
        styles.feature,
        styles[`feature--size-${size}`],
        styles[`feature--color-${colorScheme}`],
        className
      )}>
      {category && (
        <Text
          className={classNames(
            styles.category,
            styles[`category--size-${size}`],
            styles[`category--color-${colorScheme}`]
          )}
          size="s">
          {category}
        </Text>
      )}
      <Text
        className={classNames(styles.text, styles[`text--size-${size}`], styles[`text--color-${colorScheme}`])}
        size="m">
        {children ?? feature}
      </Text>
    </div>
  );
}
