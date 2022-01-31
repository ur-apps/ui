import React, { useState } from 'react';

import { useTheme } from 'contexts';
import { classNames } from 'utils';
import styles from './toggle.module.scss';

export interface IToggleProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  colorScheme?: 'light' | 'dark' | 'blue';
  autoColor?: boolean;
  name?: string;
  value?: string;
  leftValue?: string;
  rightValue?: string;
  leftText?: string;
  rightText?: string;
  leftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  rightIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

Toggle.defaultProps = {
  size: 'medium',
  colorScheme: 'light',
  autoColor: true,
  leftValue: 'off',
  rightValue: 'on',
  value: 'on',
} as IToggleProps;

export function Toggle({
  className,
  size,
  colorScheme,
  autoColor,
  name,
  leftValue,
  rightValue,
  value: defaultValue,
  leftText,
  rightText,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onChange,
}: IToggleProps) {
  const { theme } = useTheme();
  const [value, setValue] = useState(defaultValue);

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(evt);
    setValue(evt.target.value);
  };

  return (
    <div
      className={classNames(
        styles.toggle,
        styles[`toggle--${colorScheme}`],
        styles[`toggle--${size}`],
        autoColor ? styles[`toggle--${theme}-mode`] : undefined,
        className
      )}>
      <label
        className={classNames(
          styles.button,
          styles[`button--${size}`],
          styles[`button--${colorScheme}`],
          autoColor ? styles[`button--${theme}-mode`] : undefined,
          value === leftValue ? styles['button--active'] : undefined
        )}>
        <input
          className={styles.input}
          type="radio"
          name={name}
          value={leftValue}
          checked={value === leftValue}
          onChange={changeHandler}
        />
        {LeftIcon ? (
          <LeftIcon
            className={classNames(
              styles.icon,
              styles[`icon--${size}`],
              styles[`icon--${colorScheme}`],
              autoColor ? styles[`icon--${theme}-mode`] : undefined,
              value === leftValue ? styles['icon--active'] : undefined
            )}
          />
        ) : (
          leftText
        )}
      </label>

      <label
        className={classNames(
          styles.button,
          styles[`button--${size}`],
          styles[`button--${colorScheme}`],
          autoColor ? styles[`button--${theme}-mode`] : undefined,
          value === rightValue ? styles['button--active'] : undefined
        )}>
        <input
          className={styles.input}
          type="radio"
          name={name}
          value={rightValue}
          checked={value === rightValue}
          onChange={changeHandler}
        />
        {RightIcon ? (
          <RightIcon
            className={classNames(
              styles.icon,
              styles[`icon--${size}`],
              styles[`icon--${colorScheme}`],
              autoColor ? styles[`icon--${theme}-mode`] : undefined,
              value === rightValue ? styles['icon--active'] : undefined
            )}
          />
        ) : (
          rightText
        )}
      </label>
    </div>
  );
}
