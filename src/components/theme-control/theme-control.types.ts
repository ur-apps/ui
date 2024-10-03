import { ISegmentedControlProps } from 'components/segmented-control';

export interface IThemeControlProps extends Omit<ISegmentedControlProps, 'value' | 'multiple' | 'options'> {}
