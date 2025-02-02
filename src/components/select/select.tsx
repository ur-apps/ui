import React, { ChangeEventHandler, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { ReactComponent as ChevronUpDownIcon } from 'icons/chevron.up.down.svg';

import { Dropdown } from '../dropdown';
import { Input } from '../input';
import { IOptionProps } from '../option';

import { ISelectComponent, ISelectProps, TSelectValue } from './select.types';
import styles from './select.module.scss';

export const Select = forwardRef(function Select<M extends boolean = false>(
  {
    className,
    variant = 'filled',
    dropdownVariant,
    shape = 'default',
    size = 'm',
    name,
    options,
    multiple,
    value,
    onChange,
    ...props
  }: ISelectProps<M>,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const inputRef = useRef<HTMLLabelElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [innerValue, setInnerValue] = useState<TSelectValue<M>>(
    multiple ? ([] as unknown as TSelectValue<M>) : undefined
  );

  const optionsMap = useMemo(
    () =>
      options.reduce<Record<string, IOptionProps>>((acc, current) => {
        acc[current.value] = current;

        return acc;
      }, {}),
    [options]
  );
  const shownValue = useMemo<string | string[]>(() => {
    if (value) {
      return Array.isArray(value) ? value.map((el) => optionsMap[el].label) : optionsMap[value as string].label;
    }

    if (innerValue) {
      return Array.isArray(innerValue)
        ? innerValue.map((el) => optionsMap[el].label)
        : optionsMap[innerValue as string].label;
    }

    return '';
  }, [value, innerValue, optionsMap]);

  const onToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const onChangeInner: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, checked } = evt.target;
    let newValue: TSelectValue<M>;

    if (multiple) {
      newValue = [] as unknown as TSelectValue<M>;

      // necessary for typescript to perceive the variable type correctly
      if (!Array.isArray(newValue)) {
        return;
      }

      if (Array.isArray(innerValue)) {
        newValue.push(...innerValue);
      }

      if (checked && !newValue.includes(value)) {
        newValue.push(value);
      } else if (!checked) {
        newValue = newValue.filter((el) => el !== value) as TSelectValue<M>;
      }
    } else {
      setIsDropdownOpen(false);

      newValue = value as TSelectValue<M>;
    }

    setInnerValue(newValue);
    onChange?.(evt, newValue);
  };

  const positionDropdown = useCallback(() => {
    if (!isDropdownOpen || !inputRef.current || !dropdownRef.current) return;

    const { width: inputWidth, left: inputLeft, bottom: inputBottom } = inputRef.current.getBoundingClientRect();
    const dropdownHeight = dropdownRef.current.offsetHeight;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      // document.documentElement.scrollHeight, // includes the dropdown height, so its value is temporarily excluded
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    const dropdownWidth = inputWidth + 'px';
    const dropdownTop =
      window.scrollY + inputBottom + Math.min(documentHeight - window.scrollY - inputBottom - dropdownHeight, 0) + 'px';
    const dropdownLeft = inputLeft + 'px';

    dropdownRef.current.style.setProperty('width', dropdownWidth);
    dropdownRef.current.style.setProperty('top', dropdownTop);
    dropdownRef.current.style.setProperty('left', dropdownLeft);
  }, [isDropdownOpen]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isDropdownOpen) {
      positionDropdown();

      window.addEventListener('resize', positionDropdown);

      return () => {
        window.removeEventListener('resize', positionDropdown);
      };
    }
  }, [isDropdownOpen, positionDropdown]);

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside, true);

      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }
  }, [handleClickOutside, isDropdownOpen]);

  return (
    <>
      <Input
        {...props}
        className={className}
        variant={variant}
        shape={shape}
        size={size}
        iconRight={ChevronUpDownIcon}
        value={shownValue}
        readOnly
        onClick={onToggleDropdown}
        wrapperRef={inputRef}
        ref={ref}
      />
      <Dropdown
        className={styles.dropdown}
        isOpen={isDropdownOpen}
        variant={dropdownVariant ?? variant}
        shape={shape}
        size={size}
        name={name}
        options={options}
        multiple={multiple}
        value={value ?? innerValue}
        onChange={onChangeInner}
        ref={dropdownRef}
      />
    </>
  );
}) as ISelectComponent;
