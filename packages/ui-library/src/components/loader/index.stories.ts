import { html } from 'lit-html';
import { BlrLoader as BlrLoaderClass } from './index';
import { ActionSizes, FeedbackVariants } from '../../globals/constants';

import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/BlrLoader',
  argTypes: {
    size: {
      options: ActionSizes,
      control: { type: 'select' },
    },
    variant: {
      options: FeedbackVariants,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
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
  theme: 'Light',
  size: 'md',
  variant: 'default',
  loadingStatus: 'Loading',
};
