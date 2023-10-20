import { BlrLoader as BlrLoaderClass, BlrLoaderRenderFunction } from './index';
import { ActionSizes, FeedbackVariants } from '../../globals/constants';

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

export const BlrLoader = (params: BlrLoaderClass) => BlrLoaderRenderFunction(params);

BlrLoader.storyName = 'BlrLoader';

BlrLoader.args = {
  theme: 'Light',
  size: 'md',
  variant: 'default',
  loadingStatus: 'Loading',
};
