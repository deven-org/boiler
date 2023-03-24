import { html } from 'lit-html';
import { BlrLoader as BlrLoaderClass } from './index';
import { FeedbackSizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrLoader',
  argTypes: {
    size: {
      options: FeedbackSizes,
      control: { type: 'select' },
    },
    loaderVariant: {
      options: ['default', 'inverted'],
      control: { type: 'select' },
    },
  },
};

export const BlrLoader = ({ size, loaderVariant }: BlrLoaderClass) =>
  html` <blr-loader .size=${size} .loaderVariant=${loaderVariant}></blr-loader> `;

BlrLoader.storyName = 'BlrLoader';

BlrLoader.args = {
  size: 'md',
  loaderVariant: 'default',
};
