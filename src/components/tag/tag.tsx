import React, { forwardRef, useEffect } from 'react';

import { CssVariableGroup } from 'contexts';
import { classNames } from 'utils';

import { ITagProps } from './tag.types';
import styles from './tag.module.scss';

export const Tag = forwardRef<HTMLDivElement, ITagProps>(function Tag(
  { className, variant = 'filled', color = 'primary', shape = 'default', size = 'm', label, children, ...props },
  ref
) {
  const classes = classNames(
    CssVariableGroup.TagTokens,
    styles.tag,
    styles[`tag--variant-${variant}`],
    styles[`tag--color-${color}`],
    styles[`tag--shape-${shape}`],
    styles[`tag--size-${size}`],
    className
  );

  useEffect(() => {
    if (label && children) {
      console.warn(
        'The props "label" and "children" were passed to the Tag component. Only the "children" will be displayed.'
      );
    }
  }, [label, children]);

  return (
    <div {...props} className={classes} ref={ref}>
      {children || label}
    </div>
  );
});
