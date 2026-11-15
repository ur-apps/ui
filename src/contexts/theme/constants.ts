import { CssVariableGroup, TStylePreset } from './types';

export const LOCAL_STORAGE_THEME_KEY = '_uu_theme';

export const THEME_ATTRIBUTE = 'data-uu-theme';

export const COMPONENT_TOKEN_CLASSES: Record<keyof NonNullable<TStylePreset['components']>, CssVariableGroup> = {
  button: CssVariableGroup.ButtonTokens,
  dropdown: CssVariableGroup.DropdownTokens,
  heading: CssVariableGroup.HeadingTokens,
  hint: CssVariableGroup.HintTokens,
  input: CssVariableGroup.InputTokens,
  modal: CssVariableGroup.ModalTokens,
  option: CssVariableGroup.OptionTokens,
  overlay: CssVariableGroup.OverlayTokens,
  segment: CssVariableGroup.SegmentTokens,
  segmentedControl: CssVariableGroup.SegmentedControlTokens,
  switch: CssVariableGroup.SwitchTokens,
  tag: CssVariableGroup.TagTokens,
  tooltip: CssVariableGroup.TooltipTokens,
};
