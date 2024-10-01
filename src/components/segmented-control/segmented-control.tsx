import React, { forwardRef, useRef } from 'react';

import { CssVariableGroup } from 'contexts';
import { useName } from 'hooks';
import { classNames } from 'utils';

import { Segment } from '../segment';
import { ISegmentedControlComponent, ISegmentedControlProps, TSegmentedControlValue } from './segmented-control.types';
import styles from './segmented-control.module.scss';

export const SegmentedControl = forwardRef(function SegmentedControl<M extends boolean = false>(
  {
    className,
    variant = 'filled',
    color = 'primary',
    shape = 'default',
    size = 'm',
    value,
    multiple,
    options,
    disabled,
    onChange,
    ...props
  }: ISegmentedControlProps<M>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const classes = classNames(
    CssVariableGroup.SegmentedControlTokens,
    styles.control,
    styles[`control--variant-${variant}`],
    styles[`control--color-${color}`],
    styles[`control--shape-${shape}`],
    styles[`control--size-${size}`],
    className
  );
  const name = useName(props.name);
  const valuesMap = useRef<Record<string, Record<string, boolean>>>({});

  const onChangeInner = (
    evt: React.ChangeEvent<HTMLInputElement>,
    onChange?: ISegmentedControlProps<M>['onChange']
  ) => {
    const { type, name, value, checked } = evt.target;

    if (!valuesMap.current[name]) {
      valuesMap.current[name] = {};
    }

    valuesMap.current[name][value] = checked;

    if (type === 'checkbox') {
      const newValue = Object.keys(valuesMap.current[name]).filter((key) => valuesMap.current[name][key]);

      onChange?.(evt, newValue as TSegmentedControlValue<M>);
    } else {
      onChange?.(evt, value as TSegmentedControlValue<M>);
    }
  };

  return (
    <div className={classes} {...props} ref={ref}>
      {/* {variant === 'filled' && !multiple && <div className={styles.indicator} ref={indicatorRef} />} */}

      {options.map((option) => (
        <Segment
          type={multiple ? 'checkbox' : 'radio'}
          name={name}
          checked={
            value
              ? multiple && Array.isArray(value)
                ? value?.includes(option.value)
                : value === option.value
              : undefined
          }
          disabled={disabled}
          {...option}
          className={classNames(styles.segment, option.className)}
          variant={variant}
          color={color}
          shape={shape}
          size={size}
          onChange={(evt) => onChangeInner(evt, option.onChange ?? onChange)}
          key={option.value}
        />
      ))}
    </div>
  );
}) as ISegmentedControlComponent;
