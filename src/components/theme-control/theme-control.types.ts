import { ISegmentedControlProps } from '../segmented-control';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IThemeControlProps extends Omit<ISegmentedControlProps, 'value' | 'multiple' | 'options'> {}
