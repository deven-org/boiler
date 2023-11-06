import { BlrLoaderType, BlrLoaderRenderFunction } from './index';
import { ActionSizes, FeedbackVariants } from '../../../globals/constants';

import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Feedback/Loader',
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

export const BlrLoader = (params: BlrLoaderType) => BlrLoaderRenderFunction(params);

BlrLoader.storyName = 'Loader';

const args: BlrLoaderType = {
  theme: 'Light',
  size: 'md',
  variant: 'default',
  loadingStatus: 'Loading',
};

BlrLoader.args = args;
