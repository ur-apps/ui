import { THeadingSize, THeadingTag } from './heading.types';

export const sizeByTagMap: Record<THeadingTag, THeadingSize> = {
  h1: 'xl',
  h2: 'l',
  h3: 'm',
  h4: 's',
  h5: 'xs',
  h6: '2xs',
};
