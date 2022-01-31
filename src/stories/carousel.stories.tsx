import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel, ICarouselProps } from '../components';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Logos = Template.bind({});
Logos.args = {
  data: [
    {
      name: 'oxford',
      img: 'https://developer.oxforddictionaries.com/images/logo.png',
      link: 'https://developer.oxforddictionaries.com/',
    },
    {
      name: 'forvo',
      img: 'https://static00.forvo.com/_presentation/assets/img/layout/logo.svg',
      link: 'https://forvo.com/',
    },
    {
      name: 'yandex',
      img: 'https://yastatic.net/q/logoaas/v2/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg?size=25&color=fff',
      link: 'https://tech.yandex.ru/dictionary/',
    },
  ],
} as ICarouselProps;

export const Images = Template.bind({});
Images.args = {
  data: [
    {
      name: 'cat1',
      img: 'https://uprostim.com/wp-content/uploads/2021/05/image014-7.jpg',
    },
    {
      name: 'cat2',
      img: 'https://uprostim.com/wp-content/uploads/2021/05/image071-4-scaled.jpg',
    },
    {
      name: 'cat3',
      img: 'https://uprostim.com/wp-content/uploads/2021/05/image035-6.jpg',
    },
  ],
} as ICarouselProps;
