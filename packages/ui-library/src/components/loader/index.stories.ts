import { html } from 'lit-html';
import { BlrLoader as BlrLoaderClass } from './index';
import { Sizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrLoader',
  argTypes: {
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
  },
};

export const BlrLoader = ({ size }: BlrLoaderClass) =>
  html` <blr-loader .size=${size} class="example-layout-class"></blr-loader> `;

BlrLoader.storyName = 'BlrLoader';

BlrLoader.args = {
  size: 'md',
};
