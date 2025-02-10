import { forwardRef } from 'react';

import { Theme, useTheme } from 'contexts';
import { ReactComponent as MoonIcon } from 'icons/moon.filled.svg';
import { ReactComponent as SunIcon } from 'icons/sun.max.filled.svg';

import { SegmentedControl } from '../segmented-control';

import { IThemeControlProps } from './theme-control.types';

export const ThemeControl = forwardRef<HTMLDivElement, IThemeControlProps>(function ThemeControl(props, ref) {
  const { theme, switchTheme } = useTheme();

  const onChange: IThemeControlProps['onChange'] = (evt, value) => {
    switchTheme(value as Theme);
    props.onChange?.(evt, value);
  };

  return (
    <SegmentedControl
      {...props}
      value={theme}
      options={[
        { value: Theme.Light, icon: SunIcon },
        { value: Theme.Dark, icon: MoonIcon },
        { value: Theme.Auto, label: 'AUTO' },
      ]}
      onChange={onChange}
      ref={ref}
    />
  );
});
