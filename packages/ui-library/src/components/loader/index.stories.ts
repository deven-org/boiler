import { html } from 'lit-html';
import { BlrLoader as BlrLoaderClass } from './index';
import { FeedbackSizes } from '../../globals/constants';
import './index';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    size: {
      options: FeedbackSizes,
      control: { type: 'select' },
    },
    variant: {
      options: ['default', 'inverted'],
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrLoader = ({ size, variant, loadingStatus }: BlrLoaderClass) =>
  html` <blr-loader .size=${size} .variant=${variant} .loadingStatus=${loadingStatus}></blr-loader> `;

BlrLoader.storyName = 'BlrLoader';

BlrLoader.args = {
  size: 'md',
  variant: 'default',
  loadingStatus: 'Loading',
};
