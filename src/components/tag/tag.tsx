import React, { forwardRef, useEffect, useMemo } from 'react';

import { CssVariableGroup } from 'contexts';
import { classNames } from 'utils';

import { ITagButtonProps, ITagProps } from './tag.types';
import styles from './tag.module.scss';

export const Tag = forwardRef<HTMLDivElement, ITagProps>(function Tag(
  {
    className,
    variant = 'filled',
    color = 'primary',
    shape = 'default',
    size = 'm',
    label,
    buttons = [],
    children,
    ...props
  },
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
  const { startButtons, endButtons } = useMemo(() => {
    const startButtons: ITagButtonProps[] = [];
    const endButtons: ITagButtonProps[] = [];

    for (const button of buttons) {
      if (button.position === 'before') {
        startButtons.push(button);
      } else {
        endButtons.push(button);
      }
    }

    return { startButtons, endButtons };
  }, [buttons]);

  useEffect(() => {
    if (label && children) {
      console.warn(
        'The props "label" and "children" were passed to the Tag component. Only the "children" will be displayed.'
      );
    }
  }, [label, children]);

  return (
    <div {...props} className={classes} ref={ref}>
      {startButtons.map((button, i) => (
        <TagButton {...button} key={button.id ?? i} />
      ))}

      <span>{children || label}</span>

      {endButtons.map((button, i) => (
        <TagButton {...button} key={button.id ?? i} />
      ))}
    </div>
  );
});

export function TagButton({ className, icon, position = 'after', ...props }: ITagButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        styles[`button--position-${position}`],
        { [styles['button--interactive']]: Boolean(props.onClick) },
        className
      )}>
      {React.createElement(icon, {
        className: styles.button__icon,
      })}
    </button>
  );
}
