import {
  IButtonStyleTokens,
  IDropdownStyleTokens,
  IInputStyleTokens,
  IModalStyleTokens,
  IOptionStyleTokens,
  IOverlayStyleTokens,
  ISwitchStyleTokens,
  ITagStyleTokens,
} from 'components';

export enum CssVariableGroup {
  SystemColors = 'uu-sys-colors',
  SystemSizes = 'uu-sys-sizes',
  SystemRadiuses = 'uu-sys-radiuses',
  SystemSpaces = 'uu-sys-spaces',
  SystemWeights = 'uu-sys-weights',
  SystemFontFamilies = 'uu-sys-font-families',

  Colors = 'uu-colors',
  Texts = 'uu-texts',
  Heights = 'uu-heights',
  IconHeights = 'uu-icon-heights',
  Radiuses = 'uu-radiuses',
  Spaces = 'uu-spaces',

  ButtonTokens = 'uu-button-tokens',
  DropdownTokens = 'uu-dropdown-tokens',
  InputTokens = 'uu-input-tokens',
  ModalTokens = 'uu-modal-tokens',
  OptionTokens = 'uu-option-tokens',
  OverlayTokens = 'uu-overlay-tokens',
  SwitchTokens = 'uu-switch-tokens',
  TagTokens = 'uu-tag-tokens',
}

type Size = '3xs' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
type Color = { [key: string]: Color | string };
type FontSize = Record<Extract<Size, '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl'>, string | number>;
type LineHeight = Record<Extract<Size, 'xs' | 's' | 'm' | 'l' | 'xl'>, string | number>;
type FontWeight = Record<string | number, string | number>;
type Height = Record<Extract<Size, 'xs' | 's' | 'm' | 'l'>, string | number>;
type Radius = Record<Extract<Size, '3xs' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl'>, string | number>;
type Spacing = Record<Size, string | number>;

export type TStylePrimitives = {
  color?: Color;
  radius?: Record<number | string, number | string>;
  size?: Record<number | string, number | string>;
  space?: Record<number | string, number | string>;
  weight?: Record<number | string, number | string>;
  'font-family'?: Record<number | string, string>;
};

export type TStyleTokens = {
  color?: {
    bg?: {
      primary: string;
      secondary: string;
      contrast: string;
    };
    text?: {
      primary: string;
      secondary: string;
      contrast: string;
      link: string;
      'link-visited': string;
    };
    primary?: Color;
    accent?: Color;
    success?: Color;
    warning?: Color;
    danger?: Color;
    neutral?: Color;
  };
  'font-family'?: string;
  'font-size'?: FontSize;
  'font-weight'?: FontWeight;
  'line-height'?: LineHeight;
  height?: Height;
  'icon-height'?: Height;
  radius?: Radius;
  space?: Spacing;
};

export type TStylePreset = {
  primitives?: TStylePrimitives;
  tokens?: TStyleTokens;
  components?: {
    button?: IButtonStyleTokens;
    dropdown?: IDropdownStyleTokens;
    input?: IInputStyleTokens;
    modal?: IModalStyleTokens;
    option?: IOptionStyleTokens;
    overlay?: IOverlayStyleTokens;
    switch?: ISwitchStyleTokens;
    tag?: ITagStyleTokens;
  };
};
